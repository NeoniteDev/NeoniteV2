const xmlparser = require('xml-parser')
const xmlbuilder = require("xmlbuilder")
const Client = require("./Client")
const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: process.env.xmppPort || 80 });


wss.on("connection", ws => {
    var client = new Client(ws) 

    ws.on("close", async (lol) => {
        var friends = await Friends.findOne({id: client.id})

        if (friends) {
            friends.accepted.forEach(friend => {
                if (xmppClients[friend.id]) {
                    xmppClients[friend.id].client.ws.send(xmlbuilder.create({
                        'presence': {
                            '@xmlns': 'jabber:client',
                            '@to': xmppClients[friend.id].client.jid,
                            '@from': client.jid,
                            '@type': "unavailable",
                            'status': {
                                "#text": {
                                    "bHasVoiceSupport":false,
                                    "bIsJoinable":false,
                                    "bIsPlaying":false,
                                    "Properties": {
                                        "bInPrivate": true
                                    },
                                    "SessionId":"","Status":"Playing Battle Royale - 1 / 16"}
                            }
                        }
                    }).end().replace(`<?xml version="1.0"?>`, "").trim())            
                }
            })
                
        }

        if (client.sender) {
            clearInterval(client.sender)
        }
        if (xmppClients[client.id]) delete xmppClients[client.id]
    })
})

wss.on("error", ws => {})