module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
		res.json({
  "refreshIntervalHrs": 1,
  "dailyPurchaseHrs": 24,
  "expiration": "9999-12-31T23:59:59.999Z",
  "storefronts": [
    {
      "name": "BRStandaloneStorefront",
      "catalogEntries": []
    },
    {
      "name": "CurrencyStorefront",
      "catalogEntries": [
        {
          "offerId": "425FDD804D9D61AC2530CE8F31398BCD",
          "devName": "Large Currency Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3b4c5df9efa5415b941cf74262865e4e",
            "ios_vbucks_large",
            "",
            "google_vbucks_large",
            "",
            "MTX08K0000000000",
            "d299e00d-811e-4b57-85c1-ec06cbc40074",
            "c-virtualcurrency0-MTX7500",
            "sam_vbucks_large",
            "BP2FKJFQ14TJ",
            "MTX08K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "7800"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "IconSize",
              "value": "Large"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack7800"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 3,
          "title": "7,800 V-Bucks",
          "shortDescription": "",
          "description": "Buy 7,800 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack7800.DA_MtxPack7800",
          "itemGrants": []
        },
        {
          "offerId": "A094F1D14BAE8DA77114DAAE76AFCA83",
          "devName": "Medium Currency Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "559f2ba95f874ec987d0ebfd2cc9c70a",
            "ios_vbucks_medium",
            "",
            "google_vbucks_medium",
            "",
            "MTX03K0000000000",
            "cee19aa0-5238-4656-9e52-c8bd0765eb53",
            "c-virtualcurrency0-MTX2800",
            "sam_vbucks_medium",
            "C4BPBTQG5C1B",
            "MTX03K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "2800"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "IconSize",
              "value": "Small"
            },
            {
              "key": "BannerOverride",
              "value": "12PercentExtra"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack2800"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "2,800 V-Bucks",
          "shortDescription": "",
          "description": "Buy 2,800 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack2800.DA_MtxPack2800",
          "itemGrants": []
        },
        {
          "offerId": "50DC69A74BC4B8D10AF8D5B17A4BF8D4",
          "devName": "Jumbo Currency Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "4daadb392f1c4ee2b5a3af443e614d2a",
            "ios_vbucks_jumbo",
            "",
            "google_vbucks_jumbo",
            "",
            "MTX14K0000000000",
            "d15248c0-acf6-48b7-9632-c9638cba4b37",
            "c-virtualcurrency0-MTX13500",
            "sam_vbucks_jumbo",
            "BWD299HXCXQK",
            "MTX14K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "13500"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "BannerOverride",
              "value": "35PercentExtra"
            },
            {
              "key": "IconSize",
              "value": "XLarge"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack13500"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 2,
          "title": "13,500 V-Bucks",
          "shortDescription": "",
          "description": "Buy 13,500 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack13500.DA_MtxPack13500",
          "itemGrants": []
        },
        {
          "offerId": "12C02A514B8718EB48EB4C9171715891",
          "devName": "Small Currency Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "ede05b3c97e9475a8d9be91da65750f0",
            "ios_vbucks_small",
            "",
            "google_vbucks_small",
            "",
            "MTX01K0000000000",
            "6caed040-72dc-499a-9337-a165f1ec0a26",
            "c-virtualcurrency0-MTX1000",
            "sam_vbucks_small",
            "C0F5HT9NV86P",
            "MTX01K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1000"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1000"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,000 V-Bucks",
          "shortDescription": "",
          "description": "Buy 1,000 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "9484CF2E4C79CBACE1F94D908C51C792",
          "devName": "Intermediate Currency Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "d900ad5da7ec4eac86918bcfa0c3e698",
            "ios_vbucks_mediumplus",
            "",
            "google_vbucks_mediumplus",
            "",
            "MTX05K0000000000",
            "1f5d0b24-49e8-43b3-9547-3e4743c21823",
            "c-virtualcurrency0-MTX5000",
            "sam_vbucks_mediumplus",
            "C20FM0B4Q9KC",
            "MTX05K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "5000"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "IconSize",
              "value": "Medium"
            },
            {
              "key": "BannerOverride",
              "value": "25PercentExtra"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack5000"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 4,
          "title": "5,000 V-Bucks",
          "shortDescription": "",
          "description": "Buy 5,000 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack5000.DA_MtxPack5000",
          "itemGrants": []
        }
      ]
    },
    {
      "name": "WinterQuest2019",
      "catalogEntries": [
        {
          "offerId": "01C3D16646CC1C135814EFBC62FD83D1",
          "devName": "WinterQuest2019",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 2500,
              "dynamicRegularPrice": -1,
              "finalPrice": 2500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2500
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "RewardEventGraphPurchaseToken:winterfestpurchasetoken",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Winterfest!",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_WinterQuest2019.DA_WinterQuest2019",
          "itemGrants": [
            {
              "templateId": "RewardEventGraphPurchaseToken:winterfestpurchasetoken",
              "quantity": 1
            }
          ],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        }
      ]
    },
    {
      "name": "GiftableItems",
      "catalogEntries": [
        {
          "offerId": "722DD1CF407A49449734D9B9A8033295",
          "devName": "Glow Grant",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "Token:giftglowtoken",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "BD04D08047CBD5B284C544A33619C860",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "TokenOffer",
              "value": "02A0B24240C2528B435EF4817E89070F"
            },
            {
              "key": "bIgnoreGiftLimit",
              "value": "true"
            },
            {
              "key": "bIgnoreFriendTimeReq",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Glow",
          "shortDescription": "",
          "description": "The aura of victory glows bright.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_479_Athena_Commando_F_Davinci.DA_Featured_CID_479_Athena_Commando_F_Davinci",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_479_athena_commando_f_davinci",
              "quantity": 1
            }
          ],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        }
      ]
    },
    {
      "name": "BRWeeklyStorefront",
      "catalogEntries": [
        {
          "devName": "[VIRTUAL]1 x Antheia, 1 x Steelfeather Shield for 1500 MtxCurrency",
          "offerId": "v2:/6ab1aedcb8044914ca311e03d73c3f6f70360ac77ccad9bc0cb36535a155b4cb",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1500,
              "dynamicRegularPrice": 1500,
              "finalPrice": 1500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_866_F_Myth.DAv2_CID_866_F_Myth",
            "SectionId": "Featured",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "2",
            "BannerOverride": "SelectableStyles"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_866_athena_commando_f_myth",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_613_mythfemale",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_866_F_Myth.DAv2_CID_866_F_Myth"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "2"
            },
            {
              "key": "BannerOverride",
              "value": "SelectableStyles"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_866_Athena_Commando_F_Myth.DA_Featured_CID_866_Athena_Commando_F_Myth",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_866_athena_commando_f_myth",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_613_mythfemale",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -3,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Rollie for 500 MtxCurrency",
          "offerId": "v2:/d4d66a9be918a237a91dcb152fdb207afeb284f17b2db46e313ae36c361d0e21",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_TwistDaytona.DAv2_EID_TwistDaytona",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "3",
            "EncryptionKey": "AFCCB7C08EC6957EEDDAAD676C3D3513:MuovEXob241ie6/RP76ImUk+MExLdl+bszvxCHNtg0U=:EID_TwistDaytona"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_twistdaytona",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_TwistDaytona.DAv2_EID_TwistDaytona"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "3"
            },
            {
              "key": "EncryptionKey",
              "value": "AFCCB7C08EC6957EEDDAAD676C3D3513:MuovEXob241ie6/RP76ImUk+MExLdl+bszvxCHNtg0U=:EID_TwistDaytona"
            }
          ],
          "displayAssetPath": "None",
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_twistdaytona",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -8,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Peely Bone for 1500 MtxCurrency",
          "offerId": "v2:/05e0aceb8d6c7fe2aa1ae6b803c15578c94d5b8cabc6a6115a1e079409f7ed93",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 1"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1500,
              "dynamicRegularPrice": 1500,
              "finalPrice": 1500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_602_M_NanaSplit.DAv2_CID_602_M_NanaSplit",
            "SectionId": "Featured",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "1",
            "BannerOverride": "BuiltInEmote"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_602_athena_commando_m_nanasplit",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_602_M_NanaSplit.DAv2_CID_602_M_NanaSplit"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "1"
            },
            {
              "key": "BannerOverride",
              "value": "BuiltInEmote"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_602_Athena_Commando_M_NanaSplit.DA_Featured_CID_602_Athena_Commando_M_NanaSplit",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_602_athena_commando_m_nanasplit",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -1,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Spooky Team Leader, 1 x Goodie Gourd for 1500 MtxCurrency",
          "offerId": "v2:/4afef337eb0bde751341d106a5e6a8ba85b02dbad2e0cb2215b9ed1c02f76580",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 1"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1500,
              "dynamicRegularPrice": 1500,
              "finalPrice": 1500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_258_F_FuzzyBearHalloween.DAv2_CID_258_F_FuzzyBearHalloween",
            "SectionId": "Featured",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_258_athena_commando_f_fuzzybearhalloween",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_139_fuzzybearhalloween",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_258_F_FuzzyBearHalloween.DAv2_CID_258_F_FuzzyBearHalloween"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "1"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_258_Athena_Commando_F_FuzzyBearHalloween.DA_Featured_CID_258_Athena_Commando_F_FuzzyBearHalloween",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_258_athena_commando_f_fuzzybearhalloween",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_139_fuzzybearhalloween",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -2,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Illustrated for 300 MtxCurrency",
          "offerId": "v2:/76f891e3a2a171388a3799038401bdef04f5800276bf3c59acda71ff936c0572",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 300,
              "dynamicRegularPrice": 300,
              "finalPrice": 300,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 300
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Wrap_287_MythToon.DAv2_Wrap_287_MythToon",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "2",
            "BannerOverride": "CollectTheSet"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaItemWrap:wrap_287_mythtoon",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Wrap_287_MythToon.DAv2_Wrap_287_MythToon"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "2"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Wrap_287_MythToon.DA_Featured_Wrap_287_MythToon",
          "itemGrants": [
            {
              "templateId": "AthenaItemWrap:wrap_287_mythtoon",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -7,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Morro, 1 x Vanquisher's Oath, 1 x Destiny's Edge for 1800 MtxCurrency",
          "offerId": "v2:/70e4b9e08728b06ab25db97c064e904e947dc1e05f5a57ba3d4d1abea6aeafae",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1800,
              "dynamicRegularPrice": 1800,
              "finalPrice": 1800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_867_M_Myth.DAv2_CID_867_M_Myth",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "2",
            "BannerOverride": "PickaxeIncluded",
            "ViolatorTag": "PickaxeIncluded"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_867_athena_commando_m_myth",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_614_myth",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_470_mythmale1h",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_867_M_Myth.DAv2_CID_867_M_Myth"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "2"
            },
            {
              "key": "BannerOverride",
              "value": "PickaxeIncluded"
            },
            {
              "key": "ViolatorTag",
              "value": "PickaxeIncluded"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_867_Athena_Commando_M_Myth.DA_Featured_CID_867_Athena_Commando_M_Myth",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_867_athena_commando_m_myth",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_614_myth",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_470_mythmale1h",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -4,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Hunting Song for 800 MtxCurrency",
          "offerId": "v2:/179ed81797266de946ad569aae1cb853a3223631c82da0a58a64fa53505d435e",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_469_MythFemale.DAv2_Pickaxe_ID_469_MythFemale",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "2",
            "BannerOverride": "SelectableStyles"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_469_mythfemale",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_469_MythFemale.DAv2_Pickaxe_ID_469_MythFemale"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "2"
            },
            {
              "key": "BannerOverride",
              "value": "SelectableStyles"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_469_MythFemale.DA_Featured_Pickaxe_ID_469_MythFemale",
          "itemGrants": [
            {
              "templateId": "AthenaPickaxe:pickaxe_id_469_mythfemale",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -5,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Dawn's Promise for 800 MtxCurrency",
          "offerId": "v2:/3b5e0fc87b065da0373b92b593d975b3779da5141c7c9553171e2db3015fd3fd",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_243_Myth.DAv2_Glider_243_Myth",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "2",
            "BannerOverride": "SelectableStyles"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaGlider:glider_id_243_myth",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_243_Myth.DAv2_Glider_243_Myth"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "2"
            },
            {
              "key": "BannerOverride",
              "value": "SelectableStyles"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Glider_ID_243_Myth.DA_Featured_Glider_ID_243_Myth",
          "itemGrants": [
            {
              "templateId": "AthenaGlider:glider_id_243_myth",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -6,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Last Forever for 500 MtxCurrency",
          "offerId": "v2:/bad83f911a9d2e0963e0a8d5d42c1717d709939c9c6b35b19a4c0fbb399aadad",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_TwistEternity.DAv2_EID_TwistEternity",
            "SectionId": "Featured",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "4",
            "BannerOverride": "SyncedEmote"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_twisteternity",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_TwistEternity.DAv2_EID_TwistEternity"
            },
            {
              "key": "SectionId",
              "value": "Featured"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "4"
            },
            {
              "key": "BannerOverride",
              "value": "SyncedEmote"
            }
          ],
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_twisteternity",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -9,
          "catalogGroupPriority": 0
        }
      ]
    },
    {
      "name": "STWSpecialEventStorefront",
      "catalogEntries": [
        {
          "devName": "[VIRTUAL]1 x Ragnarok for 3200 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/1023f2d8d0984911e2fe3a1fdf23b70a7218189b411bca81a0e493abd5b59677",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 3200,
              "dynamicRegularPrice": 3200,
              "finalPrice": 3200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 3200
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "7ndce3h4llums7ql7f2l5m9k4i[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "7ndce3h4llums7ql7f2l5m9k4i[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_outlander_myth02_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 20,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x JONESEE-BOT for 2800 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/0eaa77ea933a601a1355dfdd4295d43b7d7e0afef1913396992e2225beb7ab1b",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 2800,
              "dynamicRegularPrice": 2800,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "25pvpsc9rhi6iq2frpmp1ro7c8[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "25pvpsc9rhi6iq2frpmp1ro7c8[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_commando_032_halloweensoldier_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 25,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x workerbasic_sr_t01 for 700 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/222374fc7ea9f6ef8eb0b3c20f3a5d7f64f612e9f3435c74e3d51d785739bf9f",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 700,
              "dynamicRegularPrice": 700,
              "finalPrice": 700,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 700
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "14na9k5ou3pqhkn1e0q1qoubpv[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "14na9k5ou3pqhkn1e0q1qoubpv[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Worker:workerbasic_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 12,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Gunblazer Southie for 2800 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/eaf7f2cf03412cb4383d0d8e7d0f0e2650bd4578d2a9ce71eab64c0f629e5804",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 2800,
              "dynamicRegularPrice": 2800,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "14na9k5ou3pqhkn1e0q1qoubpv[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "14na9k5ou3pqhkn1e0q1qoubpv[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_outlander_011_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 14,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Bloodfinder A.C. for 2800 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/09981689bfa9f1b9c5e039346c061075db3d8db4e12c4d2bdb34fe088c45b06e",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 2800,
              "dynamicRegularPrice": 2800,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "1d9sf0jm76befm59qmvea0f8kh[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "1d9sf0jm76befm59qmvea0f8kh[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_outlander_zoneharvesthw_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 30,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Space Invader   for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/331492b177065f39da369b7d3414834b6916bc5c974f93ce7dad4d8ace9e18c5",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "14na9k5ou3pqhkn1e0q1qoubpv[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "14na9k5ou3pqhkn1e0q1qoubpv[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_pistol_space_sr_ore_t01",
              "quantity": 1,
              "attributes": {
                "Alteration": {
                  "LootTierGroup": "AlterationTG.Ranged.Energy.SR",
                  "Tier": 0
                }
              }
            }
          ],
          "additionalGrants": [],
          "sortPriority": 16,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Rare Schematic for 400 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/570ff3bed6fc8a1f7006610dbb6ce9e4bcd244a32caa435a60392460da356c88",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 400,
              "dynamicRegularPrice": 400,
              "finalPrice": 400,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 400
            }
          ],
          "meta": {
            "open_cardpacks": "true"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "open_cardpacks",
              "value": "true"
            }
          ],
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_schematic_r",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 10,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Raven for 3200 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/915229b852a73004939dcb82d7b29bba9469c3bb96808ebf6f28bc13320175b8",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 3200,
              "dynamicRegularPrice": 3200,
              "finalPrice": 3200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 3200
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "7bt1dq0dg60g74e7kfjbhvkegt[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "7bt1dq0dg60g74e7kfjbhvkegt[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_commando_myth02_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 29,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Epic Schematic for 1000 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/6633ab8087f2a2e80bdf7a90d06351e7a03b82790cc2e286f4b6851020532ed4",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1000,
              "dynamicRegularPrice": 1000,
              "finalPrice": 1000,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1000
            }
          ],
          "meta": {
            "open_cardpacks": "true"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "open_cardpacks",
              "value": "true"
            }
          ],
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_schematic_vr",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 9,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Dirge Song for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/a4261136772b6cf8ed774286a7e1b9a70c48748c066f5fd9f92d6f3ffec4fa2d",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "4isauu637jr5fpgmk05ouou8m2[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "4isauu637jr5fpgmk05ouou8m2[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_pistol_singleburst_blackmetal_sr_ore_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 23,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Grave Digger   for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/9293a2edde97f7dde84803c9c38b3aa34c500edf5e6d3c85902b1458459ac047",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "0pn6ft0pstcfg6q7rrqq3g37gr[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "0pn6ft0pstcfg6q7rrqq3g37gr[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_assault_auto_halloween_sr_ore_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 26,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Ghost Pistol for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/9338a4d7b6f7ecd7fac8af6886b632930ff06585a53c61cc948f20988c89df61",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "3i34ik25vvbnsfft1811k2srqe[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "3i34ik25vvbnsfft1811k2srqe[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_pistol_halloween_handcannon_sr_ore_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 27,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Husk Grinder for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/fd11007f66ba967aaa52ae91583956ed5832f9c69ef2a16f67a51995b37ff66e",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "7892vqq3paf26jne9ronbtkiie[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "7892vqq3paf26jne9ronbtkiie[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_edged_axe_blackmetal_sr_ore_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 24,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Dissector for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/c5055b79e16dfb95d6cec4390bb25e9a81b1f3e5694b68d90a495eefaa2eba0b",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "14na9k5ou3pqhkn1e0q1qoubpv[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "14na9k5ou3pqhkn1e0q1qoubpv[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_piercing_spear_military_sr_ore_t01",
              "quantity": 1,
              "attributes": {
                "Alteration": {
                  "LootTierGroup": "AlterationTG.Melee.SR",
                  "Tier": 0
                }
              }
            }
          ],
          "additionalGrants": [],
          "sortPriority": 15,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Plague Doctor Igor for 2800 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/8f22f5b37116fd357b6192af46714995ff7d12ea6157980d2d075453c0426492",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 2800,
              "dynamicRegularPrice": 2800,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "6jefhc837ll8dm0au4s6gldmoj[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "6jefhc837ll8dm0au4s6gldmoj[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_ninja_018_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 21,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Copper Black Blade for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/f9e24b8d4b7ab325a4487729d9cf969c750f859a95c7a690de20f79b8df82822",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "33qfugumep6vrdepo388m7dddc[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "33qfugumep6vrdepo388m7dddc[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Schematic:sid_edged_sword_blackmetal_sr_ore_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 22,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Dire for 3200 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/a684ba4cbf6b3b0b24b6d3adb2f87537f9b1605fa629a4f6d4fe1faa14442103",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 3200,
              "dynamicRegularPrice": 3200,
              "finalPrice": 3200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 3200
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "2obiq4q1nhoil6nssn6d373nnd[0]0",
            "EventLimit": "1"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "2obiq4q1nhoil6nssn6d373nnd[0]0"
            },
            {
              "key": "EventLimit",
              "value": "1"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Hero:hid_ninja_019_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 28,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Armory Slot for 25 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/83c2c7dd1240222394ed9c7415fbce183d8504842eebc30039ce96c929d365e6",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 25,
              "dynamicRegularPrice": 25,
              "finalPrice": 25,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 25
            }
          ],
          "meta": {
            "PurchaseLimitingEventId": "14na9k5ou3pqhkn1e0q1qoubpv[1]0",
            "EventLimit": "100"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "PurchaseLimitingEventId",
              "value": "14na9k5ou3pqhkn1e0q1qoubpv[1]0"
            },
            {
              "key": "EventLimit",
              "value": "100"
            }
          ],
          "itemGrants": [
            {
              "templateId": "Token:accountinventorybonus",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 19,
          "catalogGroupPriority": 0
        }
      ]
    },
    {
      "name": "BRSpecialFeatured",
      "catalogEntries": [
        {
          "devName": "[VIRTUAL]1 x Spirit Sniper for 800 MtxCurrency",
          "offerId": "v2:/b4c520c69fe187c6b8c72427553cac1e04cb781c2f730e2548c47d18f3772cb6",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_914_F_York_E.DAv2_CID_914_F_York_E",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "12",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_914_Athena_Commando_F_York_E"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_914_athena_commando_f_york_e",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_914_F_York_E.DAv2_CID_914_F_York_E"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "12"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_914_Athena_Commando_F_York_E"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_914_Athena_Commando_F_York_E.DA_Featured_CID_914_Athena_Commando_F_York_E",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_914_athena_commando_f_york_e",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -6,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Party Trooper for 1200 MtxCurrency",
          "offerId": "v2:/c1dba10c0fbffef468e4bf3de64c3586107089f976f6719657d67c541d9ae167",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 5"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "offertag": "unlockjbalvinstyleattenddate",
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_920_M_PartyTrooper.DAv2_CID_920_M_PartyTrooper",
            "SectionId": "SpookyOffers",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "15"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_920_athena_commando_m_partytrooper",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "offertag",
              "value": "unlockjbalvinstyleattenddate"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_920_M_PartyTrooper.DAv2_CID_920_M_PartyTrooper"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "15"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_920_Athena_Commando_M_PartyTrooper.DA_Featured_CID_920_Athena_Commando_M_PartyTrooper",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_920_athena_commando_m_partytrooper",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -1,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Containment Specialist for 800 MtxCurrency",
          "offerId": "v2:/d20ecec24ce52299eb7df611f561d0a36586e1176437bcc72903f11683c1f613",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_906_M_York_B.DAv2_CID_906_M_York_B",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "13",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_906_Athena_Commando_M_York_B"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_906_athena_commando_m_york_b",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_906_M_York_B.DAv2_CID_906_M_York_B"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "13"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_906_Athena_Commando_M_York_B"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_906_Athena_Commando_M_York_B.DA_Featured_CID_906_Athena_Commando_M_York_B",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_906_athena_commando_m_york_b",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -9,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Snuggs Shine for 500 MtxCurrency",
          "offerId": "v2:/006e9a8d2459f23345ba9e57ba2bbf6ed15c7d390858d0ead479b2f5850ebd16",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 8"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Wrap_157_CuddleTeamDark.DAv2_Wrap_157_CuddleTeamDark",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "18",
            "BannerOverride": "Animated"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaItemWrap:wrap_157_cuddleteamdark",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Wrap_157_CuddleTeamDark.DAv2_Wrap_157_CuddleTeamDark"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "18"
            },
            {
              "key": "BannerOverride",
              "value": "Animated"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Wrap_157_CuddleTeamDark.DA_Featured_Wrap_157_CuddleTeamDark",
          "itemGrants": [
            {
              "templateId": "AthenaItemWrap:wrap_157_cuddleteamdark",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -9,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Phantom Commando for 800 MtxCurrency",
          "offerId": "v2:/8a461dabeb412369a2cb748738c1e4418372d1d622dab1412c042b270375da3f",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_912_F_York_C.DAv2_CID_912_F_York_C",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "12",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_912_Athena_Commando_F_York_C"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_912_athena_commando_f_york_c",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_912_F_York_C.DAv2_CID_912_F_York_C"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "12"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_912_Athena_Commando_F_York_C"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_912_Athena_Commando_F_York_C.DA_Featured_CID_912_Athena_Commando_F_York_C",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_912_athena_commando_f_york_c",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -4,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Paranormal Guide for 800 MtxCurrency",
          "offerId": "v2:/d18a1cd359e6effd94d13d9fc82c19a96d3f1028ed536add645b5c54a8865899",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_909_M_York_E.DAv2_CID_909_M_York_E",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "13",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_909_Athena_Commando_M_York_E"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_909_athena_commando_m_york_e",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_909_M_York_E.DAv2_CID_909_M_York_E"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "13"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_909_Athena_Commando_M_York_E"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_909_Athena_Commando_M_York_E.DA_Featured_CID_909_Athena_Commando_M_York_E",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_909_athena_commando_m_york_e",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -8,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Aura Analyzer for 800 MtxCurrency",
          "offerId": "v2:/2e504d12677b750904b0ce11eedfb48d3d65d707215c5022c040bb9e8c782fe8",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_910_F_York_A.DAv2_CID_910_F_York_A",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "12",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_910_Athena_Commando_F_York"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_910_athena_commando_f_york",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_910_F_York_A.DAv2_CID_910_F_York_A"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "12"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_910_Athena_Commando_F_York"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_910_Athena_Commando_F_York.DA_Featured_CID_910_Athena_Commando_F_York",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_910_athena_commando_f_york",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -3,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Ghost Trap, 1 x Proton Pack, 1 x Proton Pickaxe, 1 x Ecto-Glider for -1 MtxCurrency",
          "offerId": "v2:/0fb6fa1a46ead33c83c31a5f978017a56bea864916616896a93f9319c5b405e5",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [],
          "dynamicBundleInfo": {
            "discountedBasePrice": -1000,
            "regularBasePrice": 0,
            "floorPrice": 200,
            "currencyType": "MtxCurrency",
            "currencySubType": "",
            "displayType": "AmountOff",
            "bundleItems": [
              {
                "bCanOwnMultiple": false,
                "regularPrice": 400,
                "discountedPrice": 400,
                "alreadyOwnedPriceReduction": 400,
                "item": {
                  "templateId": "AthenaBackpack:bid_634_york_female",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 400,
                "discountedPrice": 400,
                "alreadyOwnedPriceReduction": 400,
                "item": {
                  "templateId": "AthenaBackpack:bid_635_york_male",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaPickaxe:pickaxe_id_491_yorkmale",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 1200,
                "discountedPrice": 1200,
                "alreadyOwnedPriceReduction": 1200,
                "item": {
                  "templateId": "AthenaGlider:glider_id_248_york",
                  "quantity": 1
                }
              }
            ]
          },
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllItems.DAv2_Bundles_York_AllItems",
            "SectionId": "GhostbustersGear",
            "TileSize": "DoubleWide",
            "AnalyticOfferGroupId": "14",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Glider_ID_248_York"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "DynamicBundle",
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllItems.DAv2_Bundles_York_AllItems"
            },
            {
              "key": "SectionId",
              "value": "GhostbustersGear"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "14"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Glider_ID_248_York"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_YorkGearBundle.DA_Featured_YorkGearBundle",
          "itemGrants": [
            {
              "templateId": "AthenaBackpack:bid_634_york_female",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_635_york_male",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_491_yorkmale",
              "quantity": 1
            },
            {
              "templateId": "AthenaGlider:glider_id_248_york",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -1,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Spell Sweeper for 800 MtxCurrency",
          "offerId": "v2:/057478c4690a650e1cbc57bc27c8744a41f00d46975522839aff446f941abdb9",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 7"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_482_BabaYagaFemale.DAv2_Pickaxe_ID_482_BabaYagaFemale",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "17",
            "BannerOverride": "CollectTheSet"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_482_babayagafemale",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_482_BabaYagaFemale.DAv2_Pickaxe_ID_482_BabaYagaFemale"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "17"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_482_BabaYagaFemale.DA_Featured_Pickaxe_ID_482_BabaYagaFemale",
          "itemGrants": [
            {
              "templateId": "AthenaPickaxe:pickaxe_id_482_babayagafemale",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -5,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Curse Buster for 800 MtxCurrency",
          "offerId": "v2:/e1975f8a5ef50b5bd445d0b400c7546a5d63148f287a4d567d64f2eeffd534f6",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_913_F_York_D.DAv2_CID_913_F_York_D",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "12",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_913_Athena_Commando_F_York_D"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_913_athena_commando_f_york_d",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_913_F_York_D.DAv2_CID_913_F_York_D"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "12"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_913_Athena_Commando_F_York_D"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_913_Athena_Commando_F_York_D.DA_Featured_CID_913_Athena_Commando_F_York_D",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_913_athena_commando_f_york_d",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -5,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Proton Pack for 400 MtxCurrency",
          "offerId": "v2:/bcee31a1551b67d797cc7abbdcf3c112dd16f5762b78f61f60dd631063e8dcea",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 400,
              "dynamicRegularPrice": 400,
              "finalPrice": 400,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 400
            }
          ],
          "meta": {
            "offertag": "reactiveyorkbackbling",
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_BID_635_YorkMale.DAv2_BID_635_YorkMale",
            "SectionId": "GhostbustersGear",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "14",
            "BannerOverride": "Reactive",
            "ViolatorTag": "Reactive",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:BID_635_York_Male"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_635_york_male",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "offertag",
              "value": "reactiveyorkbackbling"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_BID_635_YorkMale.DAv2_BID_635_YorkMale"
            },
            {
              "key": "SectionId",
              "value": "GhostbustersGear"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "14"
            },
            {
              "key": "BannerOverride",
              "value": "Reactive"
            },
            {
              "key": "ViolatorTag",
              "value": "Reactive"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:BID_635_York_Male"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BID_635_York_Male.DA_Featured_BID_635_York_Male",
          "itemGrants": [
            {
              "templateId": "AthenaBackpack:bid_635_york_male",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -2,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Ecto-Glider for 1200 MtxCurrency",
          "offerId": "v2:/060756d98067864b7c0faec4fdebef291b8a6e2971814c87fd6d1fb51ea57673",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_ID_248_York.DAv2_Glider_ID_248_York",
            "SectionId": "GhostbustersGear",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "14",
            "BannerOverride": "CollectTheSet",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Glider_ID_248_York"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaGlider:glider_id_248_york",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_ID_248_York.DAv2_Glider_ID_248_York"
            },
            {
              "key": "SectionId",
              "value": "GhostbustersGear"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "14"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Glider_ID_248_York"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Glider_ID_248_York.DA_Featured_Glider_ID_248_York",
          "itemGrants": [
            {
              "templateId": "AthenaGlider:glider_id_248_york",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -5,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Hex Hut for 1200 MtxCurrency",
          "offerId": "v2:/dc85729f14c8c333e6757c7fddb26917652ec7e55571c03fd8bcb5275229372e",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 7"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_ID_246_BabaYaga.DAv2_Glider_ID_246_BabaYaga",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "17",
            "BannerOverride": "CollectTheSet"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaGlider:glider_id_246_babayaga",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Glider_ID_246_BabaYaga.DAv2_Glider_ID_246_BabaYaga"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "17"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Glider_ID_246_BabaYaga.DA_Featured_Glider_ID_246_BabaYaga",
          "itemGrants": [
            {
              "templateId": "AthenaGlider:glider_id_246_babayaga",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -6,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Snuggle Swiper for 500 MtxCurrency",
          "offerId": "v2:/db89318eea792b54481897b937317e0fd31ce616438bada36be046fba33173cb",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 8"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_285_CuddleTeamDark.DAv2_Pickaxe_ID_285_CuddleTeamDark",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "18",
            "BannerOverride": "CollectTheSet"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_285_cuddleteamdark",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_285_CuddleTeamDark.DAv2_Pickaxe_ID_285_CuddleTeamDark"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "18"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_285_CuddleTeamDark.DA_Featured_Pickaxe_ID_285_CuddleTeamDark",
          "itemGrants": [
            {
              "templateId": "AthenaPickaxe:pickaxe_id_285_cuddleteamdark",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -8,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Aura Analyzer, 1 x Specter Inspector, 1 x Phantom Commando, 1 x Curse Buster, 1 x Spirit Sniper for -1 MtxCurrency",
          "offerId": "v2:/3d166d838fe03619ff7494752f16f2426ed910d444be4c40e76609596422a17d",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 1"
          ],
          "prices": [],
          "dynamicBundleInfo": {
            "discountedBasePrice": -2000,
            "regularBasePrice": 0,
            "floorPrice": 200,
            "currencyType": "MtxCurrency",
            "currencySubType": "",
            "displayType": "AmountOff",
            "bundleItems": [
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_910_athena_commando_f_york",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_911_athena_commando_f_york_b",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_912_athena_commando_f_york_c",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_913_athena_commando_f_york_d",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_914_athena_commando_f_york_e",
                  "quantity": 1
                }
              }
            ]
          },
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllF.DAv2_Bundles_York_AllF",
            "SectionId": "Ghostbusters",
            "TileSize": "DoubleWide",
            "AnalyticOfferGroupId": "11",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_914_Athena_Commando_F_York_E"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "DynamicBundle",
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllF.DAv2_Bundles_York_AllF"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "11"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_914_Athena_Commando_F_York_E"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_YorkFemaleBundle.DA_Featured_YorkFemaleBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_910_athena_commando_f_york",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_911_athena_commando_f_york_b",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_912_athena_commando_f_york_c",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_913_athena_commando_f_york_d",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_914_athena_commando_f_york_e",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -1,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Snuggs, 1 x Broken Heart for 1200 MtxCurrency",
          "offerId": "v2:/05fa3b442071ea705b7371167e4ff75433bfca199365c810d0d091eb5702a4cc",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 8"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_580_M_CuddleTeamDark.DAv2_CID_580_M_CuddleTeamDark",
            "SectionId": "SpookyOffers",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "18"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_580_athena_commando_m_cuddleteamdark",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_380_cuddleteamdark",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_580_M_CuddleTeamDark.DAv2_CID_580_M_CuddleTeamDark"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "18"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_580_Athena_Commando_M_CuddleTeamDark.DA_Featured_CID_580_Athena_Commando_M_CuddleTeamDark",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_580_athena_commando_m_cuddleteamdark",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_380_cuddleteamdark",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -7,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Jaw Dropper for 500 MtxCurrency",
          "offerId": "v2:/67eae8142359fc2897d4f809f862b441007fe713924a84fe4ed936fa719e4aac",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 6"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_484_FamineMale.DAv2_Pickaxe_ID_484_FamineMale",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "16",
            "BannerOverride": "CollectTheSet"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_484_faminemale",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_484_FamineMale.DAv2_Pickaxe_ID_484_FamineMale"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "16"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_484_FamineMale.DA_Featured_Pickaxe_ID_484_FamineMale",
          "itemGrants": [
            {
              "templateId": "AthenaPickaxe:pickaxe_id_484_faminemale",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -3,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Proton Pickaxe for 800 MtxCurrency",
          "offerId": "v2:/db806c0f03e0956c3d584f76b665195da6cd5118faf6b5f28ea205935fc96410",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_491_YorkMale.DAv2_Pickaxe_ID_491_YorkMale",
            "SectionId": "GhostbustersGear",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "14",
            "BannerOverride": "CollectTheSet",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Pickaxe_ID_491_YorkMale"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaPickaxe:pickaxe_id_491_yorkmale",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Pickaxe_ID_491_YorkMale.DAv2_Pickaxe_ID_491_YorkMale"
            },
            {
              "key": "SectionId",
              "value": "GhostbustersGear"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "14"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:Pickaxe_ID_491_YorkMale"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_491_YorkMale.DA_Featured_Pickaxe_ID_491_YorkMale",
          "itemGrants": [
            {
              "templateId": "AthenaPickaxe:pickaxe_id_491_yorkmale",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -4,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Headlock, 1 x Trappy for 1200 MtxCurrency",
          "offerId": "v2:/8ec876733943b250c80b190ad24d90395f25ac05325755eb4d63f318d5bbc614",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 6"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_900_M_Famine.DAv2_CID_900_M_Famine",
            "SectionId": "SpookyOffers",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "16"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_900_athena_commando_m_famine",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_630_famine",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_900_M_Famine.DAv2_CID_900_M_Famine"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "16"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_900_Athena_Commando_M_Famine.DA_Featured_CID_900_Athena_Commando_M_Famine",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_900_athena_commando_m_famine",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_630_famine",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -2,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x P.K.E. Ranger, 1 x Containment Specialist, 1 x Ecto Expert, 1 x Haunt Officer, 1 x Paranormal Guide for -1 MtxCurrency",
          "offerId": "v2:/4b2b4b2a6e45fe76cfd97dd35719568a0a2a71b820b7ca32c722914f12ac82ec",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 1"
          ],
          "prices": [],
          "dynamicBundleInfo": {
            "discountedBasePrice": -2000,
            "regularBasePrice": 0,
            "floorPrice": 200,
            "currencyType": "MtxCurrency",
            "currencySubType": "",
            "displayType": "AmountOff",
            "bundleItems": [
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_905_athena_commando_m_york",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_906_athena_commando_m_york_b",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_907_athena_commando_m_york_c",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_908_athena_commando_m_york_d",
                  "quantity": 1
                }
              },
              {
                "bCanOwnMultiple": false,
                "regularPrice": 800,
                "discountedPrice": 800,
                "alreadyOwnedPriceReduction": 800,
                "item": {
                  "templateId": "AthenaCharacter:cid_909_athena_commando_m_york_e",
                  "quantity": 1
                }
              }
            ]
          },
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllM.DAv2_Bundles_York_AllM",
            "SectionId": "Ghostbusters",
            "TileSize": "DoubleWide",
            "AnalyticOfferGroupId": "11",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_909_Athena_Commando_M_York_E"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "DynamicBundle",
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundles_York_AllM.DAv2_Bundles_York_AllM"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "11"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_909_Athena_Commando_M_York_E"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_YorkMaleBundle.DA_Featured_YorkMaleBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_905_athena_commando_m_york",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_906_athena_commando_m_york_b",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_907_athena_commando_m_york_c",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_908_athena_commando_m_york_d",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_909_athena_commando_m_york_e",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -2,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Specter Inspector for 800 MtxCurrency",
          "offerId": "v2:/4180c8dbc42a2705ca6355a7c27d55ac53aefe795021210b8e9ec7e1b14298e5",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_911_F_York_B.DAv2_CID_911_F_York_B",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "12",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_911_Athena_Commando_F_York_B"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_911_athena_commando_f_york_b",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_911_F_York_B.DAv2_CID_911_F_York_B"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "12"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_911_Athena_Commando_F_York_B"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_911_Athena_Commando_F_York_B.DA_Featured_CID_911_Athena_Commando_F_York_B",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_911_athena_commando_f_york_b",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -7,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x P.K.E. Ranger for 800 MtxCurrency",
          "offerId": "v2:/42aee06c69809af9393585f4e5a04db9fe0cec0c5a7c21b75b920a98cbec8b86",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_905_M_York_A.DAv2_CID_905_M_York_A",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "13",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_905_Athena_Commando_M_York"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_905_athena_commando_m_york",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_905_M_York_A.DAv2_CID_905_M_York_A"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "13"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_905_Athena_Commando_M_York"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_905_Athena_Commando_M_York.DA_Featured_CID_905_Athena_Commando_M_York",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_905_athena_commando_m_york",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -10,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Haunt Officer for 800 MtxCurrency",
          "offerId": "v2:/9a93775ac6928ab40cccc5867709e8ea8aba7c9d390f9b4edcd724645289046e",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_908_M_York_D.DAv2_CID_908_M_York_D",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "13",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_908_Athena_Commando_M_York_D"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_908_athena_commando_m_york_d",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_908_M_York_D.DAv2_CID_908_M_York_D"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "13"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_908_Athena_Commando_M_York_D"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_908_Athena_Commando_M_York_D.DA_Featured_CID_908_Athena_Commando_M_York_D",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_908_athena_commando_m_york_d",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -12,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Ghost Trap for 400 MtxCurrency",
          "offerId": "v2:/15e147db9af0a0f8398f656a1c2e8df66f3e40796ff49496b417da93623bf4d4",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 400,
              "dynamicRegularPrice": 400,
              "finalPrice": 400,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 400
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_BID_634_YorkFemale.DAv2_BID_634_YorkFemale",
            "SectionId": "GhostbustersGear",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "14",
            "BannerOverride": "CollectTheSet",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:BID_634_York_Female"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_634_york_female",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_BID_634_YorkFemale.DAv2_BID_634_YorkFemale"
            },
            {
              "key": "SectionId",
              "value": "GhostbustersGear"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "14"
            },
            {
              "key": "BannerOverride",
              "value": "CollectTheSet"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:BID_634_York_Female"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BID_634_York_Female.DA_Featured_BID_634_York_Female",
          "itemGrants": [
            {
              "templateId": "AthenaBackpack:bid_634_york_female",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -3,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Ecto Expert for 800 MtxCurrency",
          "offerId": "v2:/516d03f154edec7aab962fa5d15efa0150347d1dcd1bb7ec56455732d08e5b52",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 800,
              "dynamicRegularPrice": 800,
              "finalPrice": 800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 800
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_907_M_York_C.DAv2_CID_907_M_York_C",
            "SectionId": "Ghostbusters",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "13",
            "EncryptionKey": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_907_Athena_Commando_M_York_C"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_907_athena_commando_m_york_c",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_907_M_York_C.DAv2_CID_907_M_York_C"
            },
            {
              "key": "SectionId",
              "value": "Ghostbusters"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "13"
            },
            {
              "key": "EncryptionKey",
              "value": "828B24CF7786DF74D8511CA89DEED8CF:nCahv7mQhidmYXSmKif6z7d6bQ60mdPQ7SrdZ7a3GaE=:CID_907_Athena_Commando_M_York_C"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_907_Athena_Commando_M_York_C.DA_Featured_CID_907_Athena_Commando_M_York_C",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_907_athena_commando_m_york_c",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -11,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Baba Yaga, 1 x Auric for 1200 MtxCurrency",
          "offerId": "v2:/39723eb22f5cfe11154485396586307a246fe17eb9c526253891ddf9b3a56c99",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Panel 7"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_919_F_BabaYaga.DAv2_CID_919_F_BabaYaga",
            "SectionId": "SpookyOffers",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "17"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_919_athena_commando_f_babayaga",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_639_babayaga",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_919_F_BabaYaga.DAv2_CID_919_F_BabaYaga"
            },
            {
              "key": "SectionId",
              "value": "SpookyOffers"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "17"
            }
          ],
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_919_Athena_Commando_F_BabaYaga.DA_Featured_CID_919_Athena_Commando_F_BabaYaga",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_919_athena_commando_f_babayaga",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_639_babayaga",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -4,
          "catalogGroupPriority": 0
        }
      ]
    },
    {
      "name": "BattleBundle",
      "catalogEntries": [
        {
          "offerId": "43ABAA5F426BB6BEA4A245BBB517C67A",
          "devName": "BattleBundle",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 7800,
              "dynamicRegularPrice": -1,
              "finalPrice": 7800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 7800
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "F5628FDB4399BDE93B899D93F172EBA6",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "bNoPreview",
              "value": "true"
            },
            {
              "key": "PurchaseLimit",
              "value": "1"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "2020 Annual Pass",
          "shortDescription": "",
          "description": "Purchase the 2020 Annual Pass and receive all upcoming 2020 Fortnite Battle Royale: Battle Bundles and 7 Annual Pass exclusive cosmetics. Battle Bundles unlock 25% of content in each Battle Pass instantly upon release.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BattlePassBundle_2020.DA_BattlePassBundle_2020",
          "itemGrants": [
            {
              "templateId": "Token:annual_2020_pass_owned",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_619_athena_commando_f_techllama",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_415_techllama",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_543_athena_commando_m_llamahero",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_364_llamahero",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_642_athena_commando_f_constellationstar",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_435_constellation",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_279_malellamaheromilitia",
              "quantity": 1
            }
          ],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        }
      ]
    },
    {
      "name": "TokensForGiftableItems",
      "catalogEntries": [
        {
          "offerId": "02A0B24240C2528B435EF4817E89070F",
          "devName": "Glow Select",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "sam_glow",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "230FA67742DD9570005A8C82D81A33FC",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Glow",
          "shortDescription": "",
          "description": "The aura of victory glows bright.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_479_Athena_Commando_F_Davinci.DA_Featured_CID_479_Athena_Commando_F_Davinci",
          "itemGrants": [
            {
              "templateId": "Token:giftglowtoken",
              "quantity": 1
            }
          ]
        }
      ]
    },
    {
      "name": "CreativeEventStorefront",
      "catalogEntries": []
    },
    {
      "name": "BRSeason11",
      "catalogEntries": [
        {
          "offerId": "571D433C47E98F020EF099894CAF3B6A",
          "devName": "BR.Season11.BattlePass.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 950,
              "dynamicRegularPrice": -1,
              "finalPrice": 950,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 950
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "571D433C47E98F020EF099894CAF3B6A",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 1,
          "title": "Battle Pass",
          "shortDescription": "Chapter 2 - Season 1",
          "description": "Chapter 2 - Season 1 through February 6. \n\nInstantly get these items\n  • <ItemName>Turk | Riptide</> Outfit\n  • <ItemName>Journey | Hazard</> Outfit\n\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> !\n  • <ItemName>Fusion</> and <Bold>4 more Outfits</>\n  • <Bold>1,500 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 5 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 8 Sprays\n  • 3 Music Tracks\n  • 16 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy rewards any time!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season11_BattlePass.DA_BR_Season11_BattlePass",
          "itemGrants": []
        },
        {
          "offerId": "70DBDA11425B10AF7A005D82DB54BC59",
          "devName": "BR.Season11.SingleTier.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 150,
              "dynamicRegularPrice": -1,
              "finalPrice": 150,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 150
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Battle Pass Level",
          "shortDescription": "",
          "description": "Get great rewards now!",
          "displayAssetPath": "",
          "itemGrants": []
        },
        {
          "offerId": "93E992BC45D487A943D769845441ABA5",
          "devName": "BR.Season11.BattleBundle.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 4700,
              "dynamicRegularPrice": -1,
              "finalPrice": 2800,
              "saleType": "PercentOff",
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "571D433C47E98F020EF099894CAF3B6A",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:athena_s11_nobattlebundleoption_token",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Battle Bundle",
          "shortDescription": "Battle Pass + 25 levels!",
          "description": "Chapter 2 - Season 1 through February 6.\n\nInstantly get these items\n  •  <ItemName>Turk | Riptide</> Outfit\n  • <ItemName>Journey | Hazard</> Outfit\n  • <ItemName>Rippley | Sludge</> Outfit\n  • <ItemName>Respect The Peace</> Emote\n  • <ItemName>Sky Trawler</> Glider\n  • <ItemName>Riptide </> Wrap\n  • <ItemName> Slurpstream</> Contrails\n  • <ItemName>Storm Shredder </> Music Track\n  •  400 V-Bucks  \n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</>!\n  • <Bold>4 more Outfits</>\n  • <Bold>1,200 V-Bucks</>\n  • 5 Emotes\n  • 5 Wraps\n  • 5 Harvesting Tools\n  • 4 Gliders\n  • 4 Back Blings\n  • 4 Contrails\n  • 5 Sprays\n  • 2 Music Tracks\n  • 13 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy rewards any time!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season11_BattlePassWithLevels.DA_BR_Season11_BattlePassWithLevels",
          "itemGrants": []
        }
      ]
    },
    {
      "name": "BRSeason12",
      "catalogEntries": []
    },
    {
      "name": "BRDailyStorefront",
      "catalogEntries": [
        {
          "devName": "[VIRTUAL]1 x King Krab, 1 x Back Scoop for 1200 MtxCurrency",
          "offerId": "v2:/43eed1e3944ccebe645174ac8f2b773d09f6d1cb888ccb0b1eca523d14732926",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 1"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "offertag": "reactivekomplex",
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_826_M_FlotillaCaptain.DAv2_CID_826_M_FlotillaCaptain",
            "SectionId": "Daily",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "5",
            "BannerOverride": "SelectableStyles"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_826_athena_commando_m_floatillacaptain",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_579_floatillacaptain",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "offertag",
              "value": "reactivekomplex"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_826_M_FlotillaCaptain.DAv2_CID_826_M_FlotillaCaptain"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "5"
            },
            {
              "key": "BannerOverride",
              "value": "SelectableStyles"
            }
          ],
          "displayAssetPath": "None",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_826_athena_commando_m_floatillacaptain",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_579_floatillacaptain",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -1,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x PJ Pepperoni, 1 x Cheesy for 1200 MtxCurrency",
          "offerId": "v2:/492a3b0535b5af09bc0ed98d73d8f615058cfa1161ae0d2c71b0b2b52a26e528",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 2"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1200,
              "dynamicRegularPrice": 1200,
              "finalPrice": 1200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_CID_482_f_PizzaPitt.DAv2_CID_482_f_PizzaPitt",
            "SectionId": "Daily",
            "TileSize": "Normal",
            "AnalyticOfferGroupId": "6"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaCharacter:cid_482_athena_commando_f_pizzapit",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaBackpack:bid_315_pizzapit",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_CID_482_f_PizzaPitt.DAv2_CID_482_f_PizzaPitt"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Normal"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "6"
            }
          ],
          "displayAssetPath": "None",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_482_athena_commando_f_pizzapit",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_315_pizzapit",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -2,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Infectious for 500 MtxCurrency",
          "offerId": "v2:/a1c2fb6aa94196dead0131d304f88e7f9e77883d34614f53d20c45add7f445aa",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 4"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_GothDance.DAv2_EID_GothDance",
            "SectionId": "Daily",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "8"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_gothdance",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_GothDance.DAv2_EID_GothDance"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "8"
            }
          ],
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_gothdance",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -4,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Pickin' for 500 MtxCurrency",
          "offerId": "v2:/c797c7c799ae568ec4bed1aab47a52440fb41c0611ce5e254aaf74c42f89db81",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 3"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_RockingChairst.DAv2_EID_RockingChairst",
            "SectionId": "Daily",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "7",
            "BannerOverride": "New",
            "StoreToastHeader": "New",
            "StoreToastBody": "ItemAvailableNow",
            "ViolatorTag": "New"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_rockingchair",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_RockingChairst.DAv2_EID_RockingChairst"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "7"
            },
            {
              "key": "BannerOverride",
              "value": "New"
            },
            {
              "key": "StoreToastHeader",
              "value": "New"
            },
            {
              "key": "StoreToastBody",
              "value": "ItemAvailableNow"
            },
            {
              "key": "ViolatorTag",
              "value": "New"
            }
          ],
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_rockingchair",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -3,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Living Large for 500 MtxCurrency",
          "offerId": "v2:/f2a3fb7b652d901a7d90af6dfafedae6db6058a0c43ba17e5d6ab4e40d1d5eb2",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 5"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 500,
              "dynamicRegularPrice": 500,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_LivingLarge.DAv2_EID_LivingLarge",
            "SectionId": "Daily",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "9"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_livinglarge",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_LivingLarge.DAv2_EID_LivingLarge"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "9"
            }
          ],
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_livinglarge",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -5,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Battle Call for 200 MtxCurrency",
          "offerId": "v2:/89b264718a7e0d604d77bbca32638a2996a9431316629600c28cfa1447621a36",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [
            "Daily 6"
          ],
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 200,
              "dynamicRegularPrice": 200,
              "finalPrice": 200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 200
            }
          ],
          "meta": {
            "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_EID_VikingHorn.DAv2_EID_VikingHorn",
            "SectionId": "Daily",
            "TileSize": "Small",
            "AnalyticOfferGroupId": "10"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "AthenaDance:eid_vikinghorn",
              "minQuantity": 1
            }
          ],
          "offerType": "StaticPrice",
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": [],
            "giftRecordIds": []
          },
          "refundable": true,
          "metaInfo": [
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_EID_VikingHorn.DAv2_EID_VikingHorn"
            },
            {
              "key": "SectionId",
              "value": "Daily"
            },
            {
              "key": "TileSize",
              "value": "Small"
            },
            {
              "key": "AnalyticOfferGroupId",
              "value": "10"
            }
          ],
          "itemGrants": [
            {
              "templateId": "AthenaDance:eid_vikinghorn",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": -6,
          "catalogGroupPriority": 0
        }
      ]
    },
    {
      "name": "BRSeason13",
      "catalogEntries": []
    },
    {
      "name": "CardPackStorePreroll",
      "catalogEntries": [
        {
          "offerId": "4D64CBE3618D41FBB5CAD0E472F4610A",
          "devName": "Always.UpgradePack.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:currency_xrayllama",
              "regularPrice": 50,
              "dynamicRegularPrice": -1,
              "finalPrice": 50,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 50
            },
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 50,
              "dynamicRegularPrice": -1,
              "finalPrice": 50,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 50
            }
          ],
          "categories": [],
          "dailyLimit": 50,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "RequireFulfillment",
              "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SharedDisplayPriority",
              "value": "1"
            },
            {
              "key": "bUseUpgradeDisplay",
              "value": "True"
            },
            {
              "key": "ProfileId",
              "value": "campaign"
            },
            {
              "key": "Preroll",
              "value": "True"
            },
            {
              "key": "MaxConcurrentPurchases",
              "value": "1"
            },
            {
              "key": "LinkedPrerollOffer",
              "value": "OfferId:D2E08EFA731D437B85B7340EB51A5E1D"
            }
          ],
          "catalogGroup": "Upgrade",
          "catalogGroupPriority": 1,
          "sortPriority": 0,
          "title": "Upgrade Llama",
          "shortDescription": "",
          "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_bronze",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "B9B0CE758A5049F898773C1A47A69ED4",
          "devName": "Always.UpgradePack.03",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:currency_xrayllama",
              "regularPrice": 50,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleType": "Strikethrough",
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            },
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 50,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleType": "Strikethrough",
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": 1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "ProfileId",
              "value": "campaign"
            },
            {
              "key": "Preroll",
              "value": "True"
            },
            {
              "key": "MaxConcurrentPurchases",
              "value": "1"
            }
          ],
          "catalogGroup": "Upgrade",
          "catalogGroupPriority": 999,
          "sortPriority": 0,
          "title": "Upgrade Llama",
          "shortDescription": "",
          "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_bronze",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "D2E08EFA731D437B85B7340EB51A5E1D",
          "devName": "Always.UpgradePack.02",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:voucher_cardpack_bronze",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "RequireFulfillment",
              "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SharedDisplayPriority",
              "value": "2"
            },
            {
              "key": "bUseUpgradeDisplay",
              "value": "True"
            },
            {
              "key": "ProfileId",
              "value": "campaign"
            },
            {
              "key": "Preroll",
              "value": "True"
            },
            {
              "key": "MaxConcurrentPurchases",
              "value": "1"
            },
            {
              "key": "LinkedPrerollOffer",
              "value": "OfferId:4D64CBE3618D41FBB5CAD0E472F4610A"
            }
          ],
          "catalogGroup": "Upgrade",
          "catalogGroupPriority": 2,
          "sortPriority": 0,
          "title": "Upgrade Llama",
          "shortDescription": "",
          "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_bronze",
              "quantity": 1
            }
          ]
        },
        {
          "devName": "[VIRTUAL]1 x Super Hero Llama for 1000 GameItem : AccountResource:currency_xrayllama1000 MtxCurrency",
          "offerId": "4EBE0F91AF694A74A5699BADBA8A4B55",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:currency_xrayllama",
              "regularPrice": 1000,
              "dynamicRegularPrice": 1000,
              "finalPrice": 1000,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1000
            },
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 1000,
              "dynamicRegularPrice": 1000,
              "finalPrice": 1000,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1000
            }
          ],
          "meta": {
            "MaxConcurrentPurchases": "1",
            "Preroll": "True",
            "ProfileId": "campaign",
            "EventLimit": "2",
            "PurchaseLimitingEventId": "111q2qmp495lru7ao65hinkq27[0]54"
          },
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "metaInfo": [
            {
              "key": "MaxConcurrentPurchases",
              "value": "1"
            },
            {
              "key": "Preroll",
              "value": "True"
            },
            {
              "key": "ProfileId",
              "value": "campaign"
            },
            {
              "key": "EventLimit",
              "value": "2"
            },
            {
              "key": "PurchaseLimitingEventId",
              "value": "111q2qmp495lru7ao65hinkq27[0]54"
            }
          ],
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Rare_Heroes.CardPack_Rare_Heroes",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_rare_heroes",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroup": "Shared",
          "catalogGroupPriority": 3,
          "fulfillmentClass": "com.epicgames.fortnite.core.game.fulfillments.PrerollFulfillment"
        }
      ]
    },
    {
      "name": "BRSeason14",
      "catalogEntries": [
        {
          "offerId": "461F34C046269604EAC31481F34BC405",
          "devName": "BR.Season14.SingleTier.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 150,
              "dynamicRegularPrice": -1,
              "finalPrice": 150,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 150
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Battle Pass Level",
          "shortDescription": "",
          "description": "Get great rewards now!",
          "displayAssetPath": "",
          "itemGrants": []
        },
        {
          "offerId": "6EFAD8A54BBFAF4F24FA17BFCA8A879E",
          "devName": "BR.Season14.BattlePass.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 950,
              "dynamicRegularPrice": -1,
              "finalPrice": 950,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 950
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "6EFAD8A54BBFAF4F24FA17BFCA8A879E",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "bShowInItemShop",
              "value": "true"
            },
            {
              "key": "sectionPriority",
              "value": "1000"
            },
            {
              "key": "SectionId",
              "value": "Battlepass"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "Preroll",
              "value": "False"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_BR_Season14_BattlePass_Wasabi.DAv2_BR_Season14_BattlePass_Wasabi"
            },
            {
              "key": "BannerOverride",
              "value": "UnlockWolverine"
            },
            {
              "key": "ViolatorTag",
              "value": "UnlockWolverine"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 1,
          "title": "Battle Pass",
          "shortDescription": "Chapter 2 - Season 4",
          "description": "Chapter 2 - Season 4 through November 12.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season14_BattlePass_Wasabi.DA_BR_Season14_BattlePass_Wasabi",
          "itemGrants": []
        },
        {
          "offerId": "EF8B4026459021F4C1B7218BA108E7CC",
          "devName": "BR.Season14.BattlePassGift.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "Token:battlepassgift",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "6EFAD8A54BBFAF4F24FA17BFCA8A879E",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            },
            {
              "key": "BannerOverride",
              "value": "GiftOnly"
            },
            {
              "key": "SeasonGift",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 1,
          "title": "Battle Pass",
          "shortDescription": "Season 14",
          "description": "Season 14",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season14_BattlePass.DA_BR_Season14_BattlePass",
          "itemGrants": [],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        },
        {
          "offerId": "CFD41EF842ABF9D3D84A84B0F717D900",
          "devName": "BR.Season14.BattleBundle.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 4700,
              "dynamicRegularPrice": -1,
              "finalPrice": 2800,
              "saleType": "PercentOff",
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "6EFAD8A54BBFAF4F24FA17BFCA8A879E",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "bShowInItemShop",
              "value": "true"
            },
            {
              "key": "LevelsToGrant",
              "value": "25"
            },
            {
              "key": "SectionId",
              "value": "Battlepass"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "Preroll",
              "value": "False"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_BR_Season14_BattlePassWithLevels_Wasabi.DAv2_BR_Season14_BattlePassWithLevels_Wasabi"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Battle Bundle",
          "shortDescription": "Battle Pass + 25 levels!",
          "description": "Chapter 2 - Season 4 through November 12.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season14_BattlePassWithLevels_Wasabi.DA_BR_Season14_BattlePassWithLevels_Wasabi",
          "itemGrants": []
        }
      ]
    },
    {
      "name": "CardPackStoreGameplay",
      "catalogEntries": [
        {
          "offerId": "5366E22A41C8428682737CF99513DC5F",
          "devName": "Always.Gameplay.JackpotVoucher.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:voucher_cardpack_jackpot",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "bUseSharedDisplay",
              "value": "True"
            },
            {
              "key": "SharedDisplayPriority",
              "value": "100"
            },
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Legendary Troll Stash Llama",
          "shortDescription": "",
          "description": "An entire suite of goodies, direct from your local troll's stash! Contains at least 8 definitely-not-stolen items.",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Jackpot.CardPack_Jackpot",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_jackpot",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "30A676BCF19B4D179F11D59079C69B6D",
          "devName": "Always.Gameplay.DailyLoginPack.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:voucher_custom_firecracker_r",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "bUseSharedDisplay",
              "value": "True"
            },
            {
              "key": "SharedDisplayPriority",
              "value": "101"
            },
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Rare Firecracker Pistol",
          "shortDescription": "",
          "description": "One random Firecracker schematic.",
          "displayAssetPath": "/Game/Items/CardPacks/SpecificRewards/CardPack_Custom_Firecracker_R.CardPack_Custom_Firecracker_R",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_custom_firecracker_r",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "1F6B613D4B7BAD47D8A93CAEED2C4996",
          "devName": "Mini Llama Manual Tutorial - high SharedDisplayPriority",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:voucher_basicpack",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": 1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "bUseSharedDisplay",
              "value": "true"
            },
            {
              "key": "SharedDisplayPriority",
              "value": "999999"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Mini Reward Llama",
          "shortDescription": "",
          "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_basic",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "73216346454B1B2892DDA381C75E1BCB",
          "devName": "Mini Llama Manual Default - Low SharedDisplayPriority",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:voucher_basicpack",
              "regularPrice": 1,
              "dynamicRegularPrice": -1,
              "finalPrice": 1,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "RequireFulfillment",
              "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "bUseSharedDisplay",
              "value": "true"
            },
            {
              "key": "SharedDisplayPriority",
              "value": "1"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Mini Reward Llama",
          "shortDescription": "",
          "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
          "displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_basic",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "5726F71BD7A445BE8E1689F5C009F1E3",
          "devName": "Event.Event.Persistent.Fortnitemares.01",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_candy",
              "regularPrice": 500,
              "dynamicRegularPrice": -1,
              "finalPrice": 500,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 500
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "Preroll",
              "value": "False"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "Fortnitemares Llama",
          "shortDescription": "",
          "description": "Guarantees at least one Epic or better limited time Fortnitemares weapon or hero plus at least one Fortnitemares Survivor!",
          "displayAssetPath": "/Game/Items/CardPacks/Events/Release/CardPack_Event_Persistent_Fortnitemares.CardPack_Event_Persistent_Fortnitemares",
          "itemGrants": [
            {
              "templateId": "CardPack:cardpack_event_persistent_fortnitemares",
              "quantity": 1
            }
          ]
        }
      ]
    },
    {
      "name": "BPGifting",
      "catalogEntries": [
        {
          "offerId": "B5FCB8D440CAB93A3080798FACEB77A3",
          "devName": "Battle Pass Gift Token",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "628bd0368e804bd09242ce929171a791",
            "ios_bpfsg5_C",
            "",
            "google_bpfsg5",
            "",
            "BPFSG50000000000",
            "36365039-3848-304a-c05a-50384d423000",
            "c-giftable00000005-BPFSG5",
            "sam_BPFSG5",
            "9P66H8JZP8MB",
            "BPFSG50000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:battlepassgift",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "BP Gift Token",
          "shortDescription": "",
          "description": "Give a friend the Chapter 2, Season 4 Battle Pass! Your purchase includes:\r\n\r\n- A token allowing gifting of the Chapter 2, Season 4 Battle Pass to a friend of your choice.\r\n- A unique Gift Box for you to use when gifting items from the Battle Royale shop (unlocks only once).\r\n\r\nNote: In order to gift, you must have multi-factor authentication enabled on your account. You must also be Epic friends with the recipient for at least 48 hours before you can send them a gift.\r\n\r\nYou will only be able to gift five times within a 24 hour period. Any gifts that are purchased or received are NOT refundable. You can only gift one Battle Pass at a time.\r\n\r\nIf your intended recipient purchases the Battle Pass before you complete your purchase, you can gift the Battle Pass to someone else. If you don’t gift the Battle Pass by the end of the season, it will be refunded as 950 V-Bucks in your account.",
          "displayAssetPath": "",
          "itemGrants": [
            {
              "templateId": "Token:battlepassgift",
              "quantity": 1
            },
            {
              "templateId": "GiftBoxUnlock:s14battlepassgb",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "56FA0C554DA1FEEEB0D01BADD43295A1",
          "devName": "iOS Battle Pass Gift Token",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:battlepassgift",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 0,
          "title": "BP Gift Token",
          "shortDescription": "",
          "description": "Give a friend the Chapter 2, Season 4 Battle Pass! Your purchase includes:\r\n\r\n- A token allowing gifting of the Chapter 2, Season 4 Battle Pass to a friend of your choice.\r\n- A unique Gift Box for you to use when gifting items from the Battle Royale shop (unlocks only once).\r\n\r\nNote: In order to gift, you must have multi-factor authentication enabled on your account. You must also be Epic friends with the recipient for at least 48 hours before you can send them a gift.\r\n\r\nYou will only be able to gift five times within a 24 hour period. Any gifts that are purchased or received are NOT refundable. You can only gift one Battle Pass at a time.\r\n\r\nIf your intended recipient purchases the Battle Pass before you complete your purchase, you can gift the Battle Pass to someone else. If you don’t gift the Battle Pass by the end of the season, it will be refunded as 950 V-Bucks in your account.",
          "displayAssetPath": "",
          "itemGrants": [
            {
              "templateId": "Token:battlepassgift",
              "quantity": 1
            },
            {
              "templateId": "GiftBoxUnlock:s14battlepassgb",
              "quantity": 1
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 50
            }
          ]
        }
      ]
    },
    {
      "name": "BRStarterKits",
      "catalogEntries": [
        {
          "offerId": "7532F5434D9F66A44EA85B94B726AE98",
          "devName": "Corrupted Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "b0892a99f96b43f88f42eb14035e863d",
            "ios_corlgd1_C",
            "",
            "google_corlgd_1",
            "",
            "CORLGD0000000000",
            "4b564e39-4a4a-3054-c033-323048433000",
            "c-seasonpack000013-CORLGD1",
            "sam_CORLGD",
            "9NVKJJT320HC",
            "CORLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "9579C9CE48749FC2E1F35FA7C65ABF14",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_CorruptLegends.DAv2_RMT_CorruptLegends"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Corrupted Legends Pack",
          "shortDescription": "",
          "description": "What is your chaotic alignment? How will you balance the scales? This pack's cosmetics come with a slider that allows you to tune how corrupted your outfit is!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CorruptedLegendsBundle.DA_Featured_CorruptedLegendsBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_852_athena_commando_f_blackwidowcorrupt",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_853_athena_commando_f_sniperhoodcorrupt",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_854_athena_commando_m_samuraiultraarmorcorrupt",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_606_blackwidowfemale_corrupt",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_607_sniperhoodfemale_corrupt",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_608_samuraiarmorultra_corrupt",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "08F1E56C4FA0D12D7CF185A60B91B8BE",
          "devName": "Season 10 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "10628a9e5f9b4a5c94f1fe7ad5d0438b",
            "ios_rmpa08_C",
            "",
            "google_rmpa08_1",
            "",
            "RMPA080000000000",
            "b1192b17-bf7b-4be9-8d07-ba34a475a763",
            "c-starterpack00010-SPACK08",
            "sam_RMPA08",
            "C35L4JRG9PJ0",
            "RMPA080000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "F6144A364FC567EAEA542F88D28F218D",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season10_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Red Strike Pack",
          "shortDescription": "",
          "description": "Silence your foes with the Red Strike Pack. An outfit, a back bling and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_384_Athena_Commando_M_StreetAssasin.DA_Featured_CID_384_Athena_Commando_M_StreetAssasin",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_384_athena_commando_m_streetassassin",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_247_streetassassin",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "CC7F7B484282D7038AA8BAA05F540518",
          "devName": "Final Reckoning",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "69422bf51a694caca994436621abcaba",
            "ios_fnlrkg_c",
            "",
            "google_fnlrkg_1",
            "",
            "FNLRKG0000000000",
            "54532a9c-bbca-4b8c-898f-565fc393ff40",
            "c-specialpack00002-FNLRKG",
            "sam_FNLRKG",
            "9NFVV7GWWMFQ",
            "FNLRKG0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "A4DDC8244FFE3B8EF0E013B49E2E4538",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "HideRarityBorder",
              "value": "true"
            },
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_FinalReckoning.DAv2_RMT_FinalReckoning"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "The Final Reckoning Pack",
          "shortDescription": "",
          "description": "Frighten your foes with outfits from one of the Island's darkest of tales, The Final Reckoning!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FinalReckoningBundle.DA_Featured_FinalReckoningBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_585_athena_commando_f_flowerskeleton",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_601_athena_commando_f_palespooky",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_603_athena_commando_m_spookyneon",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_386_flowerskeletonfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_398_palespooky",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_399_spookyneon",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "9A9580DD415EA0810A0CF482ABF5DF94",
          "devName": "Summer Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "ad448054b8ac490990e6d2e1227fef11",
            "ios_sumlgd1_C",
            "",
            "google_sumlgd_1",
            "",
            "SUMLGD0000000000",
            "43325039-3354-3058-c044-474439472c00",
            "c-seasonpack000011-SUMLGD1",
            "sam_SUMLGD",
            "9P2CT3XDGD9G",
            "SUMLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "23EE5FCC40E2B07B12602A95AE03D166",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Summer Legends Pack",
          "shortDescription": "",
          "description": "Its time to chill with the Summer Legends!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_SummerLegendsBundle.DA_Featured_SummerLegendsBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_812_athena_commando_f_redridingsummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_811_athena_commando_f_candysummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_814_athena_commando_m_bananasummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_565_redridingsummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_564_candysummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_568_bananasummer",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "C4B01410479582CA23741693413810E9",
          "devName": "Darkfire Bundle",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "5751d4fec6464315b915bfec8e48b271",
            "ios_dfrdgl_C",
            "",
            "",
            "",
            "DFRDGL0000000000",
            "7bc913ec-3122-40db-963a-0dd2e251185a",
            "c-specialpack00001-DFRDGL",
            "sam_DFRDGL",
            "9P457071FFHW",
            "DFRDGL0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "C26EDCA5418EE82F1C650E88639F9D03",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "590B5F4348393BC73E29F0B0913056CA",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Fortnite - Darkfire Bundle",
          "shortDescription": "",
          "description": "Embrace your dark side, heat up the battle and slip into the shadows with the Darkfire Bundle.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_DarkFireBundle.DA_Featured_DarkFireBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_574_athena_commando_f_cuberockerpunk",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_517_athena_commando_m_darkeaglefire",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_510_athena_commando_f_angeleclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_374_cuberockerpunk_female",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_347_darkeaglefire",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_341_angeleclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_258_rockerpunkcube1h",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_261_darkeaglefire1h",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_260_angeleclipse1h",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_127_fragmentedglow",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_128_fragmentedgloweclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_129_fragmentedglowfire",
              "quantity": 1
            },
            {
              "templateId": "AthenaDance:eid_darkfirelegends",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "1F91288F45322EAE4F86D390FE70A2AB",
          "devName": "Ultimate Reckoning",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 2000,
              "dynamicRegularPrice": -1,
              "finalPrice": 2000,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2000
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": true,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "F2B8194748B2B9FDB0A91AB21B2A2A6D",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_UltimateReckoning.DAv2_RMT_UltimateReckoning"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Ultimate Reckoning Pack",
          "shortDescription": "",
          "description": "Scare you squad with outfits from the island's darkest tale, The Ultimate Reckoning.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_UltimateReckoningBundle.DA_Featured_UltimateReckoningBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_894_athena_commando_m_palespooky",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_624_palespooky",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_896_athena_commando_f_spookyneon",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_626_spookyneonfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_898_athena_commando_m_flowerskeleton",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_628_flowerskeletonmale",
              "quantity": 1
            }
          ],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        },
        {
          "offerId": "4E40664F40E1629B022638A891ABDDDE",
          "devName": "Celestial",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "sam_galaxy_lord",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "C41CA9D5485DCC109BD51495B2D22A09",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "LCheck",
              "value": "A,B"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 15,
          "title": "Galaxy",
          "shortDescription": "",
          "description": "Victory is written in the stars.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_175_Athena_Commando_M_Celestial.DA_Featured_CID_175_Athena_Commando_M_Celestial",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_175_athena_commando_m_celestial",
              "quantity": 1
            },
            {
              "templateId": "AthenaGlider:glider_id_090_celestial",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_138_celestial",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_116_celestial",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "869BE9DD49181A5099618D8A78699728",
          "devName": "Season 12 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "24f4bb5bda1e438487706aad6a4332d2",
            "ios_rmpa10_C",
            "",
            "google_rmpa10",
            "",
            "RMPA100000000000",
            "34394e39-5156-304e-c030-443339460f00",
            "c-starterpack00012-SPACK10",
            "sam_RMPA10",
            "9N94VQN0D39F",
            "RMPA100000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "072002BD417D1A172AEDC9B9FC41A987",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season12_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "The Iris Pack",
          "shortDescription": "",
          "description": "Keep the competition in your sights with the Iris Pack. An outfit, a back bling, a pickaxe and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_HoodieBandit_Bundle.DA_Featured_HoodieBandit_Bundle",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_674_athena_commando_f_hoodiebandit",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_457_hoodiebandit",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_343_hoodiebanditfemale",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "F186F0DD420ED9945866B0825017AE3C",
          "devName": "Season 8 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "71a6102c3104441589fd54ee9327fe24",
            "ios_rmpa06_C",
            "",
            "google_rmpa06_1",
            "",
            "RMPA060000000000",
            "a494c79e-90ad-4738-9787-debcf5065951",
            "c-starterpack00080-SPACK06",
            "sam_RMPA06",
            "BRKLF31HTQ4P",
            "RMPA060000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "E9AD46E848A082CB54C6C5B8E98375E7",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season8_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Laguna Pack",
          "shortDescription": "",
          "description": "Strum it up and kick back with the Laguna Pack. An outfit, a back bling, a wrap and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_367_Athena_Commando_F_Tropical.DA_Featured_CID_367_Athena_Commando_F_Tropical",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_367_athena_commando_f_tropical",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_231_tropicalfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_033_tropicalgirl",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "6279BD2B4B2738ADF3C4D0846FCF34B0",
          "devName": "Season 11 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "b217d78d2e0947bf8ded0fb379d7be46",
            "ios_rmpa09_C",
            "",
            "google_rmpa09_1",
            "",
            "RMPA090000000000",
            "ad4c7310-6db1-4586-b51f-900c9955fc76",
            "c-starterpack00011-SPACK09",
            "sam_RMPA09",
            "9P9HGKWK8Z9X",
            "RMPA090000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "6F04E501424478A3E6F6E9AC7F8A0DA2",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season11_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "The Wavebreaker Pack",
          "shortDescription": "",
          "description": "Crash through waves of enemies with the Wavebreaker Pack. An outfit, a back bling, a pickaxe and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BulletBlueF_Bundle.DA_Featured_BulletBlueF_Bundle",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_575_athena_commando_f_bulletblue",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_375_bulletbluefemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_281_bulletbluefemale",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "3E09DA404CDD794651A367B9FCA4F462",
          "devName": "Skull Squad",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "48d86bc0a3634a33aa20817fdbfff917",
            "ios_skulgd1_C",
            "",
            "google_skulgd_1",
            "",
            "SKULGD0000000000",
            "46574e39-4e4c-3053-c050-373736313600",
            "c-seasonpack000014-SKULGD1",
            "sam_SKULGD",
            "9NWFLNSP7761",
            "SKULGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "1A5FED4A4478879006C9D59DD7075717",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_SkullSquad.DAv2_RMT_SkullSquad"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Skull Squad Pack",
          "shortDescription": "",
          "description": "Rise from the crypt and creep on the unsuspecting with this bone chilling Skeleteam! Rattle your bones with the Skull Squad pack!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_SkullSquadBundle.DA_Featured_SkullSquadBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_918_athena_commando_m_teriyakifishskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_490_teriyakifishskull1h",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_916_athena_commando_f_fuzzybearskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_637_fuzzybearskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_917_athena_commando_m_durrburgerskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_638_durrburgerskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_483_durrburgerskull1h",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_915_athena_commando_f_ravenquillskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_636_ravenquillskull",
              "quantity": 1
            },
            {
              "templateId": "AthenaGlider:glider_id_247_skull",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_292_bones",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "FFDBF34C4A8ECD2028986799ED38E28D",
          "devName": "Derby Dynamo Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3cfa7c7589534bad8423a733eace00d9",
            "ios_tpscp1_C",
            "",
            "google_tpscp1_1",
            "",
            "TPSCP10000000000",
            "53584e39-3842-304e-c042-5330574d6300",
            "c-seasonpack000012-TPSCP1",
            "sam_TPSCP1",
            "9NXSB8NBS0WM",
            "TPSCP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "7E2A404847B2A0063D9A04B6EF505682",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Derby Dynamo Challenge Pack",
          "shortDescription": "",
          "description": "Roll through the competition with the Derby Dynamo Challenge pack. Get the Derby Dynamo Outfit with Built-In-Emote, Quad Roller Back Bling, and complete Quick Challenges to earn up to 1,500 V-Bucks! ",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_TripleScoopBundle.DA_Featured_TripleScoopBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_833_athena_commando_f_triplescoop",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_587_triplescoop",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_triplescoop",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "06F2E11747D7F3A608EAF5B71A015303",
          "devName": "Fallen Love Ranger Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "bc104d187b194964b9ce0259bfefcd24",
            "ios_dlrcp01_C",
            "",
            "google_dlrcp01_1",
            "",
            "DLRCP10000000000",
            "be550ae0-49b9-40dd-bfa3-f682f8a7beb1",
            "c-seasonpack000002-DLRCP01",
            "sam_DLRCP1",
            "BXKX6FSNLX8W",
            "DLRCP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "84A31E1D4250DE16B9973A820E047247",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Fallen Love Ranger Challenge Pack",
          "shortDescription": "",
          "description": "Take on the challenges issued by the Fallen Love Ranger and earn up to 2,000 V-Bucks! ",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_343_Athena_Commando_M_CupidDark.DA_Featured_CID_343_Athena_Commando_M_CupidDark",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_343_athena_commando_m_cupiddark",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_208_cupiddarkmale",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_cupiddark",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "3861E37541DC53BC9A0C848DDB2F87FF",
          "devName": "Season 14 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "6242854fa2b4445b9751b42e7da0ca35",
            "ios_rmpa12_C",
            "",
            "google_rmpa12",
            "",
            "RMPA120000000000",
            "35335039-374b-3043-c04c-4b5a39311100",
            "c-starterpack00014-SPACK12",
            "sam_RMPA12",
            "9P35K7CLKZ91",
            "RMPA120000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "74724962400E3556CA2830852B0E01B1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_MaskedDancer.DAv2_RMT_MaskedDancer"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season14_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "The Street Serpent Pack",
          "shortDescription": "",
          "description": "Street fights and back alley brawls are what you will find with the Street Serpent pack. Includes an outfit, a back bling, a pickaxe and 600 V-Bucks.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MaskedDancerBundle.DA_Featured_MaskedDancerBundle",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 399
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 201
            },
            {
              "templateId": "AthenaCharacter:cid_837_athena_commando_m_maskeddancer",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_590_maskeddancer",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_443_maskeddancermale",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "9F5895BB46EEF32197FD30B2B8BD34B3",
          "devName": "Breakpoint's Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "755cfa1663154c35a2ddcc94c07165db",
            "ios_scncp1_C",
            "",
            "google_scncp1_1",
            "",
            "SCNCP10000000000",
            "f55fda8a-5d77-4229-ac6a-2d9531304f51",
            "c-seasonpack000006-SCNCP1",
            "sam_SCNCP1",
            "C4X98BQ0JS0F",
            "SCNCP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "74DD582C489507D076E5C5AAA08AFE96",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Breakpoint's Challenge Pack",
          "shortDescription": "",
          "description": "Start a digital revolution and take on Breakpoint's challenges to earn up to 1,000 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_429_Athena_Commando_F_NeonLines.DA_Featured_CID_429_Athena_Commando_F_NeonLines",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_429_athena_commando_f_neonlines",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_284_neonlines",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_neonlines",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "4EEFB69645A8CBB239BAD1A520AA4663",
          "devName": "Season 4 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3c8c7982474145e9ab639354fdbf628d",
            "ios_rmpa02_C",
            "30100",
            "google_rmpa02_1",
            "",
            "RMPA020000000000",
            "ffb9356c-c7bd-456a-8246-857da7705ff9",
            "c-starterpack00000-SPACK02",
            "sam_RMPA02",
            "BXL5DD34L1SG",
            "RMPA020000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "674DE41846A914BB78828393F6343442",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season4_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Season 4 Starter Kit",
          "shortDescription": "",
          "description": "An epic skin and 600 v-bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_139_Athena_Commando_M_Fighterpilot.DA_Featured_CID_139_Athena_Commando_M_FighterPilot",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_139_athena_commando_m_fighterpilot",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_056_fighterpilot",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "CC2826D8418DCC959280AD9E2D95532C",
          "devName": "Ikonik",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "sam_ikonic",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "39BA6D8A407FDDF15BCCEFAA82C9F286",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "LCheck",
              "value": "A,B"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 15,
          "title": "IKONIK",
          "shortDescription": "",
          "description": "Claim your iKONIK outfit and Scenario emote as part of the Samsung promotion.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_313_Athena_Commando_M_KpopFashion.DA_Featured_CID_313_Athena_Commando_M_KpopFashion",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_313_athena_commando_m_kpopfashion",
              "quantity": 1
            },
            {
              "templateId": "AthenaDance:eid_kpopdance03",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "0935379349B600E02DC20EA2FA25FC81",
          "devName": "Glacial Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3aedd91fbcd545e48f02129b1a5322fa",
            "ios_glclgd1_C",
            "",
            "google_glclgd_1",
            "",
            "GLCLGD0000000000",
            "97b1db16-1e8d-4735-9f40-522f8257839e",
            "c-seasonpack000009-GLCLGD1",
            "sam_GLCLGD",
            "9N4R7JBNSTXH",
            "GLCLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "C3898B0D4961AEAC6A8CEDA77F279F67",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Polar Legends Pack",
          "shortDescription": "",
          "description": "Put the competition on ice with the Polar legends pack.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_PolarLegendsBundle.DA_Featured_PolarLegendsBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_653_athena_commando_f_uglysweaterfrozen",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_656_athena_commando_m_teriyakifishfreezerburn",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_644_athena_commando_m_cattus",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_442_cattus",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_051_athena_commando_m_holidayelf",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_445_elf",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "5D363EEF4BABEE99840FC3B68CF3B1B2",
          "devName": "P-1000's Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "97a6db55099d44009f987f8671920754",
            "ios_peecp1_C",
            "",
            "google_peecp1_1",
            "",
            "PEECP10000000000",
            "1e581de8-367d-4313-8765-a07485d569c9",
            "c-seasonpack000008-PEECP1",
            "sam_PEECP1",
            "BRL14GZHNWX9",
            "PEECP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "0F2FFF0947C7F74783B86EB74CAEB13A",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "P-1000's Challenge Pack",
          "shortDescription": "",
          "description": "Get the P-1000 Outfit and Emote, and complete challenges to earn up to 1,500 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_PeelyMechBundle.DA_Featured_PeelyMechBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_534_athena_commando_m_peelymech",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_peelymech",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "1BEA82A04291B004750C6EA4D2D57965",
          "devName": "Dark Reflections",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "56ba62d3600d498cb2e01961dbf42927",
            "ios_cublgd1_C",
            "",
            "google_cublgd_1",
            "",
            "CUBLGD0000000000",
            "0da4c6bb-1bdd-4219-aba1-7c54803bb0a4",
            "c-seasonpack000007-CUBLGD1",
            "sam_CUBLGD",
            "BW3QH36C8C1N",
            "CUBLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "C87BB099425E3E46A1761EAFB6BC5E13",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_DarkReflections.DAv2_RMT_DarkReflections"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Dark Reflections",
          "shortDescription": "",
          "description": "Did the Cube ever corrupt, or was the darkness always there? Let your dark side take control while wearing the Dark Reflections pack.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CubePaintBundle.DA_Featured_CubePaintBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_513_athena_commando_m_cubepaintjonesy",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_512_athena_commando_f_cubepaintredknight",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_511_athena_commando_m_cubepaintwildcard",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_343_cuberedknight",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_344_cubewildcard",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_263_jonesycube",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "1BA9A3294555AD27E8B1438E8EB48E90",
          "devName": "Inferno's Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "b787584e9b134eafb01115908a442aeb",
            "ios_infcp1_C",
            "",
            "google_infcp1_1",
            "",
            "INFCP10000000000",
            "2badd1ea-8aa4-4109-9e2a-0b31d270934f",
            "c-seasonpack000004-INFCP1",
            "sam_INFCP1",
            "C1D4HCHGQXMT",
            "INFCP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "CE1CF4D1424F6781846CDB92DA6AE9A6",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Inferno's Challenge Pack",
          "shortDescription": "",
          "description": "Take on Inferno's challenges and get yourself up to 1,000 V-Bucks, a pickaxe and a wrap!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_370_Athena_Commando_M_EvilSuit.DA_Featured_CID_370_Athena_Commando_M_EvilSuit",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_370_athena_commando_m_evilsuit",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_redsuitguy",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "5D98B13A4A11DCD9FAF596A472030734",
          "devName": "Bassassin Challenge Pack",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "39fba8c88d0647b29309874e6f7d4de9",
            "ios_bascp1_C",
            "",
            "google_bascp1_1",
            "",
            "BASCP10000000000",
            "52445039-484e-304e-c030-394446524800",
            "c-seasonpack000010-BASCP1",
            "sam_BASCP1",
            "9PDRNHN09DFR",
            "BASCP10000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "37D5CA4D46127ACEFE2A2F815AA6385B",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Bassassin Challenge Pack",
          "shortDescription": "",
          "description": "As a Bassassin, it pays to be cold-blooded. Get the Contract Giller Outfit, Dorsal Destroyer Back Bling, and complete Daily Assignments to earn up to 1,000 V-Bucks! ",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_S12ChallengePack.DA_Featured_S12ChallengePack",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_722_athena_commando_m_teriyakifishassassin",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_496_teriyakifishassassin",
              "quantity": 1
            },
            {
              "templateId": "ChallengeBundleSchedule:bundleschedule_styles_agentfishstick",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "9DD831A348B80D3F40E28ABA21991A63",
          "devName": "Season 3 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "84aba7b08b734e7c90a0112173b1f7fb",
            "ios_s3rpma_C",
            "",
            "google_s3rpma_1",
            "",
            "S3RMPA0000000000",
            "5c174e59-97ff-454c-bdad-58de6c62b7c3",
            "c-starterpack00000-SPACK01",
            "",
            "C2L7CL2JKWPH",
            "S3RMPA0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "8A6F1D0C452CCC14F6D789A65732F9A5",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season3_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Season 3 Starter Kit",
          "shortDescription": "",
          "description": "A epic skin and 600 v-bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_090_Athena_Commando_M_Tactical.DA_Featured_CID_090_Athena_Commando_M_Tactical",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_090_athena_commando_m_tactical",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_030_tacticalrogue",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "9898F5AD4619B292EF19DB94180FF3F6",
          "devName": "Season 13 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "e71cc6639f0b427fa74a3947363759e9",
            "ios_rmpa11_C",
            "",
            "google_rmpa11",
            "",
            "RMPA110000000000",
            "52305039-5251-3057-c052-3939394a4c00",
            "c-starterpack00013-SPACK11",
            "sam_RMPA11",
            "9P0RQRWR999J",
            "RMPA110000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "625635694A7678AD1C8A3590E4F36FD7",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "0"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season13_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Yellowjacket Pack",
          "shortDescription": "",
          "description": "Like a stinger, her fashion sense is always on point. Includes an outfit, a back bling, a pickaxe and 600 V-Bucks",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_GraffitiAssassin_Bundle.DA_Featured_GraffitiAssassin_Bundle",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 399
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 201
            },
            {
              "templateId": "AthenaCharacter:cid_749_athena_commando_f_graffitiassassin",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_513_graffitiassassin",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_391_graffitiassassinfemale",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "8FC5B9C9439AB95F937929A7A5D8EC79",
          "devName": "Shadows Rising",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "04e522517a384a509d5bf31904846159",
            "ios_darlgd1_C",
            "",
            "google_darlgd_1",
            "",
            "DARLGD0000000000",
            "3fdee98e-5216-4f32-b0e6-d663545733c2",
            "c-seasonpack000005-DARLGD1",
            "sam_DARLGD",
            "C4B1TBQ2HHLF",
            "DARLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "D06A5BF54861C123B1CFF796BB08FE1D",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Shadows Rising",
          "shortDescription": "",
          "description": "Eclipse the competition this season while wearing the Shadows Rising pack!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_EclipseBundle.DA_Featured_EclipseBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_439_athena_commando_f_skullbriteeclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_437_athena_commando_f_aztececlipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_438_athena_commando_m_winterghouleclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_285_skullbriteeclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_287_aztecfemaleeclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_286_winterghoulmaleeclipse",
              "quantity": 1
            },
            {
              "templateId": "AthenaItemWrap:wrap_081_blackout2",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "A7E94C3848E1337B395D57B4FD87778D",
          "devName": "Season 6 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "8ca6dbe417c9470783e9e2293cc0f4a9",
            "ios_rmpa04_C",
            "",
            "google_rmpa04_1",
            "",
            "RMPA040000000000",
            "bef8995c-af47-4247-83d5-41ff1c551705",
            "c-starterpack00001-SPACK04",
            "sam_RMPA04",
            "C5790DQPT49Q",
            "RMPA040000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "817F6B1B40214571D32E0CA9F89B616F",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season6_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Summit Striker",
          "shortDescription": "",
          "description": "An epic skin and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_253_Athena_Commando_M_MilitaryFashion2.DA_Featured_CID_253_Athena_Commando_M_MilitaryFashion2",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_253_athena_commando_m_militaryfashion2",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_134_militaryfashion",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "DD483E7B4174D7AA0BD1C5BE18E5925F",
          "devName": "Season 9 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "77da03157c38443e991a72264ee5f23b",
            "ios_rmpa07_C",
            "",
            "google_rmpa07_1",
            "",
            "RMPA070000000000",
            "143e5fd4-4a06-40d4-9912-d90ebb6e5d3f",
            "c-starterpack00090-SPACK07",
            "sam_RMPA07",
            "C02H22WVRJCM",
            "RMPA070000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "999F3240427BA4D0974021AE6A511FF7",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season9_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Wilde Pack",
          "shortDescription": "",
          "description": "Fight with fury with the Wilde Pack. An outfit, a back bling and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_420_Athena_Commando_F_WhiteTiger.DA_Featured_CID_420_Athena_Commando_F_WhiteTiger",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_420_athena_commando_f_whitetiger",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_277_whitetiger",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "F9AAFAD941D63D86643E7BA20C92929A",
          "devName": "Goth Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "MtxCurrency",
              "currencySubType": "",
              "regularPrice": 2800,
              "dynamicRegularPrice": -1,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": true,
          "appStoreId": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "8C5CEF0147317EAD19C7F4B53F7CB722",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "SectionID",
              "value": "LimitedTime"
            },
            {
              "key": "NewDisplayAssetPath",
              "value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_CryptCrashers.DAv2_RMT_CryptCrashers"
            },
            {
              "key": "TileSize",
              "value": "DoubleWide"
            },
            {
              "key": "HideRarityBorder",
              "value": "true"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Crypt Crashers Pack",
          "shortDescription": "",
          "description": "Crash the season's spookiest haunts with the Crypt Crashers set.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_GothLegendsBundle.DA_Featured_GothLegendsBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_892_athena_commando_f_vampirecasual",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_622_vampirecasual",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_473_vampirecasualfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_893_athena_commando_f_blackwidowjacket",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_623_blackwidowjacket",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_474_blackwidowjacketfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_897_athena_commando_f_darkbombersummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_625_darkbombersummer",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_476_darkbombersummerfemale",
              "quantity": 1
            }
          ],
          "giftInfo": {
            "bIsEnabled": true,
            "forcedGiftBoxTemplateId": "",
            "purchaseRequirements": []
          }
        },
        {
          "offerId": "9622E4B94D377780F2410982F4DEADE9",
          "devName": "Black Monday",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "2eb58adefbba454ba1dab2d530536403",
            "ios_blamon_C",
            "",
            "",
            "",
            "BLAMON0000000000",
            "d40f973e-ebb3-447c-b1ce-4bbe12ddada5",
            "c-specialpack00000-BLAMON",
            "sam_BLAMON",
            "C3N9K4KWWMXM",
            "BLAMON0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "0253BB94416C809D99F0638C6F8A86A1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Batman Caped Crusader Pack",
          "shortDescription": "",
          "description": "Activate the bat-signal! The Caped Crusader has joined the fight.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BlackMondayBundle_6W4X3.DA_Featured_BlackMondayBundle_6W4X3",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_528_athena_commando_m_blackmondayhouston_7dgbt",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_529_athena_commando_m_blackmondaykansas_hwd90",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_362_blackmondayhouston_2i53g",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_360_blackmondaykansas_vcz9m",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_277_blackmondaymale_5tlsd",
              "quantity": 1
            },
            {
              "templateId": "AthenaGlider:glider_id_178_blackmondaymale_03m3e",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "164435F248762115C99DC2A3204A2D1F",
          "devName": "Season 5 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "494b1e73046543d6ba53c4574fd1b54c",
            "ios_rmpa03_C",
            "",
            "google_rmpa03_1",
            "",
            "RMPA030000000000",
            "6c1b4276-3f57-4946-ac49-f8f61c643a28",
            "c-starterpack00050-SPACK03",
            "sam_RMPA03",
            "C4JZSJXQRLGS",
            "RMPA030000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "4A71EECC4B2F2AB2E00C0FBB4FF77751",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season5_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Ace Pack",
          "shortDescription": "",
          "description": "An epic skin and 600 v-bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_195_Athena_Commando_F_Bling.DA_Featured_CID_195_Athena_Commando_F_Bling",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_195_athena_commando_f_bling",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_101_blingfemale",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "B678DA8341FB458C68C64E99176862D0",
          "devName": "Deep Freeze Bundle",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "bf5dfcaa2e354fc482142f6ee0fcd61f",
            "ios_dfbndl_C",
            "",
            "",
            "",
            "DFBNDL0000000000",
            "0a002971-0678-4021-b0f1-2f839756bee8",
            "c-retailbundle0000-DFBNDL1",
            "",
            "C5GF2JQKBSM1",
            "DFBNDL0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "821E9F494FE5FB80045FC69ED54BADD1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1000"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "DeepFreeze_Bundle"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 9,
          "title": "Deep Freeze Bundle",
          "shortDescription": "",
          "description": "Brrr! A very cool bundle!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_TBD_Athena_Commando_M_RaptorArcticCamo_Bundle.DA_Featured_CID_TBD_Athena_Commando_M_RaptorArcticCamo_Bundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_261_athena_commando_m_raptorarcticcamo",
              "quantity": 1
            },
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 1000
            },
            {
              "templateId": "AthenaGlider:glider_id_074_raptorarcticcamo",
              "quantity": 1
            },
            {
              "templateId": "AthenaPickaxe:pickaxe_id_097_raptorarcticcamo",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_142_raptorarcticcamo",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "CB64AFD84FCF2DE9E71E54A33B44DE0E",
          "devName": "Season 7 Starter Kit (RMT)",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "9c823c76c5e94c62b4d6a0616c56aebd",
            "ios_rmpa05_C",
            "",
            "google_rmpa05_1",
            "",
            "RMPA050000000000",
            "8a3c2009-3789-4afc-992f-49a3ff6e7d1d",
            "c-starterpack00000-SPACK05",
            "sam_RMPA05",
            "BVSNDK64H82B",
            "RMPA050000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "CF78A7AB41F59B39BE3FC7B3248A77DF",
              "minQuantity": 1
            }
          ],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "100"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "Season7_StarterKit"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Cobalt Pack",
          "shortDescription": "",
          "description": "An epic skin and 600 V-Bucks!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_327_Athena_Commando_M_BlueMystery.DA_Featured_CID_327_Athena_Commando_M_BlueMystery",
          "itemGrants": [
            {
              "templateId": "Currency:MtxPurchased",
              "quantity": 499
            },
            {
              "templateId": "Currency:MtxPurchaseBonus",
              "quantity": 101
            },
            {
              "templateId": "AthenaCharacter:cid_327_athena_commando_m_bluemystery",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_203_bluemystery",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "C5D695E24F0660D558AFFE816B8BB0E7",
          "devName": "Lava Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "8e9937437c044c7e9628ae088af4a295",
            "ios_lvalgd1_C",
            "",
            "google_lvalgd_1",
            "",
            "LVALGD0000000000",
            "11d3693d-dfa2-48ca-ad06-09c8637a29e0",
            "c-seasonpack000003-LVALGD1",
            "sam_LVALGD",
            "C50C00MLNZNK",
            "LVALGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "C35410BF476787A8F32A4091202CAC0F",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Lava Legends",
          "shortDescription": "",
          "description": "Bring the heat this season with the Lava Legends pack!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LavaLegendsBundle.DA_Featured_LavaLegendsBundle",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_379_athena_commando_m_battlehoundfire",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_380_athena_commando_f_darkviking_fire",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_243_battlehoundfire",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_244_darkvikingfire",
              "quantity": 1
            },
            {
              "templateId": "AthenaGlider:glider_id_134_darkvikingfire",
              "quantity": 1
            }
          ]
        },
        {
          "offerId": "917A7A14466225C5EBBC7DBE00A63D70",
          "devName": "Frozen Legends",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "493dd27f9efa42aa89a25c1400c02a29",
            "ios_frzlgd1_C",
            "",
            "google_frzlgd_1",
            "",
            "FRZLGD0000000000",
            "db344708-8609-4852-b73f-d101c0e9d64c",
            "c-seasonpack000001-FRZLGD1",
            "sam_FRZLGD",
            "BXGW0P1KRVPS",
            "FRZLGD0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "43672C454B192864F806AD81AFB6701D",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 10,
          "title": "Frozen Legends",
          "shortDescription": "",
          "description": "Stay frosty this season with the Frozen Legends pack!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Athena_FrozenLegends.DA_Featured_Athena_FrozenLegends",
          "itemGrants": [
            {
              "templateId": "AthenaCharacter:cid_293_athena_commando_m_ravenwinter",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_294_athena_commando_f_redknightwinter",
              "quantity": 1
            },
            {
              "templateId": "AthenaCharacter:cid_295_athena_commando_m_cupidwinter",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_166_ravenwintermale",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_167_redknightwinterfemale",
              "quantity": 1
            },
            {
              "templateId": "AthenaBackpack:bid_168_cupidwintermale",
              "quantity": 1
            }
          ]
        }
      ]
    },
    {
      "name": "STWRotationalEventStorefront",
      "catalogEntries": [
        {
          "devName": "[VIRTUAL]1 x Copper Deathwing for 600 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/f69b6892d3430d8f20089db051740d0b779d549f16ee927df80a26fcdfee7d84",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 600,
              "dynamicRegularPrice": 600,
              "finalPrice": 600,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 600
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "Schematic:sid_sniper_auto_vr_ore_t01",
              "quantity": 1,
              "attributes": {
                "Alteration": {
                  "LootTierGroup": "AlterationTG.Ranged.VR",
                  "Tier": 0
                }
              }
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Pure Drop of Rain for 50 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/83ac0269acedb2d5634a031f55b643b852272903e74d9fa1bb49256a0c06abef",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 8,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 50,
              "dynamicRegularPrice": 50,
              "finalPrice": 50,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 50
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_c_t01",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]200 x RE-PERK! for 100 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/9b91076467e61cf01a3c16e39a18331d2e23d754cdafc860aac0fdd7155615ae",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 10,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 100,
              "dynamicRegularPrice": 100,
              "finalPrice": 100,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 100
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_alteration_generic",
              "quantity": 200
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Lightning in a Bottle for 100 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/aacc97a394a9feaa106ad275caad4e4f22b987d8ceb42d64991024bf6d8a5404",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 4,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 100,
              "dynamicRegularPrice": 100,
              "finalPrice": 100,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 100
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_c_t02",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Eye of the Storm for 150 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/2fc40fec29a2772efc57e26e41d41b70fc3dd6ad15696e6f4cf23a848372daca",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 10,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 150,
              "dynamicRegularPrice": 150,
              "finalPrice": 150,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 150
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_c_t03",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]90 x Rare PERK-UP! for 200 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/4f1c82dc8fb66fef5a0046fb2163344069b65b6ba64e496939d2fc8e8f779157",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 5,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 200,
              "dynamicRegularPrice": 200,
              "finalPrice": 200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 200
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_alteration_upgrade_r",
              "quantity": 90
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Sentry Gunner Airheart for 2800 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/a5f18cb777e021884007bd2f9640a685a7e2a820f115d4bdeb495bcbf6e64994",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 2800,
              "dynamicRegularPrice": 2800,
              "finalPrice": 2800,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 2800
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "Hero:hid_constructor_019_sr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 20,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Rare Flux for 30 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/d9fe40e917bf98babee1c239153990efe3e1a568dd0e985c663dbba228eef03f",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 20,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 30,
              "dynamicRegularPrice": 30,
              "finalPrice": 30,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 30
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_evolverarity_r",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x workerbasic_vr_t01 for 250 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/fd2b5edc1839496be18a0cb1ef1bc74c07f391b4448de53d07bb63f695f1763b",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 2,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 250,
              "dynamicRegularPrice": 250,
              "finalPrice": 250,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 250
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "Worker:workerbasic_vr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x did_defendermelee_basic_sr_t01 for 1680 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/4f3cddd2080c2b44d76bbf55f85a9fe9c6651385282a7e212ae7e5cca443a9c9",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1680,
              "dynamicRegularPrice": 1680,
              "finalPrice": 1680,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1680
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "Defender:did_defendermelee_basic_sr_t01",
              "quantity": 1,
              "attributes": {
                "Alteration": {
                  "LootTierGroup": "AlterationTG.Defender.Melee.SR",
                  "Tier": 0
                }
              }
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]1 x Colonel Wildcat for 1000 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/56ac05a0ec7576b3aa725253a070b6a54f41bbb0eca2b9ebe8f294885630ad9c",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 1000,
              "dynamicRegularPrice": 1000,
              "finalPrice": 1000,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 1000
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "Hero:hid_commando_009_vr_t01",
              "quantity": 1
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Epic Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/bfd337ddb7380a663929ae0ad03f6cdbff5b562d1639c8c813cb8316b37f83bb",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 10,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 75,
              "dynamicRegularPrice": 75,
              "finalPrice": 75,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 75
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_evolverarity_vr",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]60 x Uncommon PERK-UP! for 125 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/d8c8f59ca26294a0192676567f75ee6c3631f96eea201fd14f8cac0c47acfb5c",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 5,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 125,
              "dynamicRegularPrice": 125,
              "finalPrice": 125,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 125
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_alteration_upgrade_uc",
              "quantity": 60
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Storm Shard for 200 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/cb671813542b9346ea26bfb3a53624fee2b73c4d2280c21b37c0bb0759c67574",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 1,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 200,
              "dynamicRegularPrice": 200,
              "finalPrice": 200,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 200
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_c_t04",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]5 x Legendary Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/9af32d7a9a16f864eae99d17542ec08763d118f3ce9c72ad05d5fc5f44586dc1",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 10,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 75,
              "dynamicRegularPrice": 75,
              "finalPrice": 75,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 75
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_evolverarity_sr",
              "quantity": 5
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        },
        {
          "devName": "[VIRTUAL]10 x Eye of the Storm for 150 GameItem : AccountResource:eventcurrency_scaling",
          "offerId": "v2:/8ab132beb750c221f51a79c6b29d10abf9cf7e6a82868226d98abea8add01ac5",
          "fulfillmentIds": [],
          "dailyLimit": -1,
          "weeklyLimit": 2,
          "monthlyLimit": -1,
          "categories": [],
          "prices": [
            {
              "currencyType": "GameItem",
              "currencySubType": "AccountResource:eventcurrency_scaling",
              "regularPrice": 150,
              "dynamicRegularPrice": 150,
              "finalPrice": 150,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 150
            }
          ],
          "meta": {},
          "matchFilter": "",
          "filterWeight": 0,
          "appStoreId": [],
          "requirements": [],
          "offerType": "StaticPrice",
          "refundable": false,
          "itemGrants": [
            {
              "templateId": "AccountResource:reagent_c_t03",
              "quantity": 10
            }
          ],
          "additionalGrants": [],
          "sortPriority": 0,
          "catalogGroupPriority": 0
        }
      ]
    },
    {
      "name": "CommunityVoteWinners",
      "catalogEntries": []
    },
    {
      "name": "BRSpecialDaily",
      "catalogEntries": []
    },
    {
      "name": "FoundersPack",
      "catalogEntries": [
        {
          "offerId": "295CC29541839D33661FA691B3DE95FB",
          "devName": "FoundersUpgrade_1_3",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "f5c0e8ab6c9a4530999041e89e9b6934",
            "",
            "",
            "",
            "",
            "FNDR130000000000",
            "f3fa9d49-0efa-4189-9ed5-a72b8af8caa4",
            "",
            "",
            "BQQGTHMP8KZV",
            "FNDR130000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_3",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_2",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 4,
          "title": "Super Deluxe",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_3.DA_FoundersPack_1_3",
          "itemGrants": []
        },
        {
          "offerId": "EBF511584B4405C031087C99148BB2D8",
          "devName": "FoundersUpgrade_1_2",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "9aa9f44cd8c24652953a1b204755b193",
            "",
            "",
            "",
            "",
            "FNDR120000000000",
            "c4f3c99f-b7e0-4e21-ab01-131d4b20d720",
            "",
            "",
            "C19S7QTMVWTQ",
            "FNDR120000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_2",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Deluxe Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_2.DA_FoundersPack_1_2",
          "itemGrants": []
        },
        {
          "offerId": "48DC9478462A5DCD3D93EBB81D4488AB",
          "devName": "FoundersPack_1",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "e2f25dae43604a839dd6f2c21b675d5e",
            "",
            "",
            "",
            "",
            "FNDR010000000001",
            "b0e02cfe-8d1e-4aa0-a02b-e64fa7263617",
            "",
            "",
            "BXWNX8ST04JS",
            "FNDR010000000001"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Standard Founder's Pack",
          "shortDescription": "",
          "description": "Purchase the Standard Founder's Pack",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1.DA_FoundersPack_1",
          "itemGrants": []
        },
        {
          "offerId": "F46E931F4851F1CFB0E50C805957205A",
          "devName": "FoundersUpgrade_2_4",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "d2da86026c71429a9cf5e76dfd89a1d3",
            "",
            "",
            "",
            "",
            "FNDR240000000000",
            "6ba13aad-2515-4e51-b8d8-72540863a8bc",
            "",
            "",
            "C4DP169TMQK7",
            "FNDR240000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_4",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_2",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_3",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 4,
          "title": "Limited Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_4.DA_FoundersPack_2_4",
          "itemGrants": []
        },
        {
          "offerId": "AD38CA234B2FA67C83BFD888EA1D2E8D",
          "devName": "FoundersUpgrade_4_5",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "e852b1940299435884365cec7dc3a608",
            "",
            "",
            "",
            "",
            "FNDR450000000000",
            "b4e5f231-418f-4937-b3e5-f0e014d42ffe",
            "",
            "",
            "BZ0D9FZH5WH3",
            "FNDR450000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_5",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_4",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Ultimate Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4_5.DA_FoundersPack_4_5",
          "itemGrants": []
        },
        {
          "offerId": "141F04624351F025DC67E1929B282B50",
          "devName": "FoundersUpgrade_2_3",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "35759d71512b47e5b2825669f1d9166a",
            "",
            "",
            "",
            "",
            "FNDR230000000000",
            "46c22707-e058-45dd-8d83-fc45b82d65cd",
            "",
            "",
            "C50KV04716HT",
            "FNDR230000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_3",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_2",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Super Deluxe Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_3.DA_FoundersPack_2_3",
          "itemGrants": []
        },
        {
          "offerId": "E86A50A14891B241DBA126BE8FCD0C42",
          "devName": "FoundersPack_3",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "c8319a037f9840e8b7549de480efb9c7",
            "",
            "",
            "",
            "",
            "FNDR030000000001",
            "8b2e873d-4dba-4367-9bb9-0c2b0951918a",
            "",
            "",
            "BWWG58N9HFKF",
            "FNDR030000000001"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 3,
          "title": "Super Deluxe Founder's Pack",
          "shortDescription": "",
          "description": "Purchase the Super Deluxe Founder's Pack",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3.DA_FoundersPack_3",
          "itemGrants": []
        },
        {
          "offerId": "906D1C4D4F79D2ECE314E8AA70CDAFE4",
          "devName": "FoundersUpgrade_3_4",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "f05c43f7c1d24f5fbb1a6fa5a5a60edb",
            "",
            "",
            "",
            "",
            "FNDR340000000000",
            "489759a7-8a97-49bf-90e1-e8a338fdfaf5",
            "",
            "",
            "BS949M2S2S75",
            "FNDR340000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_4",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_3",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Limited Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3_4.DA_FoundersPack_3_4",
          "itemGrants": []
        },
        {
          "offerId": "2A26520F414EC95C944F80A596A284B0",
          "devName": "FoundersUpgrade_1_4",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "57f0419c4e4a4ea4858b2f37a98d5315",
            "",
            "",
            "",
            "",
            "FNDR140000000000",
            "65691cca-42bb-4528-9065-3926c0057cac",
            "",
            "",
            "C3K7QVDRT2XV",
            "FNDR140000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_4",
              "minQuantity": 1
            },
            {
              "requirementType": "RequireItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_2",
              "minQuantity": 1
            },
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_3",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 3,
          "title": "Limited Upgrade",
          "shortDescription": "",
          "description": "",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_4.DA_FoundersPack_1_4",
          "itemGrants": []
        },
        {
          "offerId": "8F9E54194FBF331A9CCC4BB6FDFB8FC2",
          "devName": "FoundersPack_2",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "41134f4ff35a45a4923604cbb15e487d",
            "",
            "",
            "",
            "",
            "FNDR020000000001",
            "369267a1-3e63-4b6e-82be-286d741d7370",
            "",
            "",
            "BRD01SWKX9WS",
            "FNDR020000000001"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 4,
          "title": "Deluxe Founder's Pack",
          "shortDescription": "",
          "description": "Purchase the Deluxe Founder's Pack",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2.DA_FoundersPack_2",
          "itemGrants": []
        },
        {
          "offerId": "E2994D164ACA01D4EB9ED585EB1CE5BD",
          "devName": "StW_MTL_ST1",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "ae230025ab0f4b578d605569746233e5",
            "",
            "",
            "",
            "",
            "STWBEA0000000000",
            "514e5039-5147-3046-c04e-4a3452385c00",
            "",
            "",
            "9PNQGQFNJ4R8",
            "STWBEA0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "67E05F60412ADCCBE49B50918CFEABDD",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Metal Team Leader Pack",
          "shortDescription": "",
          "description": "Cold steel, warm heart!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FuzzyBearTeddyBundle.DA_Featured_FuzzyBearTeddyBundle",
          "itemGrants": []
        },
        {
          "offerId": "BA4237DE44B7C83B55BEC8A8D9C2241C",
          "devName": "StW_JNK_ST2",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "6d28ba7c952b412d82120efcdcc9c233",
            "",
            "",
            "",
            "",
            "STWSAM0000000000",
            "34514e39-445a-3056-c042-385a584a7600",
            "",
            "",
            "9NQ4ZDVB8ZXJ",
            "STWSAM0000000000"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnFulfillment",
              "requiredId": "18CCCDF24D751CF4E7B834A08B6D9CE9",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 5,
          "title": "Samurai Scrapper Pack",
          "shortDescription": "",
          "description": "One person's trash is another person's armor!",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_JunkSamuraiBundle.DA_Featured_JunkSamuraiBundle",
          "itemGrants": []
        },
        {
          "offerId": "17B3F0D54574684E0B9185A10910E324",
          "devName": "FoundersPack_4",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "85125898f3914946a9443bcce4667660",
            "",
            "",
            "",
            "",
            "FNDR040000000001",
            "e3c292c9-9337-41e8-ba90-e96b85002f68",
            "",
            "",
            "BTC5H6VZBHPF",
            "FNDR040000000001"
          ],
          "requirements": [
            {
              "requirementType": "DenyOnItemOwnership",
              "requiredId": "Token:founderspack_1",
              "minQuantity": 1
            }
          ],
          "metaInfo": [],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 2,
          "title": "Limited Founder's Pack",
          "shortDescription": "",
          "description": "Purchase the Limited Founder's Pack",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4.DA_FoundersPack_4",
          "itemGrants": []
        }
      ]
    },
    {
      "name": "ReloadVBucks",
      "catalogEntries": [
        {
          "offerId": "A1F8DBBD45024AA14308D3B84AF77DD2",
          "devName": "2,000 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "775603a570324885a56762ea81bff788",
            "ios_vbucks_2000inc",
            "",
            "google_vbucks_2000inc",
            "",
            "INC20K0000000000",
            "4b424e39-5756-3046-c043-5846444a7600",
            "c-virtualcurrency1-MTX2000",
            "sam_vbucks_2000inc",
            "9NBKVWFCXFDJ",
            "INC20K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "2000"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack2000"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "2,000 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 2,000 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "60C32F804E08CF9FE0E1CE98994A54E4",
          "devName": "1,100 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "ea8bba06cfee427ea0d0b65953438f92",
            "ios_vbucks_1100inc",
            "",
            "google_vbucks_1100inc",
            "",
            "INC11K0000000000",
            "4b385039-5234-304a-c035-585633392b00",
            "c-virtualcurrency1-MTX1100",
            "sam_vbucks_1100inc",
            "9P8K4RJ5XV39",
            "INC11K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1100"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1100"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,100 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,100 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "F6CC90AB4F1220DA2F86BA9BFDDE9D69",
          "devName": "500 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "5f464fcc96764708a54882abc0775e3d",
            "ios_vbucks_500inc",
            "",
            "google_vbucks_500inc",
            "",
            "INC5000000000000",
            "34445039-3347-3054-c034-4c5036502500",
            "c-virtualcurrency1-MTX500",
            "sam_vbucks_500inc",
            "9PD4G3T4LP6P",
            "INC5000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "500"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack500"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "500 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 500 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "C2B44D8543650A94A006CEB9C2577ED2",
          "devName": "700 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "abb65726a6934e8abc2a57e30add0926",
            "ios_vbucks_700inc",
            "",
            "google_vbucks_700inc",
            "",
            "INC7000000000000",
            "51434e39-4c30-305a-c053-584e424b7700",
            "c-virtualcurrency1-MTX700",
            "sam_vbucks_700inc",
            "9NCQ0LZSXNBK",
            "INC7000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "700"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack700"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "700 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 700 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "5811FAA3413256A4F822C596C247115E",
          "devName": "300 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "16178da6de794c8d86300a607ec1bda6",
            "ios_vbucks_300inc",
            "",
            "google_vbucks_300inc",
            "",
            "INC3000000000000",
            "37564d39-304e-3044-c037-30374c35f400",
            "c-virtualcurrency1-MTX300",
            "sam_vbucks_300inc",
            "9MV7N0D707L5",
            "INC3000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "300"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack300"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "300 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 300 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "DA83E2B84282346165F82ABFDC09E540",
          "devName": "1,200 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "1c8a96b741484198b6a773b4d11fd048",
            "ios_vbucks_1200inc",
            "",
            "google_vbucks_1200inc",
            "",
            "INC12K0000000000",
            "46385039-4644-3057-c054-50394d4a5c00",
            "c-virtualcurrency1-MTX1200",
            "sam_vbucks_1200inc",
            "9P8FDFWTP9MJ",
            "INC12K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1200"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1200"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,200 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,200 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "4ADA17D741D7E88A8F106EB00003B018",
          "devName": "1,800 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "9f85a5d097764566aa0316f86994dd91",
            "ios_vbucks_1800inc",
            "",
            "google_vbucks_1800inc",
            "",
            "INC18K0000000000",
            "34305039-3236-304c-c037-304b5151f500",
            "c-virtualcurrency1-MTX1800",
            "sam_vbucks_1800inc",
            "9P0462L70KQQ",
            "INC18K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1800"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1800"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,800 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,800 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "E2BD4F70498AF13ADAA071B04F885292",
          "devName": "100 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "48a61f0d493942909a529369a66f803b",
            "ios_vbucks_100inc",
            "",
            "google_vbucks_100inc",
            "",
            "INC1000000000000",
            "46524e39-3150-3038-c056-485232464000",
            "c-virtualcurrency1-MTX100",
            "sam_vbucks_100inc",
            "9NRFP18VHR2F",
            "INC1000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "100"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack100"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "100 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 100 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "5287BBD9415ADC1A66471C8D7023DF48",
          "devName": "1,400 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "9c586c23738541ba96fc2c458b74558f",
            "ios_vbucks_1400inc",
            "",
            "google_vbucks_1400inc",
            "",
            "INC14K0000000000",
            "57355039-3948-3035-c053-424331512500",
            "c-virtualcurrency1-MTX1400",
            "sam_vbucks_1400inc",
            "9P5WH95SBC1Q",
            "INC14K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1400"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1400"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,400 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,400 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "F53F72C3450DE23117606FBF84A00545",
          "devName": "900 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "0d346f08b60b45f1a64cb5c62c8c0a89",
            "ios_vbucks_900inc",
            "",
            "google_vbucks_900inc",
            "",
            "INC9000000000000",
            "4c364e39-504e-3031-c030-364250330300",
            "c-virtualcurrency1-MTX900",
            "sam_vbucks_900inc",
            "9N6LNP106BP3",
            "INC9000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "900"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack900"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "900 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 900 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "E31407514D62C63C7C5D8DA7522CA0BE",
          "devName": "400 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "a40d8f5f511045aba8be343b87849abd",
            "ios_vbucks_400inc",
            "",
            "google_vbucks_400inc",
            "",
            "INC4000000000000",
            "4a394e39-4236-3042-c048-58524b343500",
            "c-virtualcurrency1-MTX400",
            "sam_vbucks_400inc",
            "9N9J6BBHXRK4",
            "INC4000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "400"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack400"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "400 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 400 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "1F61C9A344BEC0ED8DA2FDB46E4EB6C6",
          "devName": "1,500 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "397d63f6f73f4bb1b6628716a08d0c4b",
            "ios_vbucks_1500inc",
            "",
            "google_vbucks_1500inc",
            "",
            "INC15K0000000000",
            "504c5039-3333-3048-c035-475344331900",
            "c-virtualcurrency1-MTX1500",
            "sam_vbucks_1500inc",
            "9PLP33H5GSD3",
            "INC15K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1500"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1500"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,500 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,500 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "1EA7A01E4D6B0B4CA653F7A8B4EFA90A",
          "devName": "800 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "5cd3a2123244476499d41ff480ed9340",
            "ios_vbucks_800inc",
            "",
            "google_vbucks_800inc",
            "",
            "INC8000000000000",
            "46445039-5237-3054-c057-33484e364600",
            "c-virtualcurrency1-MTX800",
            "sam_vbucks_800inc",
            "9PDF7RTW3HN6",
            "INC8000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "800"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack800"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "800 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 800 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "1B69A6444B6E54875B7FB6AA719C56E2",
          "devName": "1,300 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "c3610a6dc47c40cf980cdbe5722de4a4",
            "ios_vbucks_1300inc",
            "",
            "google_vbucks_1300inc",
            "",
            "INC13K0000000000",
            "4d315039-4239-3047-c046-304653471f00",
            "c-virtualcurrency1-MTX1300",
            "sam_vbucks_1300inc",
            "9P1M9BGF0FSG",
            "INC13K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1300"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1300"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,300 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,300 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "BEF155F64EF87BB26463E0A96725437D",
          "devName": "1,700 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "233ab6e08b694608a2f82466d94d57d0",
            "ios_vbucks_1700inc",
            "",
            "google_vbucks_1700inc",
            "",
            "INC17K0000000000",
            "35315039-4d51-3057-c04b-324b51434000",
            "c-virtualcurrency1-MTX1700",
            "sam_vbucks_1700inc",
            "9P15QMWK2KQC",
            "INC17K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1700"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1700"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,700 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,700 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "5CA2BA9D495724A807FAD8AA7A184868",
          "devName": "1,900 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3f1e339fdaa24894a99c1db9f6815db4",
            "ios_vbucks_1900inc",
            "",
            "google_vbucks_1900inc",
            "",
            "INC19K0000000000",
            "4c4c4e39-434e-3047-c04b-573242576400",
            "c-virtualcurrency1-MTX1900",
            "sam_vbucks_1900inc",
            "9NLLNCGKW2BW",
            "INC19K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1900"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1900"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,900 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,900 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "ADB9149B454ACFC637D6F8A4B40C562E",
          "devName": "200 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "eca7c7c9c7bc4de69f24d8507cc34ff8",
            "ios_vbucks_200inc",
            "",
            "google_vbucks_200inc",
            "",
            "INC2000000000000",
            "31445039-3647-3038-c038-574430560c00",
            "c-virtualcurrency1-MTX200",
            "sam_vbucks_200inc",
            "9PD1G688WD0V",
            "INC2000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "200"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack200"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "200 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 200 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "9B60C7774A208463F7292DB697FF5713",
          "devName": "1,600 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "b207de06940944469b55633f1a8756e2",
            "ios_vbucks_1600inc",
            "",
            "google_vbucks_1600inc",
            "",
            "INC16K0000000000",
            "44465039-5244-304b-c04d-303743341f00",
            "c-virtualcurrency1-MTX1600",
            "sam_vbucks_1600inc",
            "9PFDDRKM07C4",
            "INC16K0000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "1600"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack1600"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "1,600 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 1,600 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        },
        {
          "offerId": "4E51C4C4412F2F12D78A74ABC8AB9063",
          "devName": "600 V-Bucks",
          "offerType": "StaticPrice",
          "prices": [
            {
              "currencyType": "RealMoney",
              "currencySubType": "",
              "regularPrice": 0,
              "dynamicRegularPrice": -1,
              "finalPrice": 0,
              "saleExpiration": "9999-12-31T23:59:59.999Z",
              "basePrice": 0
            }
          ],
          "categories": [],
          "dailyLimit": -1,
          "weeklyLimit": -1,
          "monthlyLimit": -1,
          "refundable": false,
          "appStoreId": [
            "",
            "3f62ba5e95f34bf287c06cfd70a8626d",
            "ios_vbucks_600inc",
            "",
            "google_vbucks_600inc",
            "",
            "INC6000000000000",
            "38504e39-4a44-3043-c051-4b5151476500",
            "c-virtualcurrency1-MTX600",
            "sam_vbucks_600inc",
            "9NP8DJCQKQQG",
            "INC6000000000000"
          ],
          "requirements": [],
          "metaInfo": [
            {
              "key": "MtxQuantity",
              "value": "600"
            },
            {
              "key": "MtxBonus",
              "value": "1"
            },
            {
              "key": "IconSize",
              "value": "XSmall"
            },
            {
              "Key": "CurrencyAnalyticsName",
              "Value": "MtxPack600"
            }
          ],
          "catalogGroup": "",
          "catalogGroupPriority": 0,
          "sortPriority": 6,
          "title": "600 V-Bucks",
          "shortDescription": "",
          "description": "Complete your purchase by grabbing 600 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
          "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
          "itemGrants": []
        }
      ]
    }
  ]
});
	});
}
