const express = require("express");
const cache = require("../cache.js");
const app = express.Router();

app.get("/content/api/pages/fortnite-game", (req, res) => {
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
                    "body": "Made by kemo (@xkem0x).\r\nDiscord: https://discord.gg/DJ6VUmD",
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
            "emergencynotices": [{
                    "hidden": false,
                    "_type": "CommonUI Emergency Notice Base",
                    "title": "Neonite V2",
                    "body": "Made by kemo (@xkem0x).\r\nDiscord: https://discord.gg/DJ6VUmD",
                }]
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
                    "body": "Made by Kemo (@xkem0x). If you have any bugs, you can join our Discord by clicking the button below.",
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
        "dynamicbackgrounds": {
            "jcr:isCheckedOut": true,
            "backgrounds": {
                "backgrounds": [{
                    "backgroundimage": `http://127.0.0.1:${port}/NeoniteLobby.png`,
                    "stage": "worldcup",
                    "_type": "DynamicBackground",
                     "key": "lobby"
                }],
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
                "sections": cache.getFortniteGameShopSections()
            },
            "_noIndex": false,
            "jcr:baseVersion": "a7ca237317f1e77453e266-613d-435e-9dd1-f549c0255030",
            "_activeDate": "2021-06-21T23:00:00.000Z",
            "lastModified": "2021-06-21T16:08:13.601Z",
            "_locale": "en-US"
        },

        "_suggestedPrefetch": [
            `http://127.0.0.1:${port}/NeoniteWallpaper1920x1080.png`,
            `http://127.0.0.1:${port}/Neonite1024.png`
        ]
    });
});

module.exports = app;