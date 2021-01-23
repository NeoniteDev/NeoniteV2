
const { v4: uuidv4 } = require("uuid");

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

//sigh
let partys = []

module.exports = (app) => {
    app.post("/party/api/v1/Fortnite/parties", (req, res) => {
        //return res.status(503).end()
        if (req.method != "POST") return res.status(405).json({ "errorCode": "errors.com.epicgames.common.method_not_allowed", "errorMessage": "Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.", "numericErrorCode": 1009, "originatingService": "Neonite", "intent": "prod" })
        var response = {
            "id": "LobbyBotPartyLMFAO",
            "created_at": new Date(),
            "updated_at": new Date(),
            "config": {
                "type": "DEFAULT",
                "joinability": "OPEN",
                "discoverability": "ALL",
                "sub_type": "default",
                "max_size": 16,
                "invite_ttl": 14400,
                "join_confirmation": false
            },
            "members": [
                {
                    "account_id": req.body.join_info.connection.id.split("@")[0],
                    "meta": {
                        "urn:epic:member:dn_s": req.body.join_info.meta["urn:epic:member:dn_s"]
                    },
                    "connections": [
                        {
                            "id": req.body.join_info.connection.id,
                            "connected_at": new Date(),
                            "updated_at": new Date(),
                            "yield_leadership": false,
                            "meta": {
                                "urn:epic:conn:platform_s": "WIN",
                                "urn:epic:conn:type_s": "game"
                            }
                        }
                    ],
                    "revision": 0,
                    "updated_at": new Date(),
                    "joined_at": new Date(),
                    "role": "CAPTAIN"
                }
            ],
            "applicants": [],
            "meta": {
                "urn:epic:cfg:party-type-id_s": "default",
                "urn:epic:cfg:build-id_s": "1:1:",
                "urn:epic:cfg:join-request-action_s": "Manual",
                "urn:epic:cfg:chat-enabled_b": "true"
            },
            "invites": [],
            "revision": 0
        }

        partys.push({
            accountId: req.body.join_info.connection.id.split("@")[0],
            jid: req.body.join_info.connection.id,
            partyId: "LobbyBotPartyLMFAO",
            CreatedAt: new Date()
        })

        res.json(response)
    })

    app.patch('/party/api/v1/Fortnite/parties/:partyId/members/:accountId/meta', (req, res) => {
        if (xmppClients[req.params.accountId].client.bCopyEmote && req.body.update)
            xmppClients[req.params.accountId].client.setPresice(req.body.update, req.params.partyId) 
        
        res.status(204).end()
    })

    app.post(`/party/api/v1/Fortnite/parties/:partyId/members/NeoniteBot/confirm`, (req, res) => {
        var accountID = req.headers.authorization.split("@")[1]
        xmppClients[accountID].client.JoinBot("LobbyBotPartyLMFAO")
        res.status(204).end()
    })

    app.post('/party/api/v1/Fortnite/parties/*/members/*/conferences/connection', (req, res) => {
        res.status(410).end()
    })

    app.post(`/party/api/v1/Fortnite/parties/:partyId/members/*/confirm`, (req, res) => {
        res.status(403).end()
    })

    app.all("/party/api/v1/Fortnite/parties/:partyId", (req, res) => {
        if (req.method != "PATCH" ? req.method != "GET" ? req.method != "DELETE" ? true : false : false : false) return res.status(405).json(errors.method("party", "prod"))

        switch (req.method) {
            case "PATCH":
                res.status(204).send()
                break;
            case "GET":
                var party = partys.filter(x => x.partyId == req.params.partyId);

                return res.json({
                    "id": req.params.partyId,
                    "created_at": new Date(),
                    "updated_at": new Date(),
                    "config": {
                        "type": "DEFAULT",
                        "joinability": "OPEN",
                        "discoverability": "ALL",
                        "sub_type": "default",
                        "max_size": 16,
                        "invite_ttl": 14400,
                        "join_confirmation": false
                    },
                    "members": [
                        {
                            "account_id": party.accountId,
                            "meta": {
                                "urn:epic:member:dn_s": party.accountId
                            },
                            "connections": [
                                {
                                    "id": party.jid,
                                    "connected_at": new Date(),
                                    "updated_at": new Date(),
                                    "yield_leadership": false,
                                    "meta": {
                                        "urn:epic:conn:platform_s": "WIN",
                                        "urn:epic:conn:type_s": "game"
                                    }
                                }
                            ],
                            "revision": 0,
                            "updated_at": new Date(),
                            "joined_at": new Date(),
                            "role": "CAPTAIN"
                        }
                    ],
                    "applicants": [],
                    "meta": {
                        "urn:epic:cfg:party-type-id_s": "default",
                        "urn:epic:cfg:build-id_s": "1:1:",
                        "urn:epic:cfg:join-request-action_s": "Manual",
                        "urn:epic:cfg:chat-enabled_b": "true"
                    },
                    "invites": [],
                    "revision": 0
                })
                break;
            case "DELETE":
                partys.splice(partys.findIndex(x => x == partys.filter(x => x.partyId == req.params.partyId)), 1)
                return res.status(204).end()
                break;
        }
    })

    app.all('/presence/api/v1/*', (req, res) => {
        res.status(204).send()
    })

    // /party/api/v1/Fortnite/parties/LobbyBotPartyLMFAO/members/BeatYT3 

    app.delete('/party/api/v1/Fortnite/parties/*/members/:accountId', (req, res) => {
        if (xmppClients[req.params.accountId].client) {
            xmppClients[req.params.accountId].client.NumberOfBot = 0
        }
        res.status(204).end()
    })

    app.get('/party/api/v1/Fortnite/user/:accountId', (req, res) => {
        var party = partys.filter(x => x.accountId == req.params.accountId);
        res.json({
            "current": [{
                "id": "LobbyBotPartyLMFAO",
                "created_at": party.CreatedAt,
                "updated_at": new Date(),
                "config": {
                    "type": "DEFAULT",
                    "joinability": "INVITE_AND_FORMER",
                    "discoverability": "INVITED_ONLY",
                    "sub_type": "default",
                    "max_size": 16,
                    "invite_ttl": 14400,
                    "join_confirmation": true
                },
                "members": [{
                    "account_id": party.accountId,
                    "meta": {
                        "urn:epic:member:dn_s": party.accountId,
                        "internal:voicechatmuted_b": "true",
                        "VoiceChat:required-implementation_s": "EOSVoiceChat"
                    },
                    "connections": [{
                        "id": party.jid,
                        "connected_at": party.CreatedAt,
                        "updated_at": new Date(),
                        "yield_leadership": false,
                        "meta": {
                            "urn:epic:conn:platform_s": "WIN",
                            "urn:epic:conn:type_s": "game"
                        }
                    }],
                    "revision": 0,
                    "updated_at": new Date(),
                    "joined_at": party.CreatedAt,
                    "role": "CAPTAIN"
                }],
                "applicants": [],
                "meta": {
                    "Default:TheaterId_s": "",
                    "Default:AllowJoinInProgress_b": "false",
                    "Default:PartyIsJoinedInProgress_b": "false",
                    "Default:TileStates_j": "{\"TileStates\":[]}",
                    "Default:RawSquadAssignments_j": `{\"RawSquadAssignments\":[{\"memberId\":\"${party.accountId}\",\"absoluteMemberIdx\":0}]}`,
                    "Default:PartyState_s": "BattleRoyaleView",
                    "Default:PlaylistData_j": "{\"PlaylistData\":{\"playlistName\":\"Playlist_DefaultSquad\",\"tournamentId\":\"\",\"eventWindowId\":\"\",\"regionId\":\"NONE\"}}",
                    "Default:MatchmakingState_s": "NotMatchmaking",
                    "urn:epic:cfg:party-type-id_s": "default",
                    "urn:epic:cfg:build-id_s": "1:3:14945638",
                    "urn:epic:cfg:presence-perm_s": "Noone",
                    "VoiceChat:implementation_s": "EOSVoiceChat",
                    "Default:CustomMatchKey_s": "",
                    "urn:epic:cfg:accepting-members_b": "false",
                    "Default:LFGTime_s": "0001-01-01T00:00:00.000Z",
                    "urn:epic:cfg:join-request-action_s": "Manual",
                    "Default:PrimaryGameSessionId_s": "",
                    "urn:epic:cfg:invite-perm_s": "Anyone",
                    "Default:PrivacySettings_j": "{\"PrivacySettings\":{\"partyType\":\"Private\",\"partyInviteRestriction\":\"AnyMember\",\"bOnlyLeaderFriendsCanJoin\":false}}",
                    "urn:epic:cfg:not-accepting-members-reason_i": "7",
                    "Default:ZoneTileIndex_U": "-1",
                    "Default:GameSessionKey_s": "",
                    "Default:MatchmakingResult_s": "NoResults",
                    "urn:epic:cfg:chat-enabled_b": "true",
                    "Default:AthenaSquadFill_b": "true",
                    "Default:ZoneInstanceId_s": "",
                    "Default:PlatformSessions_j": "{\"PlatformSessions\":[]}",
                    "Default:PartyMatchmakingInfo_j": "{\"PartyMatchmakingInfo\":{\"buildId\":-1,\"hotfixVersion\":-1,\"regionId\":\"\",\"playlistName\":\"None\",\"playlistRevision\":0,\"tournamentId\":\"\",\"eventWindowId\":\"\",\"linkCode\":\"\"}}",
                    "urn:epic:cfg:can-join_b": "true",
                    "Default:LobbyConnectionStarted_b": "false",
                    "Default:SessionIsCriticalMission_b": "false"
                },
                "invites": [],
                "revision": 0
            }],
            "pending": [],
            "invites": [],
            "pings": []
        });
    });


    app.post('/party/api/v1/Fortnite/user/:accountId/pings/:pingerId', (req, res) => {
        res.json({
            sent_by: req.params.pingerId,
            sent_to: req.params.accountId,
            sent_at: new Date(),
            expires_at: new Date().addHours(1),
            meta: {}
        })
        /*if (req.params.accountId == "NeoniteBot") {*/
        xmppClients[req.params.pingerId].client.SendBotConfirm("LobbyBotPartyLMFAO")
        //}
    })
    //http://localhost:5595/party/api/v1/Fortnite/parties/LobbyBotParty/members/BeatYT2/join
    app.post('/party/api/v1/Fortnite/parties/:PartyId/members/*/join', (req, res) => {
        res.json({ "status": "JOINED", "party_id": req.params.PartyId })
    })

}