// require('./tcp-xmpp');
const xmlparser = require('xml-parser')
const builder = require("xmlbuilder")
const WebSocket = require('ws');
const uuid = require("uuid");
const Profile = require("../profile");
const { default: axios } = require('axios');

var botCid = "CID_286_Athena_Commando_F_NeonCat"
var botPlatform = "WIN" // I'm not sure if I have fully implemented this (I doubt) - Milxnor 
/*
Windows = WIN
Mac = MAC
Xbox = XBL
PlayStation = PSN
Switch = SWT
iOS = IOS
Android = AND
*/

function XmppPrint(msg, type) {
    if (type == 1 || msg instanceof Error) {
        return console.error(`[\x1b[33mXMPP\x1b[0m] Error: ${msg}\n`)
    }
    console.log(`[\x1b[33mXMPP\x1b[0m]: ${msg}`)
}

if (port == 80) {
    return XmppPrint("Cannot Listen on Port 80 since its the same port as the Server. Please change it or the bot won't Work", 1)
}
var clients = []


const wss = new WebSocket.Server({ port: process.env.xmppPort || 80 });

wss.on('listening', ws => {
    XmppPrint(`Listening on Port ${wss.options.port}`)
})

wss.on("connection", ws => {

    ws.on('close', () => {
        if (global.xmppClients.find(x => x.Ws == ws)) {
            global.xmppClients.splice(global.xmppClients.findIndex(x => x == global.xmppClients.find(x2 => x2.Ws == ws)))
        }
    })

    XmppPrint("New Connection")
    var resource
    var accountId
    var token
    var Jid = ""
    var UUID = uuid.v4()

    var AuthType

    var BotJid = `NeoniteBot@neonite.dev/V2:Fortnite:WIN::Neonite-Bot-By-BeatYT`

    //SendMessage("pogu")

    /*function Sendmessage(body) {
        
    }*/
    ws.on('message', (msg) => {
        //console.log(message)
        var doc = xmlparser(msg);
        if (!doc) {
            return ws.send(builder.create("stream:error")
                .att("xmlns:stream", "http://etherx.jabber.org/streams")
                .ele("not-well-formed")
                .att("xmlns", "urn:ietf:params:xml:ns:xmpp-streams")
                .up()
                .toString()
            )
        }

        if (!doc.root) {
            ws.send(builder.create("stream:error")
                .att("xmlns:stream", "http://etherx.jabber.org/streams")
                .ele("not-well-formed")
                .att("xmlns", "urn:ietf:params:xml:ns:xmpp-streams")
                .up()
                .toString()
            )
            functions.Close();
            return
        }

        switch (doc.root.name) {

            case "open":
                var build = builder.create('open').att("id", UUID).att('xmlns', 'urn:ietf:params:xml:ns:xmpp-framing').att('from', 'neonite.dev')
                ws.send(build.toString());


                //funny xmpp
                ws.send(builder.create('stream:features')
                    .att("xmlns:stream", "http://etherx.jabber.org/streams")
                    .ele("ver").att('xmlns', "urn:xmpp:features:rosterver")
                    .up()
                    .ele("session").att("xmlns", "urn:ietf:params:xml:ns:xmpp-session")
                    .up()
                    .ele("bind")
                    .att("xmlns", "urn:ietf:params:xml:ns:xmpp-bind")
                    .up()
                    .ele("mechanisms")
                    .att("xmlns", 'urn:ietf:params:xml:ns:xmpp-sasl')
                    .ele("mechanism").txt("PLAIN")
                    .up()
                    .up()
                    .ele("auth")
                    .att("xmlns", "http://jabber.org/features/iq-auth")
                    .up()
                    .toString()
                )

                break;

            case "iq":

                switch (doc.root.attributes.id) {
                    case "_xmpp_auth1":
                        {
                            if (AuthType == "_xmpp_bind1") {
                                Close()
                                return;
                            }
                            var query = doc.root.children.find(x => x.name == "query")
                            //<stream:error xmlns:stream="http://etherx.jabber.org/streams"><not-well-formed xmlns="urn:ietf:params:xml:ns:xmpp-streams"/></stream:error>
                            if (!query) {
                                return ws.send(builder.create("stream:error")
                                    .att("xmlns:stream", "http://etherx.jabber.org/streams")
                                    .ele("not-well-formed")
                                    .att("xmlns", "urn:ietf:params:xml:ns:xmpp-streams")
                                    .up()
                                    .toString()
                                )
                            }
                            resource = query.children.find(x => x.name == "resource").content
                            accountId = query.children.find(x => x.name == "username").content
                            token = query.children.find(x => x.name == "password").content
                            Jid = `${accountId}@neonite.dev/${resource}`

                            var bIsValid = resource && accountId && token && Jid
                            if (!bIsValid) {
                                return ws.send(builder.create("stream:error")
                                    .att("xmlns:stream", "http://etherx.jabber.org/streams")
                                    .ele("not-well-formed")
                                    .att("xmlns", "urn:ietf:params:xml:ns:xmpp-streams")
                                    .up()
                                    .toString()
                                )
                            }

                            //<iq type="result" id="_xmpp_auth1" xmlns="jabber:client">Authentication successful.</iq>
                            ws.send(builder.create('iq')
                                .att('type', 'result')
                                .att('xmlns', 'jabber:client')
                                .att('id', '_xmpp_auth1')
                                .txt("Authentication successful.")
                                .toString()
                            );

                            global.xmppClients.push({
                                accountId: accountId,
                                resource: resource,
                                token: token,
                                Jid: Jid,
                                Ws: ws,
                                uuid: UUID,
                                Settings: {
                                    bCopyEmote: true,
                                    botNumber: 0
                                },
                                functions: functions
                            })
                            AuthType = "_xmpp_auth1"
                            break;
                        }

                    case "_xmpp_bind1":
                        if (AuthType == "_xmpp_auth1") {
                            Close()
                            return;
                        }
                        resource = doc.root.children.find(x => x.name == "bind").children.find(x => x.name == "resource").content
                        Jid = accountId + "@neonite.dev/" + resource;
                        /*

                        <iq xmlns="jabber:client" from="neonite.dev"
                            to="BeatYT@neonite.dev/V2:Fortnite:WIN::B1D5CD0B469E2ADB22F639BFB8620D0D" 
                            type="result" id="_xmpp_bind1">
                            <bind xmlns="urn:ietf:params:xml:ns:xmpp-bind">
                                <jid>BeatYT@neonite.dev/V2:Fortnite:WIN::B1D5CD0B469E2ADB22F639BFB8620D0D</jid>
                            </bind>
                        </iq>

                        */

                        ws.send(builder.create('iq')
                            .att("xmlns", "jabber:client")
                            .att("to", Jid)
                            .att("from", "neonite.dev")
                            .att("type", "result")
                            .att("id", '_xmpp_bind1')
                            .ele("bind")
                            .att("xmlns", "urn:ietf:params:xml:ns:xmpp-bind")
                            .ele("jid").txt(Jid)
                            .up()
                            .up()
                            .toString()
                        );

                        global.xmppClients.push({
                            accountId: accountId,
                            resource: resource,
                            token: token,
                            Jid: Jid,
                            Ws: ws,
                            uuid: UUID,
                            Settings: {
                                bCopyEmote: true,
                                botNumber: 0
                            },
                            functions: functions
                        })

                        AuthType = "_xmpp_bind1"
                        break;

                    case null:
                        Close()
                        break;

                    default:
                        ws.send(builder.create('iq')
                            .att('type', 'result')
                            .att("from", "neonite.dev")
                            .att('xmlns', 'jabber:client')
                            .att('to', Jid)
                            .att('id', doc.root.attributes.id)
                            .toString()
                        );
                        break;

                }



                break;

            case "auth": {
                if (AuthType == "_xmpp_auth1") {
                    Close()
                    return;
                }
                var auth = Buffer.from(doc.root.content, 'base64').toString().split('\u0000').splice(1)
                if (!auth) {
                    ws.send(builder.create('failure')
                        .att('xmlns', 'urn:ietf:params:xml:ns:xmpp-sasl')
                        .ele("not-authorized")
                        .up()
                        .toString()
                    )
                    return;
                }

                accountId = auth[0]
                token = auth[1]
                bIsAuth = true;

                ws.send(builder.create("success")
                    .att("xmlns", "urn:ietf:params:xml:ns:xmpp-sasl")
                    .toString()
                )

                break;
            }

            case "message": {
                var client = global.xmppClients.find(x => x.resource == resource)
                var body = doc.root.children.find(x => x.name == "body").content

                if (!body.startsWith('!')) return;
                var command = body;
                var commandBody = "";
                try {
                    command = body.split(" ")[0]
                    commandBody = body.replace(command + ' ', "");
                } catch {
                    command = body;
                    commandBody = null
                }

                switch (command.replace("!", '').toLowerCase()) {

                    case "gift":
                        const profiledata = Profile.readProfile(accountId, "common_core");

                        if (!profiledata) {
                            return close();
                        }

                        Profile.bumpRvn(profiledata);
                        const body = encodeURI(commandBody);

                        axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${body}&matchMethod=contains`).then(response => {
                            const body = response.data.data;

                            profiledata.items[uuid.v4()] = {
                                "templateId": "GiftBox:GB_GiftWrap1",
                                "attributes": {
                                    "max_level_bonus": 0,
                                    "fromAccountId": "NeoniteBot",
                                    "lootList": [
                                        {
                                            "itemProfile": "athena",
                                            "itemType": `${body.type.backendValue}:${body.id}`,
                                            "itemGuid": `${body.type.backendValue}:${body.id}`,
                                            "quantity": 1
                                        }
                                    ],
                                    "level": 1,
                                    "item_seen": false,
                                    "xp": 0,
                                    "giftedOn": new Date(),
                                    "params": {
                                        "userMessage": "Thanks for using Neonite <3"
                                    },
                                    "favorite": false
                                },
                                "quantity": 1
                            }
                            Profile.saveProfile(accountId, "common_core", profiledata);

                            functions.SendMessage(JSON.stringify({
                                type: 'com.epicgames.gift.received',
                                payload: "",
                                timestamp: new Date()
                            }))
                        }).catch(error => {
                            if (error.response && error.response.status == 404) {
                                functions.SendChat("Cosmetic Not found");
                            }
                            else {
                                throw error;
                            }
                        })

                        break;

                    case "copy":
                        client.Settings.bCopyEmote = !client.Settings.bCopyEmote

                        functions.SendChat(`Copy is turned ${client.Settings.bCopyEmote == true ? "on" : "off"}`)
                        break;

                    case "addbot":
                        functions.AddBot(botCid)
                        break;

                    case "add4bot":

                        setTimeout(() => {
                            functions.AddBot(botCid)
                        }, 100);

                        setTimeout(() => {
                            functions.AddBot(botCid)
                        }, 1500);

                        setTimeout(() => {
                            functions.AddBot(botCid)
                        }, 2000);

                        setTimeout(() => {
                            functions.AddBot(botCid)
                        }, 2500);
                        break;

                    case "maxbot":
                        var count = 0;

                        var interval = setInterval(() => {
                            functions.AddBot(botCid)
                            count++;
                            if (count >= 15) {
                                clearInterval(interval);
                            }
                        }, 500);
                        break;

                    default:
                        break;
                }

            }

            case "presence":
                if (doc.root.attributes.to && doc.root.attributes.to.startsWith("Party-")) return;

                try {
                    ws.send(builder.create('presence')
                        .att('to', Jid)
                        .att("from", Jid)
                        .att('xmlns', "jabber:client")
                        .ele("status").txt(doc.root.children.find(x => x.name == 'status').content).up().toString());
                }
                catch { }

                ws.send(builder.create("presence")
                    .att('to', Jid)
                    .att("from", BotJid)
                    .att('xmlns', "jabber:client")
                    .ele("status").txt(JSON.stringify(
                        {
                            "Status": "Neonite Lobby Bot",
                            "bIsPlaying": false,
                            "bIsJoinable": true,
                            "bHasVoiceSupport": false,
                            "SessionId": "",
                            "ProductName": "Fortnite",
                            "Properties": {
                                "KairosProfile_j": {
                                    "appInstalled": "init",
                                    "avatar": "cid_527_athena_commando_f_streetfashionred",
                                    "avatarBackground": "[]"
                                }
                            }
                        })
                    )
                    .up()
                    .toString()
                )

                break;

            case "close":
                functions.Close()
                break;

            default:
                break;
        }
    })

    var functions = {

        Close() {
            ws.send(builder.create('close').att('xmlns', 'urn:ietf:params:xml:ns:xmpp-framing').toString());
            ws.close();
        },

        SendChat(Message) {
            ws.send(builder.create("message")
                .att("xmlns", "jabber:client")
                .att("type", "chat")
                .att("to", Jid)
                .att("from", BotJid)
                .ele('body')
                .txt(Message)
                .up()
                .toString()
            )
        },

        SendMessage(body) {

            ws.send(builder.create("message")
                .att('xmlns', "jabber:client")
                .att('to', Jid)
                .att('id', UUID)
                .att("from", "xmpp-admin@neonite.dev")
                .ele('body')
                .txt(body)
                .up()
                .toString()
            )
        },

        AddBot(cid) {
            var HeroID = "HID_286_Athena_Commando_F_NeonCat"
            var BotNumber = global.xmppClients.find(x => x.Ws == ws).Settings.botNumber
            functions.SendMessage(JSON.stringify(
                {
                    "sent": new Date(),
                    "type": "com.epicgames.social.party.notification.v0.MEMBER_JOINED",
                    "connection": {
                        "id": `NeoniteBot${BotNumber != 0 ? BotNumber : ""}@neonite.dev/V2:Fortnite:WIN::Neonite-Bot-By-BeatYT${BotNumber != 0 ? BotNumber : ""}`,
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
                    "party_id": "LobbyBotPartyLMFAO",
                    "account_id": `NeoniteBot${BotNumber != 0 ? BotNumber : ""}`,
                    "account_dn": "NeoniteBot",
                    "member_state_updated": {
                        "urn:epic:member:joinrequestusers_j": JSON.stringify({ "users": [{ "id": `NeoniteBot${BotNumber != 0 ? BotNumber : ""}`, "dn": "NeoniteBot", "plat": `WIN`, "data": JSON.stringify({ "CrossplayPreference_i": "1", "SubGame_u": "1" }) }] }),
                        "urn:epic:member:dn_s": `NeoniteBot`,
                    },
                    "joined_at": new Date(),
                    "updated_at": new Date()
                }
            ))

            functions.SendMessage(JSON.stringify(
                {
                    "sent": new Date(),
                    "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                    "revision": 0,
                    "ns": "Fortnite",
                    "party_id": "LobbyBotPartyLMFAO",
                    "account_id": `NeoniteBot${BotNumber != 0 ? BotNumber : ""}`,
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
                        "Default:Platform_j": `{\"Platform\":{\"platformDescription\":{\"name\":\"${botPlatform}\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}`,
                        "Default:PlatformUniqueId_s": "INVALID",
                        "Default:PlatformSessionId_s": "",
                        "Default:CrossplayPreference_s": "OptedIn"
                    },
                    "joined_at": new Date(),
                    "updated_at": new Date()
                })


            )
            functions.SendMessage(JSON.stringify(
                {
                    "sent": new Date(),
                    "type": "com.epicgames.social.party.notification.v0.MEMBER_STATE_UPDATED",
                    "revision": 0,
                    "ns": "Fortnite",
                    "party_id": "LobbyBotPartyLMFAO",
                    "account_id": `NeoniteBot${BotNumber != 0 ? BotNumber : ""}`,
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
                        "Default:AthenaCosmeticLoadout_j": JSON.stringify({
                            "AthenaCosmeticLoadout": {
                                "characterDef": `/Game/Athena/Items/Cosmetics/Characters/${cid}.${cid}`,
                                "characterEKey": "",
                                "backpackDef": "None",
                                "backpackEKey": "",
                                "pickaxeDef": "None",
                                "pickaxeEKey": "",
                                "contrailDef": "None",
                                "contrailEKey": "",
                                "scratchpad": [

                                ]
                            }
                        }),
                        "Default:AthenaCosmeticLoadoutVariants_j": JSON.stringify({
                            "AthenaCosmeticLoadoutVariants": {
                                "vL": {
                                    "AthenaPickaxe": {
                                        "i": []
                                    },
                                    "AthenaCharacter": {
                                        "i": []
                                    },
                                    "AthenaBackpack": {
                                        "i": []
                                    }
                                }
                            }
                        }),
                        "Default:ArbitraryCustomDataStore_j": "{\"ArbitraryCustomDataStore\":[]}",
                        "Default:AthenaBannerInfo_j": "{\"AthenaBannerInfo\":{\"bannerIconId\":\"standardbanner2\",\"bannerColorId\":\"defaultcolor12\",\"seasonLevel\":69}}",
                        "Default:BattlePassInfo_j": "{\"BattlePassInfo\":{\"bHasPurchasedPass\":false,\"passLevel\":6,\"selfBoostXp\":0,\"friendBoostXp\":0}}",
                        "Default:Platform_j": `{\"Platform\":{\"platformDescription\":{\"name\":\"${botPlatform}\",\"platformType\":\"DESKTOP\",\"onlineSubsystem\":\"None\",\"sessionType\":\"\",\"externalAccountType\":\"\",\"crossplayPool\":\"DESKTOP\"}}}`,
                        "Default:PlatformUniqueId_s": "INVALID",
                        "Default:PlatformSessionId_s": "",
                        "Default:CrossplayPreference_s": "OptedIn"
                    },
                    "joined_at": new Date(),
                    "updated_at": new Date()
                }

            ))
            global.xmppClients.find(x => x.Ws == ws).Settings.botNumber = global.xmppClients.find(x => x.Ws == ws).Settings.botNumber + 1

        }
    }
})

wss.on("error", error => {

})


