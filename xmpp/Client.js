const uuid = require("uuid").v4
const EventEmitter = require("events").EventEmitter
const xmlparser = require('xml-parser')
const xmlbuilder = require("xmlbuilder")
const util = require('util')
const axios = require('axios')
const fs = require("fs");


/* 
Inspiration : https://github.com/SpencerDring/AuroraFN-Backend/blob/develop/xmpp/Client.js
originally by : @slushia
*/
module.exports = class Client extends EventEmitter {
    constructor(ws) {
        super()
        this.bIsAuthenticated = false;
        this.bIsConnectedToParty = false
        this.uuid = uuid()
        this.ws = ws
        this.botJid = null
        this.bCopyEmote = false
        this.bIsBotJoined = false
        this.NumberOfBot = 1;
        this.botCurrentEmote = null

        this.ws.on("message", (message) => {
            if (xmlparser(message).root != undefined) {
                this[`handle${xmlparser(message).root.name.replace(/:/g, '')}`](xmlparser(message))
            }
        })

    }

    handleopen() {
        this.ws.send(xmlbuilder.create({
            'open': {
                '@xmlns': 'urn:ietf:params:xml:ns:xmpp-framing',
                '@from': 'prod.ol.epicgames.com',
                '@id': this.uuid
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
        this.sendFeatures()

    }

    sendFeatures() {
        if (this.bIsAuthenticated) {
            this.ws.send(xmlbuilder.create({
                'stream:features': {
                    '@xmlns:stream': 'http://etherx.jabber.org/streams',
                    ver: { '@xmlns': 'urn:xmpp:features:rosterver' },
                    starttls: { '@xmlns': 'urn:ietf:params:xml:ns:xmpp-tls' },
                    bind: { '@xmlns': 'urn:ietf:params:xml:ns:xmpp-bind' },
                    compression: {
                        '@xmlns': 'http://jabber.org/features/compress',
                        method: {
                            '#text': "zlib"
                        }
                    },
                    session: { '@xmlns': 'urn:ietf:params:xml:ns:xmpp-session' }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        } else {
            this.ws.send(xmlbuilder.create({
                'stream:features': {
                    '@xmlns:stream': 'http://etherx.jabber.org/streams',
                    mechanisms: {
                        '@xmlns': 'urn:ietf:params:xml:ns:xmpp-sasl',
                        mechanism: {
                            "#text": "PLAIN"
                        }
                    },
                    ver: { '@xmlns': 'urn:xmpp:features:rosterver' },
                    starttls: { '@xmlns': 'urn:ietf:params:xml:ns:xmpp-tls' },
                    compression: {
                        '@xmlns': 'http://jabber.org/features/compress',
                        method: {
                            '#text': "zlib"
                        }
                    },
                    auth: { '@xmlns': 'http://jabber.org/features/iq-auth' }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }
    }

    handleauth(message) {
        var parsed = Buffer.from(message.root.content, "base64").toString().split("\u0000").splice(1)
        if (!parsed[0]) {
            return this.ws.send(xmlbuilder.create({
                //<not-authorized/><text xml:lang='en'>Password not verified</text>
                'failure': {
                    '@xmlns': 'urn:ietf:params:xml:ns:xmpp-sasl',
                    'not-authorized': {
                        'text': {
                            "@xml:lang": "eng",
                            "#text": "Password not verified"
                        }
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }

        this.botJid = `NeoniteBot@prod.ol.epicgames.com/V2:Fortnite:WIN::${parsed[0]}`

        this.id = parsed[0]
        this.bIsAuthenticated = true
        xmppClients[this.id] = {
            id: this.id,
            jid: "",
            token: parsed[1] || "None",
            client: this
        }

        this.ws.send(xmlbuilder.create({
            'success': {
                '@xmlns': 'urn:ietf:params:xml:ns:xmpp-sasl'
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
    }


    handleiq(message) {
        switch (message.root.attributes.id) {
            case "_xmpp_bind1":
                this.jid = message.root.attributes.to ? message.root.attributes.to : `${this.id}@prod.ol.epicgames.com/${message.root.children.find(x => x.name == "bind").children[0].content}`
                xmppClients[this.id].jid = this.jid

                this.ws.send(xmlbuilder.create({
                    'iq': {
                        '@xmlns': 'jabber:client',
                        '@from': "prod.ol.epicgames.com",
                        '@to': this.jid,
                        '@type': "result",
                        '@id': "_xmpp_bind1",
                        'bind': {
                            '@xmlns': 'urn:ietf:params:xml:ns:xmpp-bind',
                            'jid': {
                                "#text": this.jid
                            }
                        }
                    }
                }).end().replace(`<?xml version="1.0"?>`, "").trim())


                break;
            case "_xmpp_session1":
                this.ws.send(xmlbuilder.create({
                    'iq': {
                        '@xmlns': 'jabber:client',
                        '@from': "prod.ol.epicgames.com",
                        '@to': this.jid,
                        '@type': "result",
                        '@id': "_xmpp_session1"
                    }
                }).end().replace(`<?xml version="1.0"?>`, "").trim())

                break;
            default:
                this.ws.send(xmlbuilder.create({
                    'iq': {
                        '@xmlns': 'jabber:client',
                        '@from': "prod.ol.epicgames.com",
                        '@to': this.jid,
                        '@type': "result",
                        '@id': message.root.attributes.id
                    }
                }).end().replace(`<?xml version="1.0"?>`, "").trim())
                break;
        }

    }

    async handlepresence(message) {
        try {

            this.sendPresence(this.jid, this.botJid, JSON.stringify({ "Status": "Neonite Lobby Bot", "bIsPlaying": false, "bIsJoinable": true, "bHasVoiceSupport": false, "SessionId": "", "ProductName": "Fortnite", "Properties": { "FortBasicInfo_j": { "homeBaseRating": 0 }, "FortLFG_I": "0", "FortPartySize_i": 1, "FortSubGame_i": 1, "InUnjoinableMatch_b": false, "FortGameplayStats_j": { "state": "", "playlist": "None", "numKills": 0, "bFellToDeath": false }, "party.joininfodata.286331153_j": { "bIsPrivate": false }, "KairosProfile_j": { "appInstalled": "init", "avatar": "cid_527_athena_commando_f_streetfashionred", "avatarBackground": "[]" } } }))//1C00ff00
            var thing = JSON.parse(message.root.children.find(x => x.name == "status").content)
            this.sendPresence(this.jid, this.jid.split("/")[0], JSON.stringify(thing))
            this.latest = JSON.stringify(thing)
        } catch (e) {

        }
    }



    handlemessage(message) {
        if (message.root.attributes.type == "chat") {

            var to = message.root.attributes.to.split("@")[0]
            if (to != "NeoniteBot") return;
            var msg = `${message.root.children[0].content}`
            
            if (msg == "!help" || msg == "!Help")
            {
                var text = '\n' +
                '========================================' + '\n' +
                '!Skin      Change all bots skins' + '\n' +
                '!Emote     Set all bots emotes' + '\n' +
                '!Copy      Toggle copy mode' + '\n' +
                '!Addbot    Add one bot to the Party' + '\n' +
                '!Add4bot   Add 4 bots to the Party' + '\n' +
                '!Help      Show this help Message' + '\n' +
                '========================================' + '\n'

                this.sendChat(this.botJid, text)
            }
            
            else if (msg == "!copy" || msg == "!perfectTiming")
                this.bCopyEmote = !this.bCopyEmote;

            else if (msg == "!add4bot" || msg == "!Add4Bot" || msg == "!add4Bot") {
                console.log(this.NumberOfBot)
                if (this.NumberOfBot == 0) {
                    this.AddOneBot("LobbyBotPartyLMFAO")
                    this.AddOneBot("LobbyBotPartyLMFAO")
                }
                else {
                    this.AddOneBot("LobbyBotPartyLMFAO")
                    this.AddOneBot("LobbyBotPartyLMFAO")
                    this.AddOneBot("LobbyBotPartyLMFAO")
                    this.AddOneBot("LobbyBotPartyLMFAO")
                }

            }


            if (msg == "!addbot" || msg == "!AddBot" || msg == "!addBot")
                this.AddOneBot("LobbyBotPartyLMFAO")

            if (msg.startsWith("!skin ")) {
                var name = msg.replace(/!skin /g, '')
                axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${name}&matchMethod=contains&type=outfit`).then(response => {
                    this.setAllBotsSkins(response.data.data.id)
                    fs.writeFile('./config/NeoniteBot/config.json', JSON.stringify({
                        skin: response.data.data.id,
                        emote: BotConfig.emote
                    }), function (err, data) { })

                }).catch(error => {
                    if (error.response) {
                        this.sendChat(this.botJid, "Skin not found!")
                    } else if (error.request) {

                        this.sendChat(this.botJid, "Unknow Error: " + error.request)
                    } else {

                        this.sendChat(this.botJid, "Unknow Error: " + error.message)
                    }

                });
            }
            else if (msg.startsWith("!emote ") || msg.startsWith("!Emote ")) {
                var name = msg.replace(/!emote /g, '').replace(/!Emote /g, '')
                axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${name}&matchMethod=contains&type=emote`).then(response => {
                    //this.setBotEmote(response.data.data.id)
                    this.setAllbotsEmote(response.data.data.id)
                }).catch(error => {
                    if (error.response) {
                        this.sendChat(this.botJid, "Emote not found!")
                    } else if (error.request) {

                        this.sendChat(this.botJid, "Unknow Error: " + error.request)
                    } else {

                        this.sendChat(this.botJid, "Unknow Error: " + error.message)
                    }

                });
            }
            if (msg.startsWith("!backpack " || msg.startsWith("!Backpack "))) {
                var name = msg.replace(/!backpack /g, '').replace(/!Backpack /g, '')
                axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${name}&matchMethod=contains&type=backpack`).then(response => {
                    this.setAllbotBackBling(`/Game/Athena/Items/Cosmetics/Backpacks/${response.data.data.id}.${response.data.data.id}`, "LobbyBotPartyLMFAO")
                }).catch(error => {
                    if (error.response) {
                        axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${name}&matchMethod=contains&type=PET`).then(response => {
                            this.setAllbotBackBling(`/Game/Athena/Items/Cosmetics/PetCarriers/${response.data.data.id.replace(/BID/g, 'PetCarrier')}.${response.data.data.id.replace(/BID/g, 'PetCarrier')}`, "LobbyBotPartyLMFAO")
                        }).catch(error => {
                            if (error.response) { this.sendChat(this.botJid, "Backpack not found!") } else if (error.request) { this.sendChat(this.botJid, "Unknow Error: " + error.request) } else { this.sendChat(this.botJid, "Unknow Error: " + error.message) }
                            
                        });
                    } else if (error.request) {

                        this.sendChat(this.botJid, "Unknow Error: " + error.request)
                    } else {
                        this.sendChat(this.botJid, "Unknow Error: " + error.message)
                    }

                });
            }
        }
    }

    async handleclose() {
        //TODO
    }

    sendMessage(from, data) {
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@to': this.jid,
                '@from': from,
                '@id': uuid().replace(/-/g, '').toUpperCase(),
                'body': {
                    "#text": data
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
    }

    sendChat(from, data) {
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@type': "chat",
                '@to': this.jid,
                '@from': from,
                'body': {
                    "#text": data
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
    }

    SendBotConfirm(partyID) {
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify({
                        "sent": new Date(),
                        "type": "com.epicgames.social.party.notification.v0.MEMBER_REQUIRE_CONFIRMATION",
                        "connection": {
                            "id": this.botJid,
                            "meta": {
                                "urn:epic:conn:platform_s": "WIN",
                                "urn:epic:conn:type_s": "game"
                            },
                            "connected_at": new Date(),
                            "updated_at": new Date(),
                            "yield_leadership": false
                        },
                        "revision": 0,
                        "ns": "Fortnite",
                        "party_id": partyID,
                        "account_id": "NeoniteBot",
                        "account_dn": "NeoniteBot",
                        "member_state_updated": {
                            "urn:epic:member:dn_s": "NeoniteBot",
                            "urn:epic:member:joinrequestusers_j": "{\"users\":[{\"id\":\"NeoniteBot\",\"dn\":\"NeoniteBot\",\"plat\":\"WIN\",\"data\":\"{\\\"CrossplayPreference_i\\\":\\\"1\\\",\\\"SubGame_u\\\":\\\"1\\\"}\"}]}"
                        },
                        "joined_at": new Date(),
                        "updated_at": new Date()
                    })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
    }

    JoinBot(PartyId) {

        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_JOINED",
                            "connection": {
                                "id": this.botJid,
                                "meta": {
                                    "urn:epic:conn:platform_s": "WIN",
                                    "urn:epic:conn:type_s": "game"
                                },
                                "connected_at": new Date(),
                                "updated_at": new Date(),
                                "yield_leadership": false
                            },
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId,
                            "account_id": "NeoniteBot",
                            "account_dn": "NeoniteBot",
                            "member_state_updated": {
                                "urn:epic:member:joinrequestusers_j": "{\"users\":[{\"id\":\"NeoniteBot\",\"dn\":\"NeoniteBot\",\"plat\":\"WIN\",\"data\":\"{\\\"CrossplayPreference_i\\\":\\\"1\\\",\\\"SubGame_u\\\":\\\"1\\\"}\"}]}",
                                "urn:epic:member:dn_s": "NeoniteBot"
                            },
                            "joined_at": new Date(),
                            "updated_at": new Date()
                        })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())

        //setBot

        setTimeout(() => {
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": "NeoniteBot",
                                "account_dn": "NeoniteBot",
                                "member_state_removed": [],
                                "member_state_updated": {
                                    "Default:Location_s": "PreLobby",
                                    "Default:MatchmakingLevel_U": "0",
                                    "Default:ZoneInstanceId_s": "",
                                    "Default:HomeBaseVersion_U": "1",
                                    "Default:HasPreloadedAthena_b": "false",
                                    "Default:NumAthenaPlayersLeft_U": "0",
                                    "Default:SpectateAPartyMemberAvailable_b": "false",
                                    "Default:UtcTimeStartedMatchAthena_s": "0001-01-01T00:00:00.000Z",
                                    "Default:GameReadiness_s": "NotReady",
                                    "Default:InGameReadyCheckStatus_s": "None",
                                    "Default:HiddenMatchmakingDelayMax_U": "0",
                                    "Default:ReadyInputType_s": "Count",
                                    "Default:CurrentInputType_s": "MouseAndKeyboard",
                                    "Default:AssistedChallengeInfo_j": "{\"AssistedChallengeInfo\":{\"questItemDef\":\"None\",\"objectivesCompleted\":0}}",
                                    "Default:FeatDefinition_s": "None",
                                    "Default:MemberSquadAssignmentRequest_j": "{\"MemberSquadAssignmentRequest\":{\"startingAbsoluteIdx\":-1,\"targetAbsoluteIdx\":-1,\"swapTargetMemberId\":\"INVALID\",\"version\":0}}",
                                    "Default:VoiceChatStatus_s": "PartyVoice",
                                    "Default:SidekickStatus_s": "None",
                                    "Default:ArbitraryCustomDataStore_j": "{\"ArbitraryCustomDataStore\":[]}",
                                    "Default:AthenaBannerInfo_j": "{\"AthenaBannerInfo\":{\"bannerIconId\":\"standardbanner2\",\"bannerColorId\":\"defaultcolor12\",\"seasonLevel\":69}}",
                                    "Default:BattlePassInfo_j": "{\"BattlePassInfo\":{\"bHasPurchasedPass\":false,\"passLevel\":6,\"selfBoostXp\":0,\"friendBoostXp\":0}}",
                                    "Default:Platform_j": "{\"Platform\":{\"platformDescription\":{\"name\":\"WIN\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}",
                                    "Default:PlatformUniqueId_s": "INVALID",
                                    "Default:PlatformSessionId_s": "",
                                    "Default:CrossplayPreference_s": "OptedIn"
                                },
                                "joined_at": new Date(),
                                "updated_at": new Date()
                            })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())

            try {
                global.BotConfig = JSON.parse(fs.readFileSync('./config/NeoniteBot/config.json', 'utf8', function (err, data) {
                    if (err) global.BotConfig = false;
                }))
            } catch { }

            this.setAllBotsSkins(BotConfig.skin || "CID_286_Athena_Commando_F_NeonCat")
            if (BotConfig.emote) {
                this.setBotEmote(BotConfig.emote)
            }
        }, 1000);
        this.bIsBotJoined = true
    }

    AddOneBot(PartyId) {
        if (this.NumberOfBot + 1 >= 16) { return this.sendChat(this.botJid, "You reached the bot Limit! (16)") }

        this.NumberOfBot = this.NumberOfBot + 1
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_JOINED",
                            "connection": {
                                "id": `NeoniteBot${this.NumberOfBot}@prod.ol.epicgames.com/V2:Fortnite:WIN::BOT${this.NumberOfBot}`,
                                "meta": {
                                    "urn:epic:conn:platform_s": "WIN",
                                    "urn:epic:conn:type_s": "game"
                                },
                                "connected_at": new Date(),
                                "updated_at": new Date(),
                                "yield_leadership": false
                            },
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId,
                            "account_id": `NeoniteBot${this.NumberOfBot}`,
                            "account_dn": `NeoniteBot`,
                            "member_state_updated": {
                                "urn:epic:member:joinrequestusers_j": `{\"users\":[{\"id\":\"NeoniteBot${this.NumberOfBot}\",\"dn\":\"NeoniteBot\",\"plat\":\"WIN\",\"data\":\"{\\\"CrossplayPreference_i\\\":\\\"1\\\",\\\"SubGame_u\\\":\\\"1\\\"}\"}]}`,
                                "urn:epic:member:dn_s": `NeoniteBot`
                            },
                            "joined_at": new Date(),
                            "updated_at": new Date()
                        })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())

        setTimeout(() => {
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": `NeoniteBot${this.NumberOfBot}`,
                                "account_dn": `NeoniteBot`,
                                "member_state_removed": [],
                                "member_state_updated": {
                                    "Default:Location_s": "PreLobby",
                                    "Default:MatchmakingLevel_U": "0",
                                    "Default:ZoneInstanceId_s": "",
                                    "Default:HomeBaseVersion_U": "1",
                                    "Default:HasPreloadedAthena_b": "false",
                                    "Default:NumAthenaPlayersLeft_U": "0",
                                    "Default:SpectateAPartyMemberAvailable_b": "false",
                                    "Default:UtcTimeStartedMatchAthena_s": "0001-01-01T00:00:00.000Z",
                                    "Default:AthenaCosmeticLoadout_j": `{\"AthenaCosmeticLoadout\":{\"characterDef\":\"/Game/Athena/Items/Cosmetics/Characters/CID_286_Athena_Commando_F_NeonCat.CID_286_Athena_Commando_F_NeonCat\",\"characterEKey\":\"\",\"backpackDef\":\"/Game/Athena/Items/Cosmetics/PetCarriers/PetCarrier_012_Drift_Fox.PetCarrier_012_Drift_Fox\",\"backpackEKey\":\"\",\"pickaxeDef\":\"/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_ID_288_RebirthMedicFemale.Pickaxe_ID_288_RebirthMedicFemale\",\"pickaxeEKey\":\"\",\"contrailDef\":\"/Game/Athena/Items/Cosmetics/Contrails/Trails_ID_087_TNTina.Trails_ID_087_TNTina\",\"contrailEKey\":\"\",\"scratchpad\":[]}}`,
                                    "Default:AthenaCosmeticLoadoutVariants_j": "{\"AthenaCosmeticLoadoutVariants\":{\"vL\":{\"AthenaPickaxe\":{\"i\":[{\"c\":\"Mesh\",\"v\":\"Stage0\",\"dE\":0}]},\"AthenaCharacter\":{\"i\":[{\"c\":\"Progressive\",\"v\":\"Stage2\",\"dE\":0},{\"c\":\"Material\",\"v\":\"Mat1\",\"dE\":0}]},\"AthenaBackpack\":{\"i\":[{\"c\":\"Material\",\"v\":\"Mat2\",\"dE\":0}]}}}}",
                                    "Default:GameReadiness_s": "NotReady",
                                    "Default:InGameReadyCheckStatus_s": "None",
                                    "Default:HiddenMatchmakingDelayMax_U": "0",
                                    "Default:ReadyInputType_s": "Count",
                                    "Default:CurrentInputType_s": "MouseAndKeyboard",
                                    "Default:AssistedChallengeInfo_j": "{\"AssistedChallengeInfo\":{\"questItemDef\":\"None\",\"objectivesCompleted\":0}}",
                                    "Default:FeatDefinition_s": "None",
                                    "Default:MemberSquadAssignmentRequest_j": "{\"MemberSquadAssignmentRequest\":{\"startingAbsoluteIdx\":-1,\"targetAbsoluteIdx\":-1,\"swapTargetMemberId\":\"INVALID\",\"version\":0}}",
                                    "Default:VoiceChatStatus_s": "PartyVoice",
                                    "Default:SidekickStatus_s": "None",
                                    "Default:ArbitraryCustomDataStore_j": "{\"ArbitraryCustomDataStore\":[]}",
                                    "Default:AthenaBannerInfo_j": `{\"AthenaBannerInfo\":{\"bannerIconId\":\"standardbanner2\",\"bannerColorId\":\"defaultcolor12\",\"seasonLevel\":69}}`,
                                    "Default:BattlePassInfo_j": "{\"BattlePassInfo\":{\"bHasPurchasedPass\":false,\"passLevel\":6,\"selfBoostXp\":0,\"friendBoostXp\":0}}",
                                    "Default:Platform_j": "{\"Platform\":{\"platformDescription\":{\"name\":\"WIN\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}",
                                    "Default:PlatformUniqueId_s": "INVALID",
                                    "Default:PlatformSessionId_s": "",
                                    "Default:CrossplayPreference_s": "OptedIn"
                                },
                                "joined_at": new Date(),
                                "updated_at": new Date()
                            })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())

            try {
                global.BotConfig = JSON.parse(fs.readFileSync('./config/NeoniteBot/config.json', 'utf8', function (err, data) {
                    if (err) global.BotConfig = false;
                }))
            } catch { }

            this.setAllBotsSkins(BotConfig.skin || "CID_286_Athena_Commando_F_NeonCat")
        }, 1000);
    }

    setPresice(member_state_updated, PartyId) {
        var counterLol = 0
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId || "LobbyBotPartyLMFAO",
                            "account_id": `NeoniteBot`,
                            "account_dn": `NeoniteBot`,
                            "member_state_removed": [],
                            "member_state_updated": member_state_updated,
                            "joined_at": new Date(),
                            "updated_at": new Date()
                        })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
        while (counterLol <= this.NumberOfBot) {
            counterLol = counterLol + 1
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": `NeoniteBot${counterLol}`,
                                "account_dn": `NeoniteBot`,
                                "member_state_removed": [],
                                "member_state_updated": member_state_updated,
                                "joined_at": new Date(),
                                "updated_at": new Date()
                            })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }
    }


    sendPresence(to, from, data) {
        this.ws.send(xmlbuilder.create({
            'presence': {
                '@to': to,
                '@xmlns': 'jabber:client',
                '@from': from,
                'status': {
                    "#text": data
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
    }

    setAllbotsEmote(eid, PartyId) {
        if (eid == "NONE" || eid == null) { this.botCurrentEmote = null; }
        var counterLol = 0
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId || "LobbyBotPartyLMFAO",
                            "account_id": `NeoniteBot`,
                            "account_dn": `NeoniteBot`,
                            "member_state_removed": [],
                            "member_state_updated": {
                                "Default:FrontendEmote_j": `{\"FrontendEmote\":{\"emoteItemDef\":\"/Game/Athena/Items/Cosmetics/Dances/${eid}.${eid}\",\"emoteEKey\":\"\",\"emoteSection\":-1}}`,
                            },
                            "joined_at": new Date(),
                            "updated_at": new Date()
                        })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())
        while (counterLol <= this.NumberOfBot) {
            counterLol = counterLol + 1
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": `NeoniteBot${counterLol}`,
                                "account_dn": `NeoniteBot`,
                                "member_state_removed": [],
                                "member_state_updated": {
                                    "Default:FrontendEmote_j": `{\"FrontendEmote\":{\"emoteItemDef\":\"/Game/Athena/Items/Cosmetics/Dances/${eid}.${eid}\",\"emoteEKey\":\"\",\"emoteSection\":-1}}`,
                                },
                                "joined_at": new Date(),
                                "updated_at": new Date()
                            })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }
    }

    setAllbotBackBling(path, PartyId) {
        try {
            global.BotConfig = JSON.parse(fs.readFileSync('./config/NeoniteBot/config.json', 'utf8', function (err, data) {
                if (err) global.BotConfig = false;
            }))
        } catch { }

        var counter = 0
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId || "LobbyBotPartyLMFAO",
                            "account_id": `NeoniteBot`,
                            "account_dn": "NeoniteBot",
                            "member_state_removed": [],
                            "member_state_updated": {
                                "Default:AthenaCosmeticLoadout_j": `{\"AthenaCosmeticLoadout\":{\"characterDef\":\"/Game/Athena/Items/Cosmetics/Characters/${BotConfig.skin}.${BotConfig.skin}\",\"characterEKey\":\"\",\"backpackDef\":\"${path}\",\"backpackEKey\":\"\",\"pickaxeDef\":\"/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_ID_288_RebirthMedicFemale.Pickaxe_ID_288_RebirthMedicFemale\",\"pickaxeEKey\":\"\",\"contrailDef\":\"/Game/Athena/Items/Cosmetics/Contrails/Trails_ID_087_TNTina.Trails_ID_087_TNTina\",\"contrailEKey\":\"\",\"scratchpad\":[]}}`,
                            },
                            "joined_at": new Date(),
                            "updated_at": new Date()
                    })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())

        while (counter <= this.NumberOfBot) {
            counter = counter + 1
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": `NeoniteBot`,
                                "account_dn": "NeoniteBot",
                                "member_state_removed": [],
                                "member_state_updated": {
                                    "Default:AthenaCosmeticLoadout_j": `{\"AthenaCosmeticLoadout\":{\"characterDef\":\"/Game/Athena/Items/Cosmetics/Characters/${BotConfig.skin}.${BotConfig.skin}\",\"characterEKey\":\"\",\"backpackDef\":\"${path}\",\"backpackEKey\":\"\",\"pickaxeDef\":\"/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_ID_288_RebirthMedicFemale.Pickaxe_ID_288_RebirthMedicFemale\",\"pickaxeEKey\":\"\",\"contrailDef\":\"/Game/Athena/Items/Cosmetics/Contrails/Trails_ID_087_TNTina.Trails_ID_087_TNTina\",\"contrailEKey\":\"\",\"scratchpad\":[]}}`,
                                },
                                "joined_at": new Date(),
                                "updated_at": new Date()
                        })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }
    }

    setAllBotsSkins(cid, PartyId) {
        var counter = 0
        var HeroID = cid.replace(/CID/g, 'HID')
        this.ws.send(xmlbuilder.create({
            'message': {
                '@xmlns': 'jabber:client',
                '@id': this.uuid,
                '@to': this.jid,
                '@from': 'xmpp-admin@prod.ol.epicgames.com',
                'body': {
                    "#text": JSON.stringify(
                        {
                            "sent": new Date(),
                            "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                            "revision": 0,
                            "ns": "Fortnite",
                            "party_id": PartyId || "LobbyBotPartyLMFAO",
                            "account_id": `NeoniteBot`,
                            "account_dn": "NeoniteBot",
                            "member_state_removed": [],
                            "member_state_updated": {
                                "Default:Location_s": "PreLobby",
                                "Default:CampaignHero_j": `{\"CampaignHero\":{\"heroItemInstanceId\":\"\",\"heroType\":\"/Game/Athena/Heroes/${HeroID}.${HeroID}\"}}`,
                                "Default:MatchmakingLevel_U": "0",
                                "Default:ZoneInstanceId_s": "",
                                "Default:HomeBaseVersion_U": "1",
                                "Default:HasPreloadedAthena_b": "false",
                                "Default:FrontendEmote_j": "{\"FrontendEmote\":{\"emoteItemDef\":\"None\",\"emoteEKey\":\"\",\"emoteSection\":-1}}",
                                "Default:NumAthenaPlayersLeft_U": "0",
                                "Default:SpectateAPartyMemberAvailable_b": "false",
                                "Default:UtcTimeStartedMatchAthena_s": "0001-01-01T00:00:00.000Z",
                                "Default:GameReadiness_s": "NotReady",
                                "Default:InGameReadyCheckStatus_s": "None",
                                "Default:HiddenMatchmakingDelayMax_U": "0",
                                "Default:ReadyInputType_s": "Count",
                                "Default:CurrentInputType_s": "MouseAndKeyboard",
                                "Default:AssistedChallengeInfo_j": "{\"AssistedChallengeInfo\":{\"questItemDef\":\"None\",\"objectivesCompleted\":0}}",
                                "Default:FeatDefinition_s": "None",
                                "Default:MemberSquadAssignmentRequest_j": "{\"MemberSquadAssignmentRequest\":{\"startingAbsoluteIdx\":-1,\"targetAbsoluteIdx\":-1,\"swapTargetMemberId\":\"INVALID\",\"version\":0}}",
                                "Default:VoiceChatStatus_s": "PartyVoice",
                                "Default:SidekickStatus_s": "None",
                                "Default:AthenaCosmeticLoadout_j": `{\"AthenaCosmeticLoadout\":{\"characterDef\":\"/Game/Athena/Items/Cosmetics/Characters/${cid}.${cid}\",\"characterEKey\":\"\",\"backpackDef\":\"/Game/Athena/Items/Cosmetics/PetCarriers/PetCarrier_012_Drift_Fox.PetCarrier_012_Drift_Fox\",\"backpackEKey\":\"\",\"pickaxeDef\":\"/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_ID_288_RebirthMedicFemale.Pickaxe_ID_288_RebirthMedicFemale\",\"pickaxeEKey\":\"\",\"contrailDef\":\"/Game/Athena/Items/Cosmetics/Contrails/Trails_ID_087_TNTina.Trails_ID_087_TNTina\",\"contrailEKey\":\"\",\"scratchpad\":[]}}`,
                                "Default:AthenaCosmeticLoadoutVariants_j": "{\"AthenaCosmeticLoadoutVariants\":{\"vL\":{\"AthenaPickaxe\":{\"i\":[{\"c\":\"Mesh\",\"v\":\"Stage0\",\"dE\":0}]},\"AthenaCharacter\":{\"i\":[{\"c\":\"Progressive\",\"v\":\"Stage2\",\"dE\":0},{\"c\":\"Material\",\"v\":\"Mat1\",\"dE\":0}]},\"AthenaBackpack\":{\"i\":[{\"c\":\"Material\",\"v\":\"Mat2\",\"dE\":0}]}}}}",
                                "Default:ArbitraryCustomDataStore_j": "{\"ArbitraryCustomDataStore\":[]}",
                                "Default:AthenaBannerInfo_j": "{\"AthenaBannerInfo\":{\"bannerIconId\":\"standardbanner2\",\"bannerColorId\":\"defaultcolor12\",\"seasonLevel\":69}}",
                                "Default:BattlePassInfo_j": "{\"BattlePassInfo\":{\"bHasPurchasedPass\":false,\"passLevel\":6,\"selfBoostXp\":0,\"friendBoostXp\":0}}",
                                "Default:Platform_j": "{\"Platform\":{\"platformDescription\":{\"name\":\"WIN\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}",
                                "Default:PlatformUniqueId_s": "INVALID",
                                "Default:PlatformSessionId_s": "",
                                "Default:CrossplayPreference_s": "OptedIn"
                            },
                            "joined_at": new Date(),
                            "updated_at": new Date()
                        })
                }
            }
        }).end().replace(`<?xml version="1.0"?>`, "").trim())

        while (counter <= this.NumberOfBot) {
            counter = counter + 1
            this.ws.send(xmlbuilder.create({
                'message': {
                    '@xmlns': 'jabber:client',
                    '@id': this.uuid,
                    '@to': this.jid,
                    '@from': 'xmpp-admin@prod.ol.epicgames.com',
                    'body': {
                        "#text": JSON.stringify(
                            {
                                "sent": new Date(),
                                "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                                "revision": 0,
                                "ns": "Fortnite",
                                "party_id": PartyId || "LobbyBotPartyLMFAO",
                                "account_id": `NeoniteBot${counter}`,
                                "account_dn": "NeoniteBot",
                                "member_state_removed": [],
                                "member_state_updated": {
                                    "Default:Location_s": "PreLobby",
                                    "Default:CampaignHero_j": `{\"CampaignHero\":{\"heroItemInstanceId\":\"\",\"heroType\":\"/Game/Athena/Heroes/${HeroID}.${HeroID}\"}}`,
                                    "Default:MatchmakingLevel_U": "0",
                                    "Default:ZoneInstanceId_s": "",
                                    "Default:HomeBaseVersion_U": "1",
                                    "Default:HasPreloadedAthena_b": "false",
                                    "Default:FrontendEmote_j": "{\"FrontendEmote\":{\"emoteItemDef\":\"None\",\"emoteEKey\":\"\",\"emoteSection\":-1}}",
                                    "Default:NumAthenaPlayersLeft_U": "0",
                                    "Default:SpectateAPartyMemberAvailable_b": "false",
                                    "Default:UtcTimeStartedMatchAthena_s": "0001-01-01T00:00:00.000Z",
                                    "Default:GameReadiness_s": "NotReady",
                                    "Default:InGameReadyCheckStatus_s": "None",
                                    "Default:HiddenMatchmakingDelayMax_U": "0",
                                    "Default:ReadyInputType_s": "Count",
                                    "Default:CurrentInputType_s": "MouseAndKeyboard",
                                    "Default:AssistedChallengeInfo_j": "{\"AssistedChallengeInfo\":{\"questItemDef\":\"None\",\"objectivesCompleted\":0}}",
                                    "Default:FeatDefinition_s": "None",
                                    "Default:MemberSquadAssignmentRequest_j": "{\"MemberSquadAssignmentRequest\":{\"startingAbsoluteIdx\":-1,\"targetAbsoluteIdx\":-1,\"swapTargetMemberId\":\"INVALID\",\"version\":0}}",
                                    "Default:VoiceChatStatus_s": "PartyVoice",
                                    "Default:SidekickStatus_s": "None",
                                    "Default:AthenaCosmeticLoadout_j": `{\"AthenaCosmeticLoadout\":{\"characterDef\":\"/Game/Athena/Items/Cosmetics/Characters/${cid}.${cid}\",\"characterEKey\":\"\",\"backpackDef\":\"/Game/Athena/Items/Cosmetics/PetCarriers/PetCarrier_012_Drift_Fox.PetCarrier_012_Drift_Fox\",\"backpackEKey\":\"\",\"pickaxeDef\":\"/Game/Athena/Items/Cosmetics/Pickaxes/Pickaxe_ID_288_RebirthMedicFemale.Pickaxe_ID_288_RebirthMedicFemale\",\"pickaxeEKey\":\"\",\"contrailDef\":\"/Game/Athena/Items/Cosmetics/Contrails/Trails_ID_087_TNTina.Trails_ID_087_TNTina\",\"contrailEKey\":\"\",\"scratchpad\":[]}}`,
                                    "Default:AthenaCosmeticLoadoutVariants_j": "{\"AthenaCosmeticLoadoutVariants\":{\"vL\":{\"AthenaPickaxe\":{\"i\":[{\"c\":\"Mesh\",\"v\":\"Stage0\",\"dE\":0}]},\"AthenaCharacter\":{\"i\":[{\"c\":\"Progressive\",\"v\":\"Stage2\",\"dE\":0},{\"c\":\"Material\",\"v\":\"Mat1\",\"dE\":0}]},\"AthenaBackpack\":{\"i\":[{\"c\":\"Material\",\"v\":\"Mat2\",\"dE\":0}]}}}}",
                                    "Default:ArbitraryCustomDataStore_j": "{\"ArbitraryCustomDataStore\":[]}",
                                    "Default:AthenaBannerInfo_j": "{\"AthenaBannerInfo\":{\"bannerIconId\":\"standardbanner2\",\"bannerColorId\":\"defaultcolor12\",\"seasonLevel\":69}}",
                                    "Default:BattlePassInfo_j": "{\"BattlePassInfo\":{\"bHasPurchasedPass\":false,\"passLevel\":6,\"selfBoostXp\":0,\"friendBoostXp\":0}}",
                                    "Default:Platform_j": "{\"Platform\":{\"platformDescription\":{\"name\":\"WIN\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}",
                                    "Default:PlatformUniqueId_s": "INVALID",
                                    "Default:PlatformSessionId_s": "",
                                    "Default:CrossplayPreference_s": "OptedIn"
                                },
                                "joined_at": new Date(),
                                "updated_at": new Date()
                            })
                    }
                }
            }).end().replace(`<?xml version="1.0"?>`, "").trim())
        }
    }
}
