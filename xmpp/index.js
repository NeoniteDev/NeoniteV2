const xmlparser = require('xml-parser')
const xmlbuilder = require("xmlbuilder")
const Client = require("./Client")
const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: process.env.xmppPort || 80 });


wss.on("connection", ws => {
    var client = new Client(ws) 

    ws.on("close", async (dick) => {
        if (xmppClients[client.id]) delete xmppClients[client.id]
    })
})

wss.on("error", ws => {})
