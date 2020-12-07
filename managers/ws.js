const WebSocket = require('ws');

module.exports = (app) => {
const wss = new WebSocket.Server({
    port: 0
});

var matchmaking = true;

wss.on('connection', function connection(ws) {
    ws.send(JSON.stringify({
        "payload": {
            "state": ""
        },
        "name": ""
    }));

    ws.send(JSON.stringify({
        "payload": {
            "totalPlayers": 0,
            "connectedPlayers": 0,
            "state": ""
        },
        "name": ""
    }));

    ws.send(JSON.stringify({
        "payload": {
            "ticketId": "",
            "queuedPlayers": 0,
            "estimatedWaitSec": 0,
            "status": {},
            "state": ""
        },
        "name": ""
    }));

    ws.send(JSON.stringify({
        "payload": {
            "matchId": "",
            "state": ""
        },
        "name": ""
    }));

    ws.send(JSON.stringify({
        "payload": {
            "matchId": "",
            "sessionId": "",
            "joinDelaySec": 0
        },
        "name": ""
    }));
});
}