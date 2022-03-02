const { default: axios } = require("axios");
const { application } = require('express')


/**
 * 
 * @param {application} app 
 * @param {String} port 
 */
module.exports = (app, port) => {
    //var lastest = await axios.get("https://api.nitestats.com/v1/epic/builds/fltoken")
    app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
        var season = "9";
        try {
            season = req.headers["user-agent"].split('-')[1].split('.')[0]
        } catch { }
        finally {
            if (season == "10") {
                season = "x";
            }
        }

        const content = (await axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game').catch(() => {}))?.data;

        res.json({
            "jcr:isCheckedOut": true,
            "_title": "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7b00bc82e-d9a2-4f0d-b951-704d295cd1aa",
            "_activeDate": "2017-07-24T22:24:02.300Z",
            "lastModified": "2020-11-01T17:36:19.024Z",
            "_locale": "en-US",
            "emergencynotice": {
                "news": {
                    "platform_messages": [],
                    "_type": "Battle Royale News",
                    "messages": [{
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "subgame": "br",
                        "body": "Made by kemo (@xkem0x) and Beat (@TheBeatYT_evil).\r\nDiscord: https://discord.gg/DJ6VUmD",
                        "title": "Neonite V2",
                        "spotlight": false
                    },
                    ],
                },
                "jcr:isCheckedOut": true,
                "_title": "emergencynotice",
                "_noIndex": false,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2020-10-30T04:50:59.198Z",
                "_locale": "en-US"
            },
            "emergencynoticev2": {
                "jcr:isCheckedOut": true,
                "_title": "emergencynoticev2",
                "_noIndex": false,
                "emergencynotices": {
                    "_type": "Emergency Notices",
                    "emergencynotices": [
                        {
                            "hidden": false,
                            "_type": "CommonUI Emergency Notice Base",
                            "title": "Neonite V2",
                            "body": "Made by kemo (@xkem0x) and Beat (@TheBeatYT_evil)..\r\nDiscord: https://discord.gg/DJ6VUmD",
                        }
                    ]
                },
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2021-03-17T15:07:27.924Z",
                "_locale": "en-US"
            },
            "battleroyalenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": `http://127.0.0.1:${port}/NeoniteWallpaper1920x1080.png`,
                        "tileImage": `http://127.0.0.1:${port}/Neonite1024.png`,
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Neonite V2",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Neonite",
                        "body": "Made by Kemo (@xkem0x) and maintained by Beat (@TheBeatYT_evil). If you have any bugs, you can join our Discord by clicking the button below.",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 0,
                        "id": "NeoniteNewsBR",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://discord.gg/DJ6VUmD",
                        "websiteButtonText": "Join our discord"
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2021-02-10T23:57:48.837Z",
                "_locale": "en-US"
            },
            "shopCarousel": {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "tileImage": `http://127.0.0.1:${port}/NeoniteWallpaper1920x1080.png`,
                        "fullTitle": "Neonite",
                        "hidden": false,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": null,
                        "title": "Neonite"
                    }]
                },
                "_title": "shop-carousel",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e765be23f9-d0fd-4067-ae00-ef29af2376cc",
                "_activeDate": "2020-09-25T12:00:00.000Z",
                "lastModified": "2020-12-05T23:52:44.269Z",
                "_locale": "en-US"
            },
            "dynamicbackgrounds": content.dynamicbackgrounds || {
                "jcr:isCheckedOut": true,
                "backgrounds": {
                    "backgrounds": [
                        {
                            "backgroundimage": `http://127.0.0.1:${port}/NeoniteLobby.png`,
                            "stage": "defaultnotris",
                            "_type": "DynamicBackground",
                            "key": "lobby"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                "_title": "dynamicbackgrounds",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e70712af90-59fe-4576-8f32-f80bf513c946",
                "_activeDate": "2020-07-06T06:00:00.000Z",
                "lastModified": "2021-06-22T13:53:48.402Z",
                "_locale": "en-US"
            },
            "shopSections": {
                "jcr:isCheckedOut": true,
                "_title": "shop-sections",
                "sectionList": {
                    "_type": "ShopSectionList",
                    "sections": [
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "Marvel",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel4",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel5",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel6",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel7",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": false,
                            "sectionId": "GuildHenLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Guild Hen's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 74,
                            "bHidden": false,
                            "sectionId": "FootballIcon",
                            "bShowTimer": true,
                            "sectionDisplayName": "Football Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 70,
                            "bHidden": false,
                            "sectionId": "Featured",
                            "bShowTimer": true,
                            "sectionDisplayName": "Featured",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "Featured2",
                            "bShowTimer": false,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 54,
                            "bHidden": false,
                            "sectionId": "Featured3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "PizoLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Pizo's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "BenjyfishyLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Benjyfishy's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "NickEh30Locker",
                            "bShowTimer": true,
                            "sectionDisplayName": "NickEh30's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 60,
                            "bHidden": false,
                            "sectionId": "Daily",
                            "bShowTimer": true,
                            "sectionDisplayName": "Daily",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 59,
                            "bHidden": false,
                            "sectionId": "Daily2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": false,
                            "sectionId": "CustomizeHero",
                            "bShowTimer": true,
                            "sectionDisplayName": "Customize Your Hero!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "HeroGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Hero Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": false,
                            "sectionId": "ShadowStrike",
                            "bShowTimer": true,
                            "sectionDisplayName": "Shadow Strike",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "FootballIconB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Football Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "MarvelB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel3B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel4B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel5B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel6B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel7B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": false,
                            "sectionId": "StartParty",
                            "bShowTimer": true,
                            "sectionDisplayName": "Start the Party!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "StartParty2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Start the Party!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "GuildHenLockerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Guild Hen's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 54,
                            "bHidden": false,
                            "sectionId": "Cowboys",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cowboys",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 55,
                            "bHidden": false,
                            "sectionId": "Farm",
                            "bShowTimer": true,
                            "sectionDisplayName": "From the Farm",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "BannerBrigade",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Brigade",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "BannerBrigade2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Brigade",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 80,
                            "bHidden": false,
                            "sectionId": "MelloB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marshmello",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "MelloC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marshmello",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "MajorLazerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Major Lazer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "TurnMusicUpB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Turn The Music Up",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "TurnMusicUp2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Turn The Music Up",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": false,
                            "sectionId": "VaultShop",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "VaultShop2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "VaultShop3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": false,
                            "sectionId": "SpecialB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Special Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": false,
                            "sectionId": "Special",
                            "bShowTimer": true,
                            "sectionDisplayName": "Special Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 49,
                            "bHidden": false,
                            "sectionId": "Special2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 48,
                            "bHidden": false,
                            "sectionId": "Special3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 47,
                            "bHidden": false,
                            "sectionId": "Special4",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 46,
                            "bHidden": false,
                            "sectionId": "Special5",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 45,
                            "bHidden": false,
                            "sectionId": "Special6",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "DC",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "DCB",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC3B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC4B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC5B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC6B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "DC7B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "PartyGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Party Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "BannerGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "CosmicSummer",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer4",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer5",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer6",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer7",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "CosmicSummer8",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "MarvelC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel2C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel3C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel4C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel5C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel6C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": false,
                            "sectionId": "Marvel7C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Bundles",
                            "bShowTimer": true,
                            "sectionDisplayName": "Bundles",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Characters",
                            "bShowTimer": true,
                            "sectionDisplayName": "Outfits",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Backpacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Back Blings",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Pickaxes",
                            "bShowTimer": true,
                            "sectionDisplayName": "Harvesting Tools",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Gliders",
                            "bShowTimer": true,
                            "sectionDisplayName": "Gliders",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "MusicPacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Music Packs",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Wraps",
                            "bShowTimer": true,
                            "sectionDisplayName": "Wraps",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 80,
                            "bHidden": false,
                            "sectionId": "LimitedTime",
                            "bShowTimer": false,
                            "sectionDisplayName": "Limited Time",
                            "bShowIneligibleOffers": false
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": false,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": false,
                            "sectionId": "Battlepass",
                            "bShowTimer": false,
                            "sectionDisplayName": "Battle Pass",
                            "bShowIneligibleOffers": false
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": false,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Subscription",
                            "bShowTimer": false,
                            "sectionDisplayName": "Fortnite Crew",
                            "bShowIneligibleOffers": true
                        }
                    ]
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e77453e266-613d-435e-9dd1-f549c0255030",
                "_activeDate": "2021-06-21T23:00:00.000Z",
                "lastModified": "2021-06-21T16:08:13.601Z",
                "_locale": "en-US"
            },
            playlistinformation: content.playlistinformation,
            "_suggestedPrefetch": [
                `http://127.0.0.1:${port}/NeoniteWallpaper1920x1080.png`,
                `http://127.0.0.1:${port}/Neonite1024.png`
            ]
        })
    })
    //implementation needed in the future, response example: https://api.nitestats.com/v1/epic/prm/motd
    /*app.post("/api/v1/fortnite-br/surfaces/motd/target", (req, res) => {
        res.status(404).end();
    })*/
}
