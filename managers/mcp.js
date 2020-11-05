const Profile = require("../profile");
const errors = require("../structs/errors");
const { ApiException } = errors;
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

module.exports = (app) => {
	app.post('/fortnite/api/game/v2/profile/:accountId/client/:command', function (req, res) {
		res.set("Content-Type", "application/json");
		var accountId = req.params.accountId;

		const getOrCreateProfile = profileId => {
			var profileData = Profile.readProfile(accountId, profileId);

			if (!profileData) {
				profileData = Profile.readProfileTemplate(profileId);

				if (!profileData) {
					throw new ApiException(errors.com.epicgames.modules.profiles.operation_forbidden).with(profileId);
				}

				profileData.created = profileData.updated = new Date().toISOString();
				profileData['_id'] = accountId;
				profileData.accountId = accountId;

				//creating profile if it doesn't exist
				try {
					fs.mkdirSync(`./config/${accountId}/profiles`, { recursive: true });
					Profile.saveProfile(accountId, profileId, profileData);
				} catch (e) {
					console.log("Failed creating profile");
					throw e;
				}
			}

			return {
				profileData,
				response: {
					"profileRevision": profileData.rvn || 1,
					"profileId": profileId,
					"profileChangesBaseRevision": profileData.rvn || 1,
					"profileChanges": [],
					"serverTime": new Date().toISOString(),
					"profileCommandRevision": profileData.commandRevision || 1,
					"responseVersion": 1
				}
			};
		};

		var command = req.params.command;
		var profileId = req.query.profileId || "common_core";
		const { profileData, response } = getOrCreateProfile(profileId);
		const { profileChanges } = response;
		const checkValidProfileID = (...validProfileIds) => checkValidProfileID0(command, profileId, ...validProfileIds);

		//profile commands
		switch (command) {
			case "ClientQuestLogin":
				break;

			// case "CopyCosmeticLoadout":
			// 	break;

			case "MarkItemSeen":
				checkValidProfileID("common_core", "campaign", "athena");
				req.body.itemIds.forEach(itemId => Profile.changeItemAttribute(profileData, itemId, "item_seen", true, profileChanges));
				break;

			case "PopulatePrerolledOffers":
				checkValidProfileID("campaign");
				break;

			case "PurchaseCatalogEntry":
				checkValidProfileID("common_core");
				const shop = require("../shop.json")
				let catalogEntryToPurchase = null;

				for (storefront of shop.storefronts) {
					if (!storefront.name.startsWith("BR")) {
						throw new Error("Unsupported");
					}

					for (catalogEntry of storefront.catalogEntries) {
						if (catalogEntry.offerId == req.body.offerId) {
							catalogEntryToPurchase = catalogEntry;
						}
					}
				}

				if (catalogEntryToPurchase == null) {
					throw new ApiException(errors.com.epicgames.modules.gamesubcatalog.catalog_out_of_date).with(req.body.offerId);
				}

				let grantToProfileId = "athena";
				const grantProfile = getOrCreateProfile(grantToProfileId);
				const lootResult = [];

				for (itemGrant of catalogEntryToPurchase.itemGrants) {
					lootResult.push({
						"itemType": itemGrant.templateId,
						"itemGuid": uuidv4(),
						"itemProfile": grantToProfileId,
						"quantity": itemGrant.quantity
					});
				}

				for (lootResultEntry of lootResult) {
					Profile.addItem(grantProfile.profileData, lootResultEntry.itemGuid, {
						templateId: lootResultEntry.itemType,
						attributes: {
							"max_level_bonus": 0,
							"level": 1,
							"item_seen": false,
							"xp": 0,
							"variants": [],
							"favorite": false
						},
						quantity: lootResultEntry.quantity
					}, grantProfile.response.profileChanges);
				}

				response.multiUpdate = [grantProfile.response];
				response.notifications = [
					{
						"type": "CatalogPurchase",
						"primary": true,
						"lootResult": {
							"items": lootResult
						}
					}
				];

				if (grantProfile.response.profileChanges.length > 0) {
					Profile.bumpRvn(grantProfile.profileData);
					response.profileRevision = grantProfile.profileData.rvn || 1;
					response.profileCommandRevision = grantProfile.profileData.commandRevision || 1;
					Profile.saveProfile(accountId, grantToProfileId, grantProfile.profileData);
				}

				break;

			case "QueryProfile":
				break;

			case "RefreshExpeditions":
				checkValidProfileID("campaign");
				break;

			case "RemoveGiftBox":
				checkValidProfileID("common_core", "campaign", "athena");

				if (typeof req.body.giftBoxItemId === "string") {
					Profile.removeItem(profileData, req.body.giftBoxItemId, profileChanges);
				}

				break;

			case "SetAffiliateName":
				checkValidProfileID("common_core");
				const force = false;
				Profile.modifyStat(profileData, "mtx_affiliate", force ? "Fortnite.Dev" : req.body.affiliateName, profileChanges);
				Profile.modifyStat(profileData, "mtx_affiliate_set_time", new Date().toISOString(), profileChanges);
				break;

			case "SetCosmeticLockerBanner": {
				checkValidProfileID("campaign", "athena");
				const item = profileData.items[req.body.lockerItem];

				if (!item) {
					throw new ApiException(errors.com.epicgames.fortnite.item_not_found).withMessage("Locker item {0} not found", req.body.lockerItem);
				}

				if (typeof req.body.bannerIconTemplateName === "string" && item.attributes.banner_icon_template != req.body.bannerIconTemplateName) {
					Profile.changeItemAttribute(profileData, req.body.lockerItem, "banner_icon_template", req.body.bannerIconTemplateName, profileChanges);
				}

				if (typeof req.body.bannerColorTemplateName === "string" && item.attributes.banner_color_template != req.body.bannerColorTemplateName) {
					Profile.changeItemAttribute(profileData, req.body.lockerItem, "banner_color_template", req.body.bannerColorTemplateName, profileChanges);
				}

				break;
			}

			case "SetCosmeticLockerName": {
				checkValidProfileID("campaign", "athena");
				const item = profileData.items[req.body.lockerItem];

				if (!item) {
					throw new ApiException(errors.com.epicgames.fortnite.item_not_found).withMessage("Locker item {0} not found", req.body.lockerItem);
				}

				if (typeof req.body.name === "string" && item.attributes.locker_name != req.body.name) {
					Profile.changeItemAttribute(profileData, req.body.lockerItem, "locker_name", req.body.name, profileChanges);
				}

				break;
			}

			case "SetCosmeticLockerSlot": {
				checkValidProfileID("campaign", "athena");
				const item = profileData.items[req.body.lockerItem];

				if (!item) {
					throw new ApiException(errors.com.epicgames.fortnite.item_not_found).withMessage("Locker item {0} not found", req.body.lockerItem);
				}

				const locker_slots_data = item.attributes.locker_slots_data;
				let lockerSlot = locker_slots_data.slots[req.body.category];

				if (!lockerSlot) {
					const capacity = req.body.category == "Dance" ? 6 : req.body.category == "ItemWrap" ? 7 : 1;
					lockerSlot = locker_slots_data.slots[req.body.category] = {
						items: new Array(capacity),
						activeVariants: new Array(capacity)
					};
				}

				const itemsArray = lockerSlot.items;
				const activeVariantsArray = lockerSlot.activeVariants;
				let bChanged = false;

				if (req.body.slotIndex == -1) { // handle wrap "Apply To All"
					for (var i = 0; i < itemsArray.length; ++i) {
						if (itemsArray[i] != req.body.itemToSlot) {
							itemsArray[i] = req.body.itemToSlot
							bChanged = true;
						}
					}
				} else {
					const i = req.body.slotIndex || 0;

					if (i >= 0 && i < itemsArray.length) {
						if (itemsArray[i] != req.body.itemToSlot) { // so kids wont do 2147483647 and crash the server
							itemsArray[i] = req.body.itemToSlot;
							bChanged = true;
						}
					}
				}

				if (req.body.variantUpdates.length != 0) {
					lockerSlot.activeVariants = [{
                        "variants": []
                    }]
					req.body.variantUpdates.forEach(variant => {
							lockerSlot.activeVariants[0].variants.push(variant)
					})
					bChanged = true
				}

				if (bChanged) {
					Profile.changeItemAttribute(profileData, req.body.lockerItem, "locker_slots_data", locker_slots_data, profileChanges);
				}

				break;
			}

			case "SetItemFavoriteStatus":
				checkValidProfileID("campaign", "athena");

				if (typeof req.body.bFavorite === "boolean" && profileData.items[req.body.targetItemId].attributes.favorite != req.body.bFavorite) {
					Profile.changeItemAttribute(profileData, req.body.targetItemId, "favorite", req.body.bFavorite, profileChanges);
				}

				break;

			case "SetItemFavoriteStatusBatch":
				checkValidProfileID("campaign", "athena");
				req.body.itemIds.forEach((itemId, index) => {
					if (typeof itemId === "string" && typeof req.body.itemFavStatus[index] === "boolean") {
						Profile.changeItemAttribute(profileData, itemId, "favorite", req.body.itemFavStatus[index]), profileChanges;
					}
				});
				break;

			case "SetMtxPlatform":
				checkValidProfileID("common_core");

                response.profileChanges[0] = {
                    changeType: "statModified",
                    name: "current_mtx_platform",
                    value: req.body.newPlatform || "EpicPC"
                }

				break;

			case "SetReceiveGiftsEnabled":
				checkValidProfileID("common_core");

				if (typeof req.body.bReceiveGifts === "boolean") {
					Profile.modifyStat(profileData, "allowed_to_receive_gifts", req.body.bReceiveGifts, profileChanges);
				}

				break;

			case "RefundMtxPurchase":
				checkValidProfileID("common_core");

				response.profileChanges[0] = {
					"changeType": "itemAdded",
					"itemId": uuidv4(),
					"item": {
						"templateId": "Currency:MtxComplimentary",
						"attributes": {
							"platform": "Shared"
						},
						"quantity": 1500
					}
				}

			   break;

			default:
				throw new ApiException(errors.com.epicgames.fortnite.operation_not_found).with(req.params.command);
		}

		if (profileChanges.length > 0) {
			Profile.bumpRvn(profileData);
			response.profileRevision = profileData.rvn || 1;
			response.profileCommandRevision = profileData.commandRevision || 1;
			Profile.saveProfile(accountId, profileId, profileData);
		}

		var rvn = req.query.rvn || -1;

		if (rvn != response.profileChangesBaseRevision) {
			response.profileChanges = [{
				"changeType": "fullProfileUpdate",
				"profile": profileData
			}];
		}

		res.json(response);
	});
}

function checkValidProfileID0(command, sentProfileId, ...validProfileIds) {
	if (command && sentProfileId) {
		if (validProfileIds.indexOf(sentProfileId) == -1) {
			throw new ApiException(errors.com.epicgames.modules.profiles.invalid_command).with(command, `player:profile_${sentProfileId}`, sentProfileId);
		} else {
			return true;
		}
	}

	return true;
}
