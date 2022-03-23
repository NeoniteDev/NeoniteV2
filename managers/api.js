const axios = require('axios').default;
const path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const { setTimeout } = require('timers');
const errors = require('./../structs/errors');
const { ErrDef, ApiException, com } = require('./../structs/errors');
var builder = require('xmlbuilder');
const Express = require('express');

Date.prototype.addHours = function (h) {
	this.setTime(this.getTime() + (h * 60 * 60 * 1000));
	return this;
}

Array.prototype.shuffle = function () {
	var a = this;
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

/**
 * 
 * @param {Express.Application} app 
 */
module.exports = (app) => {
	//lightswitch
	app.get('/lightswitch/api/service/bulk/status', (req, res) => {
		//adds serviceId based on what the game feeds it, if undefined defaults to fortnite
		const serviceId = req.query.serviceId ? req.query.serviceId.toLowerCase() : "fortnite";
		res.json([
			{
				"serviceInstanceId": serviceId,
				"status": "UP",
				"message": "Hi",
				"maintenanceUri": "https://dsc.gg/neonite",
				"allowedActions": [],
				"banned": false,
				"launcherInfoDTO": {
					"appName": "Fortnite",
					"catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
					"namespace": "fn"
				}
			}
		]);
	});

	app.get("/lightswitch/api/service/:serviceId/status", (req, res) => {
		const serviceId = req.params.serviceId.toLowerCase();
		res.json({
			"serviceInstanceId": serviceId,
			"status": "UP",
			"message": "Hello",
			"maintenanceUri": "https://dsc.gg/neonite",
			"allowedActions": [],
			"banned": false,
			"launcherInfoDTO": {
				"appName": "Fortnite",
				"catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
				"namespace": "fn"
			}
		})
	})


	// empty json endpoint if needed
	app.all("/api/json", (req, res) => res.json({}));

	//external auth
	app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
		res.json([])
	});


	const GithubManifestUserAgent = [];
	app.get("/launcher/api/public/assets/:platform/:catalogItemId/:appName", async (req, res) => {
		const FormattedUserAgent = req.headers["user-agent"].replace("Fortnite/", "").replace("FortniteGame/", "")
		const token = (await axios.post("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", "grant_type=client_credentials", { headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic M2Y2OWU1NmM3NjQ5NDkyYzhjYzI5ZjFhZjA4YThhMTI6YjUxZWU5Y2IxMjIzNGY1MGE2OWVmYTY3ZWY1MzgxMmU=" } })).data.access_token;


		axios.get("https://launcher-public-service-prod06.ol.epicgames.com" + req.url, {
			headers: {
				authorization: "bearer " + token
			}
		}).then(response => {
			res.json(response.data)
		}).catch(async (error) => {

			if (error.response.data.errorCode == "errors.com.epicgames.launcher.download_info_not_found" && req.query.manifest) {
				var BuildVersion = req.headers["user-agent"];
				try {
					BuildVersion = req.headers["user-agent"].split("/")[1].replace(/ /g, "-");
				} catch { }

				axios.head(`https://raw.githubusercontent.com/VastBlast/FortniteManifestArchive/main/Fortnite/Android/${req.query.manifest}.manifest`).then(() => {
					if (!GithubManifestUserAgent.includes(FormattedUserAgent)) {
						GithubManifestUserAgent.push(FormattedUserAgent);
					}

					res.json({
						"appName": req.params.appName,
						"labelName": `${req.query.label}-${req.params.platform}`,
						"buildVersion": BuildVersion,
						"catalogItemId": req.params.catalogItemId,
						"expires": "9999-12-31T23:59:59.999Z",
						"items": {
							"MANIFEST": {
								"signature": "",
								"distribution": "https://raw.githubusercontent.com/VastBlast/FortniteManifestArchive/main/Fortnite/Android/",
								"path": `/../${req.query.manifest}.manifest`,
								"additionalDistributions": []
							}
						},
						"assetId": req.params.appName
					})

				}).catch(() => {
					res.status(error.response.status);
					res.json(error.response.data);
				})
			}
			else {
				res.status(error.response.status);
				res.json(error.response.data);
			}
		})
	});



	app.get("/launcher/api/public/distributionpoints/", (req, res) => {
		const FormattedUserAgent = req.headers["user-agent"].replace("Fortnite/", "").replace("FortniteGame/", "")

		if (GithubManifestUserAgent.includes(FormattedUserAgent)) {
			res.json({
				"distributions": [
					"https://epicgames-download1.akamaized.net/Builds/Fortnite/Content/CloudDir/",
					"https://download.epicgames.com/Builds/Fortnite/Content/CloudDir/",
					"https://download2.epicgames.com/Builds/Fortnite/Content/CloudDir/",
					"https://download3.epicgames.com/Builds/Fortnite/Content/CloudDir/",
					"https://download4.epicgames.com/Builds/Fortnite/Content/CloudDir/",
					"https://fastly-download.epicgames.com/Builds/Fortnite/Content/CloudDir/", ,
					"https://raw.githubusercontent.com/VastBlast/FortniteManifestArchive/main/Fortnite/Android/"
				]
			});
		}
		else {
			res.json({
				"distributions": [
					"https://epicgames-download1.akamaized.net/",
					"https://download.epicgames.com/",
					"https://download2.epicgames.com/",
					"https://download3.epicgames.com/",
					"https://download4.epicgames.com/",
					"https://fastly-download.epicgames.com/"
				]
			});
		}

	})

	app.post('/fortnite/api/game/v2/creative/discovery/surface/:accountId', (req, res) =>
		res.json({
			"Panels": [
				{
					"PanelName": "Most Popular",
					"Pages": [
						{
							"results": [
								{
									"linkData": {
										"mnemonic": "playlist_battlelab",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_battlelab"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_defaultsolo",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_defaultsolo"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_papaya",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_papaya"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_respawn_24_alt",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_respawn_24_alt"
											}
										}
									},
									"isFavorite": false
								}
							],
							"hasMore": false
						}
					]
				},
				{
					"PanelName": "FeaturedV2_17.50_Launch",
					"Pages": [
						{
							"results": [
								{
									"linkData": {
										"mnemonic": "playlist_defaultsolo",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_defaultsolo"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_defaultduo",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_defaultduo"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_trios",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_trios"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_defaultsquad",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_defaultsquad"
											}
										}
									},
									"isFavorite": false
								}
							],
							"hasMore": false
						}
					]
				},
				{
					"PanelName": "ByEpic_17.50_Launch",
					"Pages": [
						{
							"results": [
								{
									"linkData": {
										"mnemonic": "playlist_fritter_40",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_fritter_40"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Buffet".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Buffet".toLowerCase()
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_music_highest",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_music_highest"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_vamp_duo",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_vamp_duo"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_dadbro_squads_12",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_dadbro_squads_12"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "playlist_race_12",
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "playlist_race_12"
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Respawn_20_Lava".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Respawn_20_Lava".toLowerCase()
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Barrier_16_B_Lava".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Barrier_16_B_Lava".toLowerCase()
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Fill_Solo".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Fill_Solo".toLowerCase()
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Classic_Squads".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Classic_Squads".toLowerCase()
											}
										}
									},
									"isFavorite": false
								},
								{
									"linkData": {
										"mnemonic": "Playlist_Sword_Solo".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Sword_Solo".toLowerCase()
											}
										}
									},
									"isFavorite": false
								}, {
									"linkData": {
										"mnemonic": "Playlist_Goose_Duos_16_SP".toLowerCase(),
										"linkType": "BR:Playlist",
										"active": true,
										"version": 93,
										"accountId": "epic",
										"creatorName": "Epic",
										"descriptionTags": [],
										"metadata": {
											"matchmaking": {
												"override_playlist": "Playlist_Goose_Duos_16_SP".toLowerCase()
											}
										}
									},
									"isFavorite": false
								}
							],
							"hasMore": false
						}
					]
				}
			],
			"TestCohorts": [
				"V2_17_50_Launch"
			]
		})
	)

	app.get('/links/api/fn/mnemonic/:playlist', (req, res) =>
		res.json({
			"namespace": "fn",
			"accountId": "epic",
			"creatorName": "Epic",
			"mnemonic": req.params.playlist,
			"linkType": "BR:Playlist",
			"metadata": {
				"matchmaking": {
					"override_playlist": req.params.playlist
				}
			},
			"version": 93,
			"active": true,
			"disabled": false,
			"created": "2021-08-16T16:43:18.268Z",
			"published": "2021-08-03T15:27:17.540Z",
			"descriptionTags": [

			]
		})
	)

	app.get('/fortnite/api/game/v2/creative/favorites/:accountId', (req, res) =>
		res.json({
			"results": [],
			"hasMore": false
		})
	)

	app.get('/fortnite/api/game/v2/creative/history/:accountId', (req, res) =>
		res.json({
			"results": [],
			"hasMore": false
		})
	)

	app.post("/api/v1/user/setting", (req, res) => {
		res.json([
			{
				"accountId": req.body.accountId,
				"key": "avatar",
				"value": "cid_003_athena_commando_f_default"
			},
			{
				"accountId": req.body.accountId,
				"key": "avatarBackground",
				"value": "[\"#B4F2FE\",\"#00ACF2\",\"#005679\"]"
			},
			{
				"accountId": req.body.accountId,
				"key": "appInstalled",
				"value": "init"
			}])
	})

	app.delete("/friends/api/v1/:accountId/friends/NeoniteBot", (req, res) => {
		res.status(403).json({ "errorCode": "errors.com.epicgames.Neonite.common.forbidden", "errorMessage": "You cannot remove the bot", "messageVars": [], "numericErrorCode": 14004, "originatingService": "party", "intent": "prod" })
		var client = global.xmppClients.find(x => x.accountId == req.params.accountId);
		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))
	})


	app.get('/api/v1/assets/Fortnite/:version/', (req, res) => {
		res.json([])
	});

	app.get("/fortnite/api/game/v2/world/info", (req, res) => res.json({}))

	app.get("/friends/api/v1/*/blocklist", (req, res) => { res.json([]) })


	app.get("/eulatracking/api/public/agreements/*/account/:accountId", (req, res) => { res.status(204).end() })

	app.get("/friends/api/v1/*/recent/fortnite", (req, res) => { res.json([]) })

	app.get("/api/v1/events/:game/download/:accountId", (req, res) => {
		res.json({
			"player": {
				"gameId": req.params.game,
				"accountId": req.params.accountId,
				"tokens": [],
				"teams": {},
				"pendingPayouts": [],
				"pendingPenalties": {},
				"persistentScores": {},
				"groupIdentity": {}
			},
			"events": [],
			"templates": [],
			"scores": []
		})
	})

	app.all("/fortnite/api/game/v2/br-inventory/account/:accountId", (req, res) => {
		res.json({
			"stash": {
				"globalcash": 0
			}
		})
	})


	app.get("/catalog/api/shared/bulk/offers", (req, res) => { res.json({}) })

	app.get('/friends/api/v1/:accountId/summary', (req, res) => {
		res.json({
			"friends": [{
				"accountId": "NeoniteBot",
				"groups": [],
				"mutual": 0,
				"alias": "",
				"note": "",
				"favorite": true,
				"created": "2021-01-17T16:42:04.125Z"
			}],
			"incoming": [],
			"suggested": [],
			"blocklist": [],
			"settings": {
				"acceptInvites": "public"
			},
			"limitsReached": {
				"incoming": false,
				"outgoing": false,
				"accepted": false
			}
		})
	})


	//version check
	app.get('/fortnite/api/v2/versioncheck*', (req, res) => {
		res.json({ "type": "NO_UPDATE" })
	});

	app.get('/fortnite/api/versioncheck*', (req, res) => {
		res.json({ "type": "NO_UPDATE" })
	});

	//privacy
	app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {
		res.json({
			"accountId": req.params.accountId,
			"optOutOfPublicLeaderboards": false
		})
	});

	app.post('/api/v1/assets/Fortnite/:version/:netcl', (req, res) => {
		res.json({
			"FortPlaylistAthena": {
				"meta": {
					"promotion": 0
				},
				"assets": {}
			}
		})
	});

	app.post("/friends/api/v1/:accountId/blocklist/NeoniteBot", (req, res) => {
		res.status(403).json({ "errorCode": "errors.com.epicgames.Neonite.common.forbidden", "errorMessage": "You cannot remove the bot", "messageVars": [], "numericErrorCode": 14004, "originatingService": "party", "intent": "prod" })

		var client = global.xmppClients.find(x => x.accountId == req.params.accountId);
		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))


	})

	app.get("/account/api/public/account/displayName/:displayName", (req, res) => {
		res.json({
			"id": req.params.displayName,
			"displayName": req.params.displayName,
			"externalAuths": {}
		})

		if (req.params.displayName != "NeoniteBot") return;

		var token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")
		var client = global.xmppClients.find(x => x.token == token);

		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))
	})

	app.post("/friends/api/v1/:accountId/friends/NeoniteBot", (req, res) => {
		res.status(204).send()
	})

	app.all("/fortnite/api/game/v2/matchmakingservice/ticket/player/:accountId", (req, res) => {
		var ParsedBckt = {
			NetCL: "",
			Region: "",
			Playlist: "",
			HotfixVerion: -1
		}

		try {
			var splitted = req.query.bucketId.split(':');
			ParsedBckt.NetCL = splitted[0];
			ParsedBckt.HotfixVerion = splitted[1];
			ParsedBckt.Region = splitted[2];
			ParsedBckt.Playlist = splitted[3];
		}
		catch {
			throw new ApiException(errors.com.epicgames.fortnite.invalid_bucket_id);
		}
		finally {
			if (ParsedBckt.NetCL === "" || ParsedBckt.Region === "" || ParsedBckt.Playlist === "" || ParsedBckt.Region === -1) {
				throw new ApiException(errors.com.epicgames.fortnite.invalid_bucket_id).withMessage(`Failed to parse bucketId: '${req.query.bucketId}'`).with(req.query.bucketId)
			}
		}

		res.cookie("NetCL", ParsedBckt.NetCL);

		var data = {
			"playerId": req.params.accountId,
			"partyPlayerIds": [
				req.params.accountId,
			],
			"bucketId": `FN:Live:${ParsedBckt.NetCL}:${ParsedBckt.HotfixVerion}:${ParsedBckt.Region}:${ParsedBckt.Playlist}:PC:public:1`,
			"attributes": {
				"player.userAgent": req.headers["user-agent"],
				"player.preferredSubregion": "None",
				"player.option.spectator": "false",
				"player.inputTypes": "",
				"playlist.revision": "1",
				"player.teamFormat": "fun"
			},
			"expireAt": new Date().addHours(1),
			"nonce": RandomString(32)
		}

		Object.entries(req.query).forEach(([key, value]) => {
			if (key == "player.subregions" && value.includes(',')) {
				data.attributes["player.preferredSubregion"] = value.split(',')[0];
			}

			data.attributes[key] = value;
		});

		var payload = Buffer.from(JSON.stringify(data, null, 0)).toString('base64');

		res.json({
			"serviceUrl": "ws://matchmaking-fn.herokuapp.com/",
			"ticketType": "mms-player",
			"payload": payload,
			"signature": undefined
		});

	});

	app.get("/fortnite/api/game/v2/matchmaking/account/:accountId/session/:sessionId", (req, res) =>
		res.json({
			"accountId": req.params.accountId,
			"sessionId": req.params.sessionId,
			"key": "none"
		})
	)

	app.post("/fortnite/api/matchmaking/session/:SessionId/join", (req, res) => res.status(204).end())

	app.get("/fortnite/api/matchmaking/session/:sessionId", (req, res) => {
		var BuildUniqueId = req.cookies["NetCL"];

		res.json({
			"id": req.params.sessionId,
			"ownerId": "Neonite",
			"ownerName": "Neonite",
			"serverName": "NeoniteV2",
			"serverAddress": "127.0.0.1",
			"serverPort": -1,
			"totalPlayers": 0,
			"maxPublicPlayers": 0,
			"openPublicPlayers": 0,
			"maxPrivatePlayers": 0,
			"openPrivatePlayers": 0,
			"attributes": {},
			"publicPlayers": [],
			"privatePlayers": [],
			"allowJoinInProgress": false,
			"shouldAdvertise": false,
			"isDedicated": false,
			"usesStats": false,
			"allowInvites": false,
			"usesPresence": false,
			"allowJoinViaPresence": true,
			"allowJoinViaPresenceFriendsOnly": false,
			"buildUniqueId": BuildUniqueId || "00000000",
			"lastUpdated": "2020-11-09T00:40:28.878Z",
			"started": false
		});
	});

	//waiting room
	app.get('/waitingroom/api/waitingroom', (req, res) => {
		res.status(204).end();
	});

	//grant access
	app.post('/fortnite/api/game/v2/grant_access/:accountId', (req, res) => {
		res.status(204).end();
	});

	//enabled features
	app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
		res.json([])
	});

	//receipt
	app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
		res.json([])
	});

	//blocklist
	app.get('/friends/api/public/blocklist/:accountId', (req, res) => {
		res.json({
			blockedUsers: []
		})
	});

	//friends setting
	app.get('/friends/api/v1/:accountId/settings', (req, res) => {
		res.json({
			acceptInvites: "public"
		})
	});

	//recent players
	app.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (req, res) => {
		res.json([]);
	});

	//friends list
	app.get('/friends/api/public/friends/:accountId', (req, res) => {
		res.json([
			{
				accountId: 'NeoniteBot',
				status: 'ACCEPTED',
				direction: 'INBOUND',
				created: '2018-12-06T04:46:01.296Z',
				favorite: false
			},
			{
				accountId: req.params.accountId,
				status: 'ACCEPTED',
				direction: 'INBOUND',
				created: '2018-12-06T04:46:01.296Z',
				favorite: false
			}
		]);
	});

	//datarouter
	app.post('/datarouter/api/v1/public/*', (req, res) => {
		res.status(204).end();
	});

	//presence ?
	app.get('/presence/api/v1/_/:accountId/settings/subscriptions', (req, res) => { res.status(204).end(); });

	app.get('/socialban/api/public/v1/:accountId', (req, res) => {
		res.status(204).end();
	});

	app.get('/content-controls/:accountId', function (req, res) {
		res.status(204).end();
	});

	//platform
	app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
		res.set('Content-Type', 'text/plain');
		res.send(true);
	});

	//sac
	app.get('/affiliate/api/public/affiliates/slug/:affiliateName', (req, res) => {
		if (req.params.affiliateName != "Neonite") {
			throw new ApiException(errors.com.epicgames.ecommerce.affiliate.not_found).with(req.params.affiliateName);
		}

		res.json({
			id: "aabbccddeeff11223344556677889900",
			slug: req.params.affiliateName,
			displayName: req.params.affiliateName,
			status: "ACTIVE",
			verified: true
		})
	});

	app.get('/content-controls/:accountId', (req, res) => {
		res.status(404);
		res.json({
			"errorCode": "errors.com.epicgames.content_controls.errors.com.epicgames.content_controls.no_user_config_found",
			"message": "No user found with provided principal id"
		})
	});

	app.get('/statsproxy/api/statsv2/account/:accountId', (req, res) => {
		res.json({
			"startTime": 0,
			"endTime": 9223372036854775807,
			"stats": {},
			"accountId": req.params.accountId
		})
	})

	app.get('/fortnite/api/cloudstorage/system/DefaultGame.ini', (req, res) => {
		res.setHeader("content-type", "application/octet-stream")
		res.sendFile(path.join(__dirname, '../hotfixes/DefaultGame.ini'));
	});

	app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
		res.json([])
	});

	app.put('/fortnite/api/cloudstorage/user/:accountId/:filename', (req, res) => res.status(204).end())

	app.post("/fortnite/api/game/v2/profileToken/verify/*", (req, res) => { res.status(204).end() })

	//keychain
	app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
		axios.get("https://api.nitestats.com/v1/epic/keychain", { timeout: 3000 }).then(response => {
			res.json(response.data);
		}).catch(e => {
			res.json(["74AF07F9A2908BB2C32C9B07BC998560:V0Oqo/JGdPq3K1fX3JQRzwjCQMK7bV4QoyqQQFsIf0k=:Glider_ID_158_Hairy"])
		})
	})

	//sigh
	app.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
		res.json([])
	})

	app.get("/fortnite/api/statsv2/account/:accountId", (req, res) => {
		res.json([])
	})

  
    //change the 0 to what ever amount of gold you want
    app.get('/fortnite/api/game/v2/br-inventory/account/:accountId', (req, res) => {
	    res.json({
		    "stash": {
			    "globalcash": 0 
		    },
	    })
    });

	app.get('/launcher/api/public/assets/Windows/5cb97847cee34581afdbc445400e2f77/FortniteContentBuilds', function (req, res) {
		res.json({
			"appName": "FortniteContentBuilds",
			"labelName": "h_gIcuQxgkcib_3yl0GIk4DB_pT86A-Windows",
			"buildVersion": "++Fortnite+Release-20.00-CL-19458861-Windows",
			"catalogItemId": "5cb97847cee34581afdbc445400e2f77",
			"expires": "2022-03-23T11:22:18.652Z",
			"items": {
			"MANIFEST": {
				"signature": "ak_token=exp=1648034538~hmac=738e66c847196a096c40505b172603713443b1db90269405c1382f4d3a743e42",
				"distribution": "https://epicgames-download1.akamaized.net/",
				"path": "Builds/Fortnite/Content/CloudDir/IB8ZSoVSaX2W-XndK0yNLZifFC9hqA.manifest",
				"hash": "55bb954f5596cadbe03693e1c06ca73368d427f3",
				"additionalDistributions": []
			},
			"CHUNKS": {
				"signature": "ak_token=exp=1648034538~hmac=738e66c847196a096c40505b172603713443b1db90269405c1382f4d3a743e42",
				"distribution": "https://epicgames-download1.akamaized.net/",
				"path": "Builds/Fortnite/Content/CloudDir/IB8ZSoVSaX2W-XndK0yNLZifFC9hqA.manifest",
				"additionalDistributions": []
			}
			},
			"assetId": "FortniteContentBuilds"
		})
		});


	
	app.get('/launcher/api/public/distributionpoints/', function (req, res) {
		res.json({
			"distributions": [
			"https://download.epicgames.com/",
			"https://download2.epicgames.com/",
			"https://download3.epicgames.com/",
			"https://download4.epicgames.com/",
			"https://epicgames-download1.akamaized.net/",
			"https://fastly-download.epicgames.com/"
			]
		});
	});

};

function RandomString(length) {
	var result = [];
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() *
			charactersLength)));
	}
	return result.join('');
}
