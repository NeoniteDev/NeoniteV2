const axios = require('axios');
const path = require('path');
const crypto = require("crypto");
const fs = require('fs');
const jwt = require("jsonwebtoken");
const { setTimeout } = require('timers');
const errors = require('./../structs/errors');
const { ErrDef, ApiException } = require('./../structs/errors');
var builder = require('xmlbuilder')

module.exports = (app) => {
	//lightswitch
	app.get('/lightswitch/api/service/bulk/status', (req, res) => {
		res.json([{
			"serviceInstanceId": "fortnite",
			"status": "UP",
			"message": "GO AWAY KID",
			"maintenanceUri": null,
			"allowedActions": ["PLAY", "DOWNLOAD"],
			"banned": false
		}]);
	});

	//external auth
	app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
		res.json([])
	});

	app.post("/api/v1/user/setting", (req, res) => {
		res.json([
			{
				"accountId": req.body.accountId,
				"key": "avatar",
				"value": "cid_003_athena_commando_f_default"
			},
			{
				"accountId": req.body.accountId,
				"key": "avatarBackground",
				"value": "[\"#B4F2FE\",\"#00ACF2\",\"#005679\"]"
			},
			{
				"accountId": req.body.accountId,
				"key": "appInstalled",
				"value": "init"
			}])
	})

	app.delete("/friends/api/v1/:accountId/friends/NeoniteBot", (req, res) => {
		res.status(403).json({ "errorCode": "errors.com.epicgames.Neonite.common.forbidden", "errorMessage": "You cannot remove the bot", "messageVars": [], "numericErrorCode": 14004, "originatingService": "party", "intent": "prod" })
		var client = global.xmppClients.find(x => x.accountId == req.params.accountId);
		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))
	})


	app.get('/api/v1/assets/Fortnite/:version/', (req, res) => {
		res.json([])
	});

	app.get("/fortnite/api/game/v2/world/info", (req, res) => res.json({}))

	app.get("/friends/api/v1/*/blocklist", (req, res) => { res.json([]) })

	app.get("/eulatracking/api/public/agreements/fn/account/*", (req, res) => { res.status(204).end() })

	app.get("/friends/api/v1/*/recent/fortnite", (req, res) => { res.json([]) })

	app.get("/catalog/api/shared/bulk/offers", (req, res) => { res.json({}) })

	app.get('/friends/api/v1/:accountId/summary', (req, res) => {
		res.json({
			"friends": [{
				"accountId": "NeoniteBot",
				"groups": [],
				"mutual": 0,
				"alias": "",
				"note": "",
				"favorite": true,
				"created": "2021-01-17T16:42:04.125Z"
			}],
			"incoming": [],
			"suggested": [],
			"blocklist": [],
			"settings": {
				"acceptInvites": "public"
			},
			"limitsReached": {
				"incoming": false,
				"outgoing": false,
				"accepted": false
			}
		})
	})


	//version check
	app.get('/fortnite/api/v2/versioncheck/:version', (req, res) => {
		res.json({ "type": "NO_UPDATE" })
	});

	//privacy
	app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {
		res.json({
			"accountId": req.params.accountId,
			"optOutOfPublicLeaderboards": false
		})
	});

	app.post('/api/v1/assets/Fortnite/:version/:netcl', (req, res) => {
		res.json({
			"FortPlaylistAthena": {
				"meta": {
					"promotion": 0
				},
				"assets": {}
			}
		})
	});

	app.post("/friends/api/v1/:accountId/blocklist/NeoniteBot", (req, res) => {
		res.status(403).json({ "errorCode": "errors.com.epicgames.Neonite.common.forbidden", "errorMessage": "You cannot remove the bot", "messageVars": [], "numericErrorCode": 14004, "originatingService": "party", "intent": "prod" })

		var client = global.xmppClients.find(x => x.accountId == req.params.accountId);
		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))


	})

	app.get("/account/api/public/account/displayName/:displayName", (req, res) => {
		res.json({
			"id": req.params.displayName,
			"displayName": req.params.displayName,
			"externalAuths": {}
		})

		if (req.params.displayName != "NeoniteBot") return;

		var token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")
		var client = global.xmppClients.find(x => x.token == token);

		if (!client) return;

		client.functions.SendMessage(JSON.stringify({
			"type": "FRIENDSHIP_REQUEST",
			"timestamp": new Date(),
			"from": "NeoniteBot",
			"to": req.params.accountId,
			"status": "ACCEPTED"
		}))

		client.functions.SendMessage(JSON.stringify({
			"payload": {
				"accountId": "NeoniteBot",
				"status": "ACCEPTED",
				"direction": "INBOUND",
				"created": new Date(),
				"favorite": false
			},
			"type": "com.epicgames.friends.core.apiobjects.Friend",
			"timestamp": new Date()
		}))
	})

	app.post("/friends/api/v1/:accountId/friends/NeoniteBot", (req, res) => {
		res.status(204).send()
	})

	app.all("/fortnite/api/game/v2/matchmakingservice/ticket/player/:accountId", (req, res) => {
		res.status(204).end()
	})

	//waiting room
	app.get('/waitingroom/api/waitingroom', (req, res) => {
		res.status(204).end();
	});

	//grant access
	app.post('/fortnite/api/game/v2/grant_access/:accountId', (req, res) => {
		res.status(204).end();
	});

	//enabled features
	app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
		res.json([])
	});

	//receipt
	app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
		res.json([])
	});

	//blocklist
	app.get('/friends/api/public/blocklist/:accountId', (req, res) => {
		res.json({
			blockedUsers: []
		})
	});

	//friends setting
	app.get('/friends/api/v1/:accountId/settings', (req, res) => {
		res.json({
			acceptInvites: "public"
		})
	});

	//recent players
	app.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (req, res) => {
		res.json([]);
	});

	//friends list
	app.get('/friends/api/public/friends/:accountId', (req, res) => {
		res.json([
			{
				accountId: 'NeoniteBot',
				status: 'ACCEPTED',
				direction: 'INBOUND',
				created: '2018-12-06T04:46:01.296Z',
				favorite: false
			},
			{
				accountId: req.params.accountId,
				status: 'ACCEPTED',
				direction: 'INBOUND',
				created: '2018-12-06T04:46:01.296Z',
				favorite: false
			}
		]);
	});

	//datarouter
	app.post('/datarouter/api/v1/public/*', (req, res) => {
		res.status(204).end();
	});

	//presence ?
	app.get('/presence/api/v1/_/:accountId/settings/subscriptions', (req, res) => { res.status(204).end(); });
	app.get('/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count', (req, res) => { res.status(204).end(); });

	app.get('/socialban/api/public/v1/:accountId', (req, res) => {
		res.status(204).end();
	});

	app.get('/content-controls/:accountId', function (req, res) {
		res.status(204).end();
	});

	//platform
	app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
		res.set('Content-Type', 'text/plain');
		res.send(true);
	});

	//sac
	app.get('/affiliate/api/public/affiliates/slug/:affiliateName', (req, res) => {
		res.json({
			id: "aabbccddeeff11223344556677889900",
			slug: req.params.affiliateName,
			displayName: req.params.affiliateName,
			status: "ACTIVE",
			verified: true
		})
	});

	//cloudstorage
	app.get('/fortnite/api/cloudstorage/system', async (req, res) => {

		//inspiration: https://github.com/AlexDev404/AuroraFN-Backend/blob/3db03fa403387b7e829304e947f6e24fe9c3fa6c/routes/services/cloudstorage.js#L25
		//originally by : @slushia

		let engine = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultEngine.ini'));
		let runtime = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini'));
		let game = fs.readFileSync(path.join(__dirname, '../hotfixes/DefaultGame.ini'));
		res.json([{
			"uniqueFilename": "3460cbe1c57d4a838ace32951a4d7171",
			"filename": "DefaultEngine.ini",
			"hash": crypto.createHash("sha1").update(engine).digest("hex"),
			"hash256": crypto.createHash("sha256").update(engine).digest("hex"),
			"length": engine.length,
			"contentType": "application/octet-stream",
			"uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultEngine.ini')).mtime,
			"storageType": "S3",
			"doNotCache": false
		}, {
			"uniqueFilename": "DefaultGame.ini",
			"filename": "DefaultGame.ini",
			"hash": crypto.createHash("sha1").update(game).digest("hex"),
			"hash256": crypto.createHash("sha256").update(game).digest("hex"),
			"length": game.length,
			"contentType": "application/octet-stream",
			"uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultGame.ini')).mtime,
			"storageType": "S3",
			"doNotCache": false
		}, {
			"uniqueFilename": "c52c1f9246eb48ce9dade87be5a66f29",
			"filename": "DefaultRuntimeOptions.ini",
			"hash": crypto.createHash("sha1").update(runtime).digest("hex"),
			"hash256": crypto.createHash("sha256").update(runtime).digest("hex"),
			"length": runtime.length,
			"contentType": "application/octet-stream",
			"uploaded": fs.statSync(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini')).mtime,
			"storageType": "S3",
			"doNotCache": false
		}])
	});

	//cba adding more
	app.get('/fortnite/api/cloudstorage/system/3460cbe1c57d4a838ace32951a4d7171', (req, res) => {
		res.setHeader("content-type", "application/octet-stream")
		res.sendFile(path.join(__dirname, '../hotfixes/DefaultEngine.ini'));
	});

	app.get('/fortnite/api/cloudstorage/system/c52c1f9246eb48ce9dade87be5a66f29', (req, res) => {
		res.setHeader("content-type", "application/octet-stream")
		res.sendFile(path.join(__dirname, '../hotfixes/DefaultRuntimeOptions.ini'));
	});

	

	app.get('/fortnite/api/cloudstorage/system/DefaultGame.ini', (req, res) => {
		res.setHeader("content-type", "application/octet-stream")
		res.sendFile(path.join(__dirname, '../hotfixes/DefaultGame.ini'));
	});

	app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
		res.json([])
	});

	app.get('/fortnite/api/cloudstorage/user/:accountId/GameUserSettings.ini', (req, res, next) => {
		res.setHeader('Content-Type', 'text/plain')
	});

	app.post("/fortnite/api/game/v2/profileToken/verify/*", (req, res) => { res.status(204).end() })

	//keychain
	app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
		axios.get("https://api.nitestats.com/v1/epic/keychain", { timeout: 3000 }).then(response => {
			res.json(response.data);
		}).catch(e => {
			res.json(["74AF07F9A2908BB2C32C9B07BC998560:V0Oqo/JGdPq3K1fX3JQRzwjCQMK7bV4QoyqQQFsIf0k=:Glider_ID_158_Hairy"])
		})
	})

	//sigh
	app.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
		res.json([])
	})

	app.get("/fortnite/api/statsv2/account/:accountId", (req, res) => {
		//todo
		res.json([])
	})

};
