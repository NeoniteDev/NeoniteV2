const axios = require("axios")
var dynamicbg
axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game').then(r => {
    dynamicbg = r.data.dynamicbackgrounds.backgrounds.backgrounds
}).catch(r => {
    dynamicbg = [{stage:'worldcup',_type:'DynamicBackground',key:'lobby'},{stage:'default',_type:'DynamicBackground',key:'vault'}]
})

module.exports = (app) => {
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
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2020-10-30T04:50:59.198Z",
                "_locale": "en-US"
            },
            "playlistinformation": {
                "is_tile_hidden": true,
                "frontend_matchmaking_header_style": "None",
                "conversion_config": {
                    "containerName": "playlist_info",
                    "_type": "Conversion Config",
                    "enableReferences": true,
                    "contentName": "playlists"
                },
                "jcr:isCheckedOut": true,
                "show_ad_violator": false,
                "_title": "playlistinformation",
                "frontend_matchmaking_header_text_description": "NOW AVAILABLE",
                "frontend_matchmaking_header_text": "NEW LTM!",
                "playlist_info": {
                    "_type": "Playlist Information",
                    "playlists": [{
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/partyroyaleupdated/EN_12PR_In-Game_Launch_ModeTile-1024x512-13cf734f07363d61f6fec3a2f5486a3550035c32.jpg",
                        "playlist_name": "Playlist_Papaya",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "description": "Welcome to Party Royale, a new experimental and evolving space. Leave your weapons and mats behind and hang out with friends, play games and enjoy live entertainment. Catch live shows. Race around obstacle courses by land or sea. Go fishing with friends, perfect your skydive, and get up close and connect with some of your favorite artists. Hop on the party bus and enjoy the ride."
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-marvelknockout-mystique-ltm-tile-1024x512-969813783.jpg",
                        "playlist_name": "Playlist_Cobalt_HT_Duos",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-marvelknockout-wolverine-ltm-tile-1024x512-969818067.jpg",
                        "playlist_name": "Playlist_Cobalt_HT_Trios",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/marvel-standoff-1024x512-010756809.jpg",
                        "playlist_name": "Playlist_hightower",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/marvel-standoff-1024x512-010756809.jpg",
                        "playlist_name": "Playlist_hightower_12",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-marveltakeoverltm-playlisttile-1024x512-1024x512-081336658.jpg",
                        "playlist_name": "Playlist_HighTower_Hydro",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-marveltakeoverltm-playlisttile-1024x512-1024x512-081332895.jpg",
                        "playlist_name": "Playlist_HighTower_Hydro_12v12",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": "Marvel Takeover"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-rallyroyaleltm-playlisttile-1024x512-268454418.jpg",
                        "playlist_name": "Playlist_Argon_HighTower_Duos_16",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-rallyroyaleltm-playlisttile-1024x512-268454418.jpg",
                        "playlist_name": "Playlist_Argon_HighTower_Solo_16",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_subname": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-tiltedtaxi-motd-1024x512-1024x512-890727217.jpg",
                        "playlist_name": "Playlist_Nitrogen12_Trios",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-tiltedtaxi-motd-1024x512-1024x512-890727217.jpg",
                        "playlist_name": "Playlist_Nitrogen12_Duos",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-knockoutairraid-motd-1024x512-1024x512-674280089.jpg",
                        "playlist_name": "Playlist_Antares_Squads",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-tankbattle-motd-1024x512-1024x512-674279961.jpg",
                        "playlist_name": "Playlist_Tank_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-tankbattle-motd-1024x512-1024x512-674279961.jpg",
                        "playlist_name": "Playlist_Tank_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-ragstoriches-motd-1024x512-1024x512-674279937.jpg",
                        "playlist_name": "Playlist_Titanium_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-ragstoriches-motd-1024x512-1024x512-674279937.jpg",
                        "playlist_name": "Playlist_Titanium_Duos",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-knockoutshuffle-motd-1024x512-1024x512-674280182.jpg",
                        "playlist_name": "Playlist_Mira_Squads",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-fishingfrenzy-motd-1024x512-1024x512-674279890.jpg",
                        "playlist_name": "Playlist_Polaris_Solo",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Solid_Gold_Playlist_Tile_1025x512-1024x512-ea1253854e55ed01f3d6e012ecfa373cc1b38d37.jpg",
                        "playlist_name": "Playlist_SolidGold_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-payback-motd-1024x512-1024x512-500823017.jpg",
                        "playlist_name": "Playlist_RespawnPB_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Infiltration_PlaylistTile-1024x512-795e414e6a7e6b050d19c3ef3f226ae0ece00875.jpg",
                        "playlist_name": "Playlist_Infiltration",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Payload_PlaylistTile_1024x512-1024x512-93cd224901b5d4d6585ed1170c700be4b4d2a5cf.png",
                        "playlist_name": "Playlist_Uranium_P",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_Highest   ",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_Higher",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_High",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_Med",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_Low",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg",
                        "playlist_name": "Playlist_Music_Lowest",
                        "violator": "LIVE EVENT",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)",
                        "display_name": "Travis Scott’s Astronomical"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Knockout_PlaylistTile-1024x512-455f3aa88d1c74b606b17f84852a4c1bbd82eedb.jpg",
                        "playlist_name": "Playlist_Cobalt_Duos_P_Respawn",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Quibi_TheSauce_Nighttime_LTM_1024x512-1024x512-7baf11f7c087e3b74e5a2c3eaf5c2d9cf9f445e4.jpg",
                        "playlist_name": "Playlist_NowPlaying",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Ayo & Teo are on the hunt to find the squad with the most sauce. Stop by Risky Reels to catch part of the show!",
                        "display_name": "Now Playing!"
                    }, {
                        "playlist_name": "Playlist_Bots_ArsenicCore_Solo_MaxFog",
                        "hidden": false,
                        "violator": "",
                        "_type": "FortPlaylistInfo",
                        "display_name": "Dev Autoflush Solos"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Knockout_PlaylistTile-1024x512-455f3aa88d1c74b606b17f84852a4c1bbd82eedb.jpg",
                        "playlist_name": "playlist_cobalt_squads_p_respawn",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/DropZone-1024x512-22ae7474a6c8bdf181e6cee1c546b341b4438fd9.jpg",
                        "playlist_name": "playlist_rumble_op",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/SearchDestroy_Tile_1024x512-1024x512-1e61afa9f8eeced10f55155b9a32530322492138.jpg",
                        "playlist_name": "Playlist_Creative_SourDropper_2",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Search and Destroy is a community made LTM. ",
                        "display_subname": "COVE",
                        "display_name": "Search and Destroy"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/SearchDestroy_Tile_1024x512-1024x512-1e61afa9f8eeced10f55155b9a32530322492138.jpg",
                        "playlist_name": "Playlist_Creative_SourDropper",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Search and Destroy is a community made LTM. ",
                        "display_subname": "FACTORY",
                        "display_name": "Search and Destroy"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_BattleLabs_PlaylistTile-(2)-1024x512-ca5f4e84a2941264f787239caa5458d0eabd39e3.jpg",
                        "playlist_name": "Playlist_BattleLab",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_Random",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Party queue Zone Wars.  Zone Wars games are a fast paced fight to the finish, forcing you to battle high ground while running from the fast moving storm. Zone Wars takes place on smaller, community made maps. Randomized spawns and inventory make each round feel unique. Play against 15 other players including anyone in your party.",
                        "display_name": "PARTY FFA"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Red-1024x512-2e1c5e38b652093029befb6a86a44db844474af8.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_Random2",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Solo queue Zone Wars.  Zone Wars games are a fast paced fight to the finish, forcing you to battle high ground while running from the fast moving storm. Zone Wars takes place on smaller, community made maps. Randomized spawns and inventory make each round feel unique. Play solo against 15 other random players.",
                        "display_name": "SOLO FFA"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_solos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": "Zone Wars 0"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_D",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "A solo queue, FFA simulation of the end-game scenario in Battle Royale with a quick moving zone. Randomized spawns and inventory items make each round unique. Stick around after the first game. there are multiple rounds in each session.  Zone Wars is a collection of games made by the community. The four maps included in this playlist are:  Desert created by JotaPeGame. Code: jotapegame Downhill River created by Enigma. Code: enigma Vortex created by Zeroyahero. Code: zeroyahero Colosseum created by Jesgran. Code: jesgran",
                        "display_name": "Zone Wars 4"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Black-1024x512-23ba95e82931361ce535a643fdac54e120254374.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_Random_Solos",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "A solo queue, FFA simulation of the end-game scenario in Battle Royale with a quick moving zone. Randomized spawns and inventory items make each round unique. Stick around after the first game. there are multiple rounds in each session.  Zone Wars is a collection of games made by the community. The four maps included in this playlist are:  Desert created by JotaPeGame. Code: jotapegame Downhill River created by Enigma. Code: enigma Vortex created by Zeroyahero. Code: zeroyahero Colosseum created by Jesgran. Code: jesgran",
                        "display_name": "Zone Wars 3"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile-1024x512-a2741f113a7178ca15d71d281dcc2b614ff90754.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_Random_Squads",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "A solo queue, FFA simulation of the end-game scenario in Battle Royale with a quick moving zone. Randomized spawns and inventory items make each round unique. Stick around after the first game. there are multiple rounds in each session.  Zone Wars is a collection of games made by the community. The four maps included in this playlist are:  Desert created by JotaPeGame. Code: jotapegame Downhill River created by Enigma. Code: enigma Vortex created by Zeroyahero. Code: zeroyahero Colosseum created by Jesgran. Code: jesgran",
                        "display_name": "Zone Wars 0"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-siphon-motd-1024x512-1024x512-501004672.jpg",
                        "playlist_name": "Playlist_Vamp_Duo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_2v2_GunFright_LTM-1024x512-f3b0f0157e8652a23db8abc23814d97893179e20.jpg",
                        "playlist_name": "Playlist_Creative_Hyena_G",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Code BluDrive "
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
                        "playlist_name": "Playlist_DADBRO_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
                        "playlist_name": "Playlist_DADBRO_Squads_12",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
                        "playlist_name": "Playlist_DADBRO_Squads_8",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/FORT_Tile_Tutorial-1024x512-72a618fa185a0bbc26ab6a290bc0a45cf460c576.png",
                        "playlist_name": "Playlist_Tutorial_1",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile-1024x512-a2741f113a7178ca15d71d281dcc2b614ff90754.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_A",
                        "violator": "PARTY FFA",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Code jesgran Zone Wars - Arena  A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session. Become the ultimate gladiator in this Colosseum style island. An open style island demands quick building. Created by Jesgran.",
                        "display_name": "Colosseum"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_DH",
                        "violator": "PARTY FFA",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Code enigma S10 Enigmas Downhill River Zonewars X  A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session.  Stay out of the storm as you move downhill through a river in this original style Zone Wars island. Community launch pads and a consistent Storm path allows for familiarity after a few rounds.  Created by Enigma.",
                        "display_name": "Downhill River"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Black-1024x512-23ba95e82931361ce535a643fdac54e120254374.jpg",
                        "playlist_name": "Playlist_Creative_ZebraWallet_V",
                        "violator": "PARTY FFA",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Code zeroyahero Vortex Zone Wars A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session.  This island puts a unique twist on the Zone Wars game with mountainous terrain to traverse. The elevation change from zone to zone can be quite drastic!  Created by Zeroyahero",
                        "display_name": "Vortex"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_TheCombine_ModeTile-1024x512-3aa8ebdfe1df7d9995e824a781eacdb954ee9615.jpg",
                        "playlist_name": "Playlist_Crucible_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LTM-Tile_Playground-1024x512-53db8a4b5fb41251af279eaf923bc00ecbc17792.jpg",
                        "playlist_name": "Playlist_Creative_PlayOnly_40",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10CM_LTM_KnockTown_Playlist-1024x512-72e32b88b332b4d3ee3ee5255eff9522b660485c.jpg",
                        "playlist_name": "Playlist_Creative_KaleTofu",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Bounty_LTM_V2_Playlist_Tile-1024x512-3528a95d869a442d61687b52253a56a36c92eea3.jpg",
                        "playlist_name": "Playlist_Bounty_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Bounty_LTM_V2_Playlist_Tile-1024x512-3528a95d869a442d61687b52253a56a36c92eea3.jpg",
                        "playlist_name": "Playlist_Bounty_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Bounty_LTM_V2_Playlist_Tile-1024x512-3528a95d869a442d61687b52253a56a36c92eea3.jpg",
                        "playlist_name": "Playlist_Bounty_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_WorldCup_FeatIsland_WorldRun_ModeTile-1024x512-34d66c90603f4e64ebd56054b889c4ec163abea5.jpg",
                        "playlist_name": "Playlist_Creative_Squad_Battle_16_B",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_SneakySilencers-1024x512-1669e2eeddca63b61e9b94cc19c3ec502fd33f29.jpg",
                        "playlist_name": "Playlist_Sneaky_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_WorldCup_FeatIsland_JunkyardJuke_ModeTile-1024x512-7a2585ce248f1efa438674c368b37116dc5514de.jpg",
                        "playlist_name": "Playlist_Creative_Squad_Battle_16_A",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/09CM_WorldCup_FeatIsland_SkyStation_ModeTile-1024x512-a5424f9ac27626a73646c9fd158901c4c363ec0c.jpg",
                        "playlist_name": "Playlist_Creative_Squad_Battle_32_A",
                        "violator": "COMMUNITY CREATION",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Created by Team Evolve. Featured in the Fortnite World Cup Creative Finals.  Battle other squads to capture zones and score points! Any player can capture a zone and score points for your team. Use impulse grenades to blast other teams out of the capture zones. Players can now earn XP after each game and the top three teams will earn bonus XP."
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-oneshot-motd-1024x512-1024x512-347318026.jpg",
                        "playlist_name": "Playlist_Low_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_HeavyMetal_ModeTile-1024x512-4db8223707fb313220eef577dafde5c14106e49d.jpg",
                        "playlist_name": "Playlist_Heavy_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_In-Game_PropHunt_ModeTile-1024x512-1510311027a93a720b42ed22e711c7e478931adb.jpg",
                        "playlist_name": "Playlist_Creative_PuppyHugs",
                        "violator": "PLAYER MADE!",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
                        "playlist_name": "Playlist_Unvaulted_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/EN_CM09_BeachAssaultCreativeLTM_ContestWinner_ModeTile-1024x512-9cdeb2e0ea37179a37d3384cf73c9949d2d19546.jpg",
                        "playlist_name": "Playlist_Creative_BeachAssault",
                        "violator": "PLAYER MADE",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": "BEACH ASSAULT BY PRUDIZ"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Barebones-1024x512-4a29337febb04e9043d57c9e61afe849f8a9e9c7.jpg",
                        "playlist_name": "Playlist_Hard_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "This mode has the map, compass, storm timer and many other elements of the Heads Up Display turned off."
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BlueWeapons_ModeTile-1024x512-0c38f1bc3b991943e3f6650bf7acfbcdd8739b1e.jpg",
                        "playlist_name": "Playlist_Blue_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Solid_Gold_Playlist_Tile_1025x512-1024x512-ea1253854e55ed01f3d6e012ecfa373cc1b38d37.jpg",
                        "playlist_name": "Playlist_SolidGold_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_PurpleReign_ModeTile-1024x512-c5a7e2bd3f32b83f17e4fa28817312ab6210133c.jpg",
                        "playlist_name": "Playlist_Purple_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_FullAuto_ModeTile-1024x512-d1532221d738ba3aed434512b7c670e72b89f474.jpg",
                        "playlist_name": "Playlist_Auto_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_HeavyMetal_ModeTile-1024x512-4db8223707fb313220eef577dafde5c14106e49d.jpg",
                        "playlist_name": "Playlist_Heavy_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-gungame-motd-1024x512-1024x512-501005598.jpg",
                        "playlist_name": "Playlist_Gungame_Reverse",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_Surfin_ModeTile-1024x512-ebff23e30b121cfe3eecf173949c055325522090.jpg",
                        "playlist_name": "Playlist_Race_12",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_DeaglesandHeadshots_ModeTile-1024x512-4d969f5a9126ba71b7ee77088fd22df5b4c7caba.jpg",
                        "playlist_name": "Playlist_Beagles_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LeaveNoneBehind_ModeTile-1024x512-bfe65d02a5d42577d22c133d25ad9c9fb62a35a0.jpg",
                        "playlist_name": "Playlist_Behind_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LoadoutSwap_ModeTile-1024x512-f73c146f8ccc7998aab14f8c1957f0ad01faa933.jpg",
                        "playlist_name": "Playlist_Swap_Squads_Respawn",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_TankBattle_ModeTile-1024x512-48554aae511d9c5a7ac1a5d4fd54e0f5a37bd66d.jpg",
                        "playlist_name": "Playlist_Tank_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_StrategicStructures_ModeTile-1024x512-4f6f448375284fef60fe2a2c15f292115ebec558.jpg",
                        "playlist_name": "Playlist_Strategic_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BuildersParadise_ModeTile-1024x512-730a5ffe51c8f0420b91529d1fc05e081aa2071c.jpg",
                        "playlist_name": "Playlist_Paradise_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_PowerUp_ModeTile-1024x512-7e1824071133f9eac4ca44c701605923893c85bf.jpg",
                        "playlist_name": "Playlist_Pow_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BuilttoLast_ModeTile-1024x512-cf95f4701f41c608ae8590fe588a5a0ea25ed68a.jpg",
                        "playlist_name": "Playlist_Care_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_Tag_ModeTile-1024x512-d4471981ccdc8d9f444d1f416b3f4458612da006.jpg",
                        "playlist_name": "Playlist_Tag_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_SiphonRumble_ModeTile-1024x512-02ad3c97e4cdc7172f6ea59140b89b004f95886a.jpg",
                        "playlist_name": "Playlist_Respawn_20_Sif",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LavaRumble_ModeTile-1024x512-29cc6ad680519d8f792bf1fa4053cf9191f84b6e.jpg",
                        "playlist_name": "Playlist_Respawn_20_Lava",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-payback-motd-1024x512-1024x512-500823017.jpg",
                        "playlist_name": "Playlist_Respawn_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_LTM_HordeRush_Mode_Tile-1024x512-a844840eb58db868b6abfbe18fc8a8f483e18c60.jpg",
                        "playlist_name": "Playlist_Mash_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_LTM_DowntownDrop_Screenshot_ModeTile-1024x512-d8ce0a16ae59e2a2f501813ddf540a00e60098b5.jpg",
                        "playlist_name": "Playlist_Creative_Vigilante",
                        "violator": "PLAYER MADE!",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Created by NotNellaf & Tollmolia in collaboration with Jordan Brand. "
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
                        "playlist_name": "Playlist_Wax_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
                        "playlist_name": "Playlist_Wax_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
                        "playlist_name": "Playlist_Wax_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_Endgame_InGame_Mode-Tile-1024x512-03bb0dc121ae8b2dcd27b8b386670737093d0c83.jpg",
                        "playlist_name": "Playlist_Ashton_Sm",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/EN_08BR_DeepFried_Mode_Tile-1024x512-227979fa27053f858066a1a47d68b55f792fded1.jpg",
                        "playlist_name": "Playlist_Barrier_16_B_Lava",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
                        "playlist_name": "Playlist_Goose_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
                        "playlist_name": "Playlist_Goose_Duos_24",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
                        "playlist_name": "Playlist_Goose_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/CM_LobbyTileArt-1024x512-fbcd48db36552ccb1ab4021b722ea29d515377cc.jpg",
                        "playlist_name": "Playlist_PlaygroundV2",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "Play the best games made by the community. There is a new Featured Island to check out every day!"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
                        "playlist_name": "Playlist_Fill_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
                        "playlist_name": "Playlist_Fill_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
                        "playlist_name": "Playlist_Fill_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
                        "playlist_name": "Playlist_Green_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
                        "playlist_name": "Playlist_Green_Squad",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
                        "playlist_name": "Playlist_Green_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_WinterFest_Social_Slide_LTM_MOTD_1024x512-1024x512-e568425bdc8ac88c7cea6a277d0cf3f081563541.jpg",
                        "playlist_name": "Playlist_Slide_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
                        "playlist_name": "Playlist_Classic_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
                        "playlist_name": "Playlist_Hover",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
                        "playlist_name": "Playlist_Hover_64",
                        "violator": "Large Team Mode",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
                        "playlist_name": "Playlist_Hover_48",
                        "violator": "Large Team Mode",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
                        "playlist_name": "Playlist_Sword_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
                        "playlist_name": "Playlist_Sword_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
                        "playlist_name": "Playlist_Sword_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
                        "playlist_name": "Playlist_Love_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
                        "playlist_name": "Playlist_Love_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
                        "playlist_name": "Playlist_Love_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Catch_LTM_ModeTile_1024x512-1024x512-c082fbf692a53d713da02592e9de69faeefd587c.jpg",
                        "playlist_name": "Playlist_Toss_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_CatchSquads-1024x512-7289222d56b08ef8de20c7187af2670496dca3df.jpg",
                        "playlist_name": "Playlist_Toss_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-catch-motd-1024x512-1024x512-500636478.jpg",
                        "playlist_name": "Playlist_Toss_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_NFL_Playlist_Tile-1024x512-767f5e54a71ef1c9fbd4bfdb8c8ec3b15aac8a5e.jpg",
                        "playlist_name": "Playlist_Omaha",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Squads-1024x512-cf4323aa9c2cfd027484cf4da14544128e3d4c7e.jpg",
                        "playlist_name": "Playlist_Deimos_Squad_Winter",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Duos_-1024x512-84315aac8d1fcfb840deba46c4dafda8e9005b2a.jpg",
                        "playlist_name": "Playlist_Deimos_Duo_Winter",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Solo-1024x512-5c759fe60ec85988f35c729b5fb6a7993d8dbb58.jpg",
                        "playlist_name": "Playlist_Deimos_Solo_Winter",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-oneshot-motd-1024x512-1024x512-347318026.jpg",
                        "playlist_name": "Playlist_Low_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
                        "playlist_name": "Playlist_Ground_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_WildWest-1024x512-42779242a5a73d654332d9d0afe0983f9d8401d0.jpg",
                        "playlist_name": "Playlist_WW_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Slide-1024x512-189625349e80dc81e225691aa952ffd280996058.jpg",
                        "playlist_name": "Playlist_Slide_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
                        "playlist_name": "Playlist_Ground_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
                        "playlist_name": "Ground_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-oneshot-motd-1024x512-1024x512-347318026.jpg",
                        "playlist_name": "Playlist_Low_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives50s-1024x512-3a8d44af3c2718b5aaaaebbd4627258a657bf0bf.jpg",
                        "playlist_name": "Playlist_50v50HE",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
                        "playlist_name": "Playlist_HighExplosives_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
                        "playlist_name": "Playlist_HighExplosives_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
                        "playlist_name": "Playlist_HighExplosives_Squads / Event 24",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_WildWest-1024x512-42779242a5a73d654332d9d0afe0983f9d8401d0.jpg",
                        "playlist_name": "Playlist_WW_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_SneakySilencers-1024x512-1669e2eeddca63b61e9b94cc19c3ec502fd33f29.jpg",
                        "playlist_name": "Playlist_Sneaky_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_FoodFight16-1024x512-309538a1b961b5ab0c22417ab34170cc302bbab8.jpg",
                        "playlist_name": "Playlist_Barrier_16",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_CloseEncounters50s-1024x512-03dcc058e1bec3e853b3ee20594128805223b5a3.jpg",
                        "playlist_name": "Playlist_Close_50",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HolidayDisco-1024x512-684bd4b41613e59d895a477389515a8b4878da6a.jpg",
                        "playlist_name": "Playlist_Disco_32_Alt",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Slide-1024x512-189625349e80dc81e225691aa952ffd280996058.jpg",
                        "playlist_name": "Playlist_Slide_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Barebones-1024x512-4a29337febb04e9043d57c9e61afe849f8a9e9c7.jpg",
                        "playlist_name": "Playlist_Hard_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/13br-summersplash-ltm-siphon-motd-1024x512-1024x512-501004672.jpg",
                        "playlist_name": "Playlist_Vamp_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_14-DoF_Social-1024x512-5fa7dd4752d1f0cc1a101f09cb170d0f5b2a31cf.jpg",
                        "playlist_name": "Playlist_33",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
                        "playlist_name": "Playlist_Unvaulted_Squads",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/team-rumble-1024x512-534456830.jpg",
                        "playlist_name": "Playlist_Respawn_24",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_ModeTile_LTM_WildWest-1024x512-f67d9d1dd2ca0b290c92b1380240429f0f257a10.jpg",
                        "playlist_name": "Playlist_WW_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_FoodFight-1024x512-5e1540a0a2ba0a1f663d32c60cfec3a360278672.png",
                        "playlist_name": "Playlist_Barrier_12",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_In-GamePlaylist_TeamTerror-1024x512-310430bdaf1b1dd0ecb4d3b180bb6409b7ff6e27.jpg",
                        "playlist_name": "playlist_deimos_50",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "description": "",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_-Solo-1024x512-7e7fe76e48beb3a06da0592cb26e412265986e4d.jpg",
                        "playlist_name": "Playlist_Deimos_Solo",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_Squads-1024x512-783a0812f6acf1f5931c8015e6ad13c0b76c5a9c.jpg",
                        "playlist_name": "Playlist_Deimos_Squad",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_Duos-1024x512-1eadb7cfab62c9eb5c90c65577c676d5d0bb15c2.jpg",
                        "playlist_name": "Playlist_Deimos_Duo",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo",
                        "display_name": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_LTM_DiscoDomination-1024x512-c79f07de78d8283656fcf4d1ee757f880911d775.jpg",
                        "playlist_name": "Playlist_Disco_32",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_LTM_DiscoDomination-1024x512-c79f07de78d8283656fcf4d1ee757f880911d775.jpg",
                        "playlist_name": "Playlist_Disco",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
                        "playlist_name": "Playlist_Soaring_Squads",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
                        "playlist_name": "Playlist_Soaring_Duos",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
                        "playlist_name": "Playlist_Soaring_Solo",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
                        "playlist_name": "Playlist_Bling_Squads",
                        "violator": "",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
                        "playlist_name": "Playlist_Bling_Duos",
                        "violator": "",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo",
                        "description": ""
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
                        "playlist_name": "Playlist_Bling_Solo",
                        "violator": "",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Solid_Gold_Playlist_Tile_1025x512-1024x512-ea1253854e55ed01f3d6e012ecfa373cc1b38d37.jpg",
                        "playlist_name": "Playlist_50v50SAU",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
                        "playlist_name": "Playlist_Score_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
                        "playlist_name": "Playlist_Score_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
                        "playlist_name": "Playlist_Score_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
                        "playlist_name": "Playlist_Soaring_50s",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
                        "playlist_name": "Playlist_Steady_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
                        "playlist_name": "Playlist_Steady_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
                        "playlist_name": "Playlist_Steady_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
                        "playlist_name": "Playlist_FlyExplosives_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
                        "playlist_name": "Playlist_FlyExplosives_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
                        "playlist_name": "Playlist_FlyExplosives_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_Tile_FinalFight-1024x576-5af82788940faeef422ad204aaa241e36e7c9c56.jpg",
                        "playlist_name": "Playlist_Final_12",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LTM-Tile_Playground-1024x512-53db8a4b5fb41251af279eaf923bc00ecbc17792.jpg",
                        "playlist_name": "Playlist_Creative_PlayOnly",
                        "violator": "",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo",
                        "display_subname": "-"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
                        "playlist_name": "Playlist_Taxes_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
                        "playlist_name": "Playlist_Taxes_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
                        "playlist_name": "Playlist_Taxes_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_Tile_FinalFight-1024x576-5af82788940faeef422ad204aaa241e36e7c9c56.jpg",
                        "playlist_name": "Playlist_Final_20",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
                        "playlist_name": "Playlist_Snipers_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
                        "playlist_name": "Playlist_Snipers_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
                        "playlist_name": "Playlist_Snipers_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_BlitzShowdown-1024x512-7eccbc505214ac522cc5dde7b3ceaa3a5f99e754.png",
                        "playlist_name": "Playlist_Comp_Blitz_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_5x20-1024x512-451b402db5751c25a1e7616930c5ae37d8b20710.png",
                        "playlist_name": "Playlist_5x20",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_In-Game_LTM_Blitz_Masked_ModeTile-1024x512-ca1788d0b956e789da358481747272e1bb64c710.jpg",
                        "playlist_name": "Playlist_Blitz_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_In-Game_LTM_Blitz_Masked_ModeTile-1024x512-ca1788d0b956e789da358481747272e1bb64c710.jpg",
                        "playlist_name": "Playlist_Blitz_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_In-Game_LTM_Blitz_Masked_ModeTile-1024x512-ca1788d0b956e789da358481747272e1bb64c710.jpg",
                        "playlist_name": "Playlist_Blitz_Squad",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Close_EncountersMOTD_1024x512-1024x512-b8ae46224a1de0d4db833c23755f4afabffb34b9.jpg",
                        "playlist_name": "Playlist_Close_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Close_EncountersMOTD_1024x512-1024x512-b8ae46224a1de0d4db833c23755f4afabffb34b9.jpg",
                        "playlist_name": "Playlist_Close_Squads",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Close_EncountersMOTD_1024x512-1024x512-b8ae46224a1de0d4db833c23755f4afabffb34b9.jpg",
                        "playlist_name": "Playlist_Close_Duos",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SoloShowdown-1024x512-0f522b0881adebfe241c6527f03c9140f70b88a7.png",
                        "playlist_name": "Playlist_Comp_Solo",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_Solid_Gold_Playlist_Tile_1025x512-1024x512-ea1253854e55ed01f3d6e012ecfa373cc1b38d37.jpg",
                        "playlist_name": "Playlist_SolidGold_Solo",
                        "violator": "",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_50v50-1024x512-788bf1a67426f54307c4296123ac2d3ff8cc0d6c.png",
                        "playlist_name": "Playlist_50v50",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_Gauntlet-1024x512-a0dca279534a121957275bcdb0b42042d8a010fd.png",
                        "playlist_name": "Playlist_Carmine",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-launch-modetiles-solo-1024x512-850175411.jpg",
                        "playlist_name": "Playlist_DefaultSolo",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-fortnitemares-solo-1024x512-326832464.jpg",
                        "playlist_name": "Playlist_Arseniccore_Solo_Maxfog",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-launch-modetiles-duos-1024x512-850175511.jpg",
                        "playlist_name": "Playlist_DefaultDuo",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-fortnitemares-duos-1024x512-326842571.jpg",
                        "playlist_name": "Playlist_Arseniccore_Duos_Maxfog",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-launch-modetiles-trios-1024x512-850175437.jpg",
                        "playlist_name": "playlist_trios",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-fortnitemares-trios-1024x512-326846465.jpg",
                        "playlist_name": "playlist_arseniccore_trios_maxfog",
                        "hidden": false,
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-launch-modetiles-squad-1024x512-850175426.jpg",
                        "playlist_name": "Playlist_DefaultSquad",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }, {
                        "image": "https://cdn2.unrealengine.com/14br-fortnitemares-squad-1024x512-326850231.jpg",
                        "playlist_name": "playlist_arseniccore_squads_maxfog",
                        "hidden": false,
                        "special_border": "None",
                        "_type": "FortPlaylistInfo"
                    }]
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e7e358ae2f-0f54-4e20-8ec7-267b4668393c",
                "_activeDate": "2018-04-25T15:05:39.956Z",
                "lastModified": "2020-10-16T11:57:44.884Z",
                "_locale": "en-US"
            },
            "dynamicbackgrounds": {
                "jcr:isCheckedOut": true,
                "backgrounds": {
                    "backgrounds": dynamicbg,
                    "_type": "DynamicBackgroundList"
                },
                "_title": "dynamicbackgrounds",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e7bac3355e-3ec1-4054-baf5-f88613799961",
                "_activeDate": "2019-08-21T15:59:59.342Z",
                "lastModified": "2020-08-27T08:04:47.051Z",
                "_locale": "en-US"
            },
            "athenamessage": {
                "_title": "athenamessage",
                "overrideablemessage": {
                    "_type": "CommonUI Simple Message",
                    "message": {
                        "_type": "CommonUI Simple Message Base",
                        "title": "Battle Royale",
                        "body": "Les SECTIONS sont arrivées ! Partez au combat avec trois amis.\n\nRappel : avec l'arrivée des sections, il reste interdit de faire équipe en solo. Cela est déloyal et peut entraîner un bannissement."
                    }
                },
                "_activeDate": "2017-08-30T03:08:31.687Z",
                "lastModified": "2017-09-26T16:20:19.191Z",
                "_locale": "en-US"
            },
            "creativenews": {
                "news": {
                    "motds": [],
                    "_type": "Battle Royale News",
                    "messages": [{
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battleroyalenews/v42/BR04_MOTD_Shield-1024x512-75eacc957ecc88e76693143b6256ba06159efb76.jpg",
                        "hidden": false,
                        "messagetype": "normal",
                        "_type": "CommonUI Simple Message Base",
                        "title": "Sécurisez votre compte",
                        "body": "Les sites proposant des V-bucks gratuits sont de l'arnaque. Epic ne vous demandera jamais votre mot de passe. Activez l'authentification à deux facteurs !",
                        "spotlight": false
                    }],
                    "platform_motds": [{
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Apple a bloqué la possibilité de mettre à jour Fortnite sur l'App Store et a indiqué mettre un terme à nos moyens de développement de Fortnite sur les appareils d'Apple. Par conséquent, le Chapitre 2 - Saison 4 de Fortnite (mise à jour 14.00) ne sera pas disponible sur votre appareil.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "sortingPriority": 99,
                            "id": "Apple Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "mac"
                    }, {
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Avec le lancement de la saison 4, les joueurs sur Google Play ne pourront plus jouer à la nouvelle saison. Sur cette plateforme, les joueurs peuvent toujours jouer à la version 13.40.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "sortingPriority": 99,
                            "id": "Google Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "androidGP"
                    }, {
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Apple a bloqué la possibilité de mettre à jour Fortnite sur l'App Store et a indiqué mettre un terme à nos moyens de développement de Fortnite sur les appareils d'Apple. Par conséquent, le Chapitre 2 - Saison 4 de Fortnite (mise à jour 14.00) ne sera pas disponible sur votre appareil.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "sortingPriority": 99,
                            "id": "Apple Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "ios"
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "Actus créatives",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e782ab0c02-4844-4629-9936-e6dc7811a702",
                "_activeDate": "2020-01-22T00:00:00.000Z",
                "lastModified": "2020-09-09T13:41:46.468Z",
                "_locale": "en-US"
            },
            "creativeAds": {
                "ad_info": {
                    "ads": [{
                        "sub_header": "",
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/creative-ads/v1030/Heroes-1080x1080-8a22c9ecbbcf359dfc12d1a908bed9d712242058.png",
                        "hidden": false,
                        "_type": "Creative Ad Display Info",
                        "description": "Les préfabriqués Héros et\nméchants sont disponibles !",
                        "header": "Héros et méchants"
                    }, {
                        "sub_header": "",
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/creative-ads/v1030/Vending-1080x1080-26ecbef54139c18f4fa7f93da4875c4c26415792.png",
                        "hidden": false,
                        "_type": "Creative Ad Display Info",
                        "description": "Faites apparaître des objets\npendant votre jeu !",
                        "header": "Distributeurs"
                    }],
                    "_type": "Creative Ad Info"
                },
                "_title": "creative-ads",
                "_activeDate": "2018-11-09T20:00:42.300Z",
                "lastModified": "2019-10-03T15:15:55.316Z",
                "_locale": "en-US"
            },
            "battlepassaboutmessages": {
                "news": {
                    "_type": "Battle Royale News",
                    "messages": [{
                        "layout": "Right Image",
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_HowDoesItWork-1024x1024-faa688dad8111f0a944c351dd7b11e4bff3562aa.png",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "title": "COMMENT ÇA MARCHE ?",
                        "body": "Jouez pour augmenter le niveau du Passe de combat. Gagnez de l'EXP en effectuant diverses activités dans le jeu, dont fouiller des coffres, éliminer des adversaires ou accomplir des défis ! Montez en niveau pour déverrouiller plus de 100 récompenses, dont 1500 V-bucks ! Vous pouvez acheter le Passe de combat à tout moment de la saison pour 950 V-bucks, ce qui déverrouille rétroactivement toutes les récompenses jusqu'à votre niveau actuel.",
                        "spotlight": false
                    }, {
                        "layout": "Left Image",
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_WhatsInside-(1)-1024x1024-68356adb3844b46ada633ace2d168af74b446f35.png",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "title": "IL Y A QUOI DEDANS ?",
                        "body": "Dès que vous achetez le Passe de combat, vous recevez deux tenues exclusives : Marin et Apogée ! Plein d'autres récompenses vous attendent ensuite : emotes, tenues, revêtements, pioches, écrans de chargement et autres. Vous recevez une récompense par niveau gagné et, pour la première fois, vous pouvez continuer à gagner des niveaux au-delà de 100 !",
                        "spotlight": false
                    }, {
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_Badges-1024x1024-94b54a7e241b5747d83095feb1e6fc330c49689f.png",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "title": "Nouveau : les médailles !",
                        "body": "La progression dans le Passe de combat a été entièrement refaite cette saison. Avancez dans le Passe de combat en accomplissant des défis et en gagnant des médailles quotidiennes dans le jeu ! Complétez votre collection de médailles afin de maximiser vos gains d'EXP.",
                        "spotlight": false
                    }]
                },
                "_title": "À propos du Passe de combat",
                "_activeDate": "2018-06-20T18:15:07.002Z",
                "lastModified": "2019-10-14T20:39:32.520Z",
                "_locale": "en-US"
            },
            "creativeFeatures": {
                "jcr:isCheckedOut": true,
                "ad_info": {
                    "_type": "Creative Ad Info"
                },
                "_title": "Creative Features",
                "jcr:baseVersion": "a7ca237317f1e7bccb9d3e-a117-41bb-8008-d9139866fa47",
                "_activeDate": "2019-03-27T14:47:20.426Z",
                "lastModified": "2019-06-21T14:21:58.307Z",
                "_locale": "en-US"
            },
            "savetheworldnews": {
                "news": {
                    "_type": "Battle Royale News",
                    "messages": [{
                        "image": "https://cdn2.unrealengine.com/12stw-camsession-cram-session-motd-1024x512-1024x512-408347140.jpg",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "adspace": "ÉVÉNEMENT SAISONNIER",
                        "title": "BACHOTAGE",
                        "body": "Augmentez le niveau de vos objets préférés et faites-les évoluer pendant le mini-événement Bachotage !",
                        "spotlight": false
                    }, {
                        "image": "https://cdn2.unrealengine.com/stw07-motd-spectralblade-1024x512-890962770.jpg",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "adspace": "BOUTIQUE D'ÉVÉNEMENT",
                        "title": "Lame spectrale",
                        "body": "L'outil de découpe de Carcasses préféré de la base est de retour ! Cette lame fantomatique utilise sa vitesse d'attaque supérieure à la moyenne pour infliger de forts dégâts réguliers. Déclenchez la Taillade spectrale pour vous téléporter sur votre cible, ce qui lui inflige de lourds dégâts et déstabilise les ennemis de petite taille.",
                        "spotlight": false
                    }, {
                        "image": "https://cdn2.unrealengine.com/11stw-monsterbride-motd-1024x512-408357875.jpg",
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "adspace": "BOUTIQUE D'ÉVÉNEMENT",
                        "title": "Izza Groarlène",
                        "body": "Avec Izza Groarlène, la nuit sera pleine d'horreur et de mystère !",
                        "spotlight": false
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "SaveTheWorldNews",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e79a6efa59-3f42-4a68-a8c7-cb2e21ec462c",
                "_activeDate": "2020-01-22T00:00:00.000Z",
                "lastModified": "2020-09-25T16:41:01.892Z",
                "_locale": "en-US"
            },
            "loginmessage": {
                "_title": "Message de connexion",
                "loginmessage": {
                    "_type": "CommonUI Simple Message",
                    "message": {
                        "_type": "CommonUI Simple Message Base",
                        "title": "",
                        "body": ""
                    }
                },
                "_activeDate": "2017-07-19T13:14:04.490Z",
                "lastModified": "2018-03-15T07:10:53.113Z",
                "_locale": "en-US"
            },
            "battleroyalenews": {
                "news": {
                    "_type": "Battle Royale News",
                    "messages": [{
                        "image": "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battleroyalenews/v42/BR04_MOTD_Shield-1024x512-75eacc957ecc88e76693143b6256ba06159efb76.jpg",
                        "hidden": false,
                        "messagetype": "normal",
                        "_type": "CommonUI Simple Message Base",
                        "title": "Sécurisez votre compte",
                        "body": "Les sites proposant des V-bucks gratuits sont de l'arnaque. Epic ne vous demandera jamais votre mot de passe. Activez l'authentification à deux facteurs !",
                        "spotlight": false
                    }],
                    "platform_motds": [{
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Apple a bloqué la possibilité de mettre à jour Fortnite sur l'App Store et a indiqué mettre un terme à nos moyens de développement de Fortnite sur les appareils d'Apple. Par conséquent, le Chapitre 2 - Saison 4 de Fortnite (mise à jour 14.00) ne sera pas disponible sur votre appareil.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "id": "Apple Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "mac"
                    }, {
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Avec le lancement de la saison 4, les joueurs sur Google Play ne pourront plus jouer à la nouvelle saison. Sur cette plateforme, les joueurs peuvent toujours jouer à la version 13.40.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "id": "Google Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "androidGP"
                    }, {
                        "hidden": false,
                        "_type": "CommonUI Simple Message MOTD Platform",
                        "message": {
                            "entryType": "Text",
                            "image": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1920x1080-1920x1080-735237418.jpg",
                            "tileImage": "https://cdn2.unrealengine.com/13br-freefortnite-motd-1024x512-1024x512-735237414.jpg",
                            "hidden": true,
                            "videoMute": false,
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "À propos du Chapitre 2 - Saison 4",
                            "body": "Apple a bloqué la possibilité de mettre à jour Fortnite sur l'App Store et a indiqué mettre un terme à nos moyens de développement de Fortnite sur les appareils d'Apple. Par conséquent, le Chapitre 2 - Saison 4 de Fortnite (mise à jour 14.00) ne sera pas disponible sur votre appareil.",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "id": "Apple Sustained Release",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false
                        },
                        "platform": "ios"
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenews",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e7a232e55d-d68c-471f-a608-fb7e0acb815a",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2020-10-04T23:50:32.828Z",
                "_locale": "en-US"
            },
            "shopSections": {
                "jcr:isCheckedOut": true,
                "_title": "shop-sections",
                "sectionList": {
                    "_type": "ShopSectionList",
                    "sections": [{
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 70,
                        "sectionId": "Featured",
                        "bShowTimer": true,
                        "sectionDisplayName": "Featured",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 69,
                        "sectionId": "Featured2",
                        "bShowTimer": false,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "CustomizeHero",
                        "bShowTimer": true,
                        "sectionDisplayName": "Customize Your Hero!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "HeroGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Hero Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": false,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "BannerBrigade",
                        "bShowTimer": true,
                        "sectionDisplayName": "Banner Brigade",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "BannerGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Banner Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 60,
                        "sectionId": "Daily",
                        "bShowTimer": true,
                        "sectionDisplayName": "Daily",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 59,
                        "sectionId": "Daily2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 60,
                        "sectionId": "Special",
                        "bShowTimer": true,
                        "sectionDisplayName": "Special Offers",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 59,
                        "sectionId": "Special2",
                        "bShowTimer": true,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "StarWars",
                        "bShowTimer": true,
                        "sectionDisplayName": "Star Wars",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "StartParty",
                        "bShowTimer": true,
                        "sectionDisplayName": "Start the Party!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "PartyGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Party Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "TurnMusicUp",
                        "bShowTimer": true,
                        "sectionDisplayName": "Turn the Music Up!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 30,
                        "sectionId": "SpookyOffers",
                        "bShowTimer": true,
                        "sectionDisplayName": "Spooky Offers",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 29,
                        "sectionId": "SpookyOffers2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "Fortnitemares",
                        "bShowTimer": true,
                        "sectionDisplayName": "Fortnitemares",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "Ghostbusters",
                        "bShowTimer": true,
                        "sectionDisplayName": "Ghostbusters",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "GhostbustersGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Ghostbusters Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 40,
                        "sectionId": "Marvel",
                        "bShowTimer": true,
                        "sectionDisplayName": "Marvel",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 39,
                        "sectionId": "Marvel2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 38,
                        "sectionId": "Marvel3",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 37,
                        "sectionId": "Marvel4",
                        "bShowTimer": true,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Bundles",
                        "bShowTimer": true,
                        "sectionDisplayName": "Bundles",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Characters",
                        "bShowTimer": true,
                        "sectionDisplayName": "Outfits",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Backpacks",
                        "bShowTimer": true,
                        "sectionDisplayName": "Back Blings",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 0,
                        "sectionId": "Pickaxes",
                        "bShowTimer": true,
                        "sectionDisplayName": "Harvesting Tools",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Gliders",
                        "bShowTimer": true,
                        "sectionDisplayName": "Gliders",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "MusicPacks",
                        "bShowTimer": true,
                        "sectionDisplayName": "Music Packs",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Wraps",
                        "bShowTimer": true,
                        "sectionDisplayName": "Wraps",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 80,
                        "sectionId": "LimitedTime",
                        "bShowTimer": false,
                        "sectionDisplayName": "Limited Time",
                        "bShowIneligibleOffers": false
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": false,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 90,
                        "sectionId": "Battlepass",
                        "bShowTimer": false,
                        "sectionDisplayName": "Battle Pass",
                        "bShowIneligibleOffers": true
                    }]
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e77f7abaac-2b4d-4df8-828b-6056a1904470",
                "_activeDate": "2020-10-28T00:00:00.000Z",
                "lastModified": "2020-11-02T15:56:44.648Z",
                "_locale": "en-US"
            },
            "battleroyalenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": "https://cdn.discordapp.com/attachments/703974059121049720/715300713995042877/Fornite1920x1080.jpg",
                        "tileImage": "https://cdn.discordapp.com/attachments/703974059121049720/715300717837156362/FortniteMidLogo.jpg",
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Neonite V2",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Neonite",
                        "body": "Made by Kemo (@xkem0x). If you have any bugs, you can join our Discord by clicking the button below.",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 80,
                        "id": "NeoniteNewsBR",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://discord.gg/DJ6VUmD",
                        "websiteButtonTex" : "Join our discord"
                    }
                ],
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2020-11-01T17:36:19.024Z",
                "_locale": "en-US"
            },
            "Creativenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": "https://cdn.discordapp.com/attachments/703974059121049720/715300713995042877/Fornite1920x1080.jpg",
                        "tileImage": "https://cdn.discordapp.com/attachments/703974059121049720/715300717837156362/FortniteMidLogo.jpg",
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Neonite V2",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Neonite",
                        "body": "Made by Kemo (@xkem0x). If you have any bugs, you can join our Discord by clicking the button below.",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 80,
                        "id": "NeoniteNews",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://discord.gg/DJ6VUmD",
                        "websiteButtonTex" : "Join our discord"
                    }
                ],
                },
                "jcr:isCheckedOut": true,
                "_title": "Creativenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2020-11-01T17:36:19.024Z",
                "_locale": "en-US"
            },
            "shopCarousel": {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "tileImage": "https://media.discordapp.net/attachments/703974059121049720/774007298786983985/NeoniteWallpaper1920x1080.png",
                        "fullTitle": "Neonite",
                        "hidden": false,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": "v2:/cc29bec6d0bdd2876fb412cf674a7960003bbb76b2eb9b930833a61b604a3b4e",
                        "title": "Neonite"
                    }]
                },
                "_title": "shop-carousel",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e76d4c1405-e84c-4ece-bc50-7112ba557b33",
                "_activeDate": "2020-09-25T12:00:00.000Z",
                "lastModified": "2020-10-26T15:37:05.775Z",
                "_locale": "en-US"
            },
            "_suggestedPrefetch": []
        })
    })
}
