const crypto = require('crypto')


module.exports = (app) => {
	//exchange (needed for egl2 support)
	app.get('/account/api/oauth/exchange', function (req, res) {
		res.json({
			"expiresInSeconds": 99999,
			"code": crypto.randomBytes(15).toString("hex"),
			"creatingClientId": "61d2f70175e84a6bba80a5089e597e1c"
		});
	});

	//token
	app.post('/account/api/oauth/token', (req, res) => {
		var displayName = "";
		if (req.body.username) displayName = req.body.username.split("@")[0]
		else if (req.body.email) displayName = req.body.email.split("@")[0]
		else displayName = `InvalidUser${Math.random().toString().substring(15)}`

		res.json({
			access_token: crypto.randomBytes(15).toString("hex"),
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: displayName.replace(/ /g, '_'),
			client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
			internal_client: true,
			client_service: "fortnite",
			displayName: displayName,
			app: "fortnite",
			in_app_id: displayName.replace(/ /g, '_'),
			device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
		})
	});

	//verify
	app.get('/account/api/oauth/verify', (req, res) => {
		res.json({
			access_token: req.headers.authorization.replace("bearer ", ""),
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			refresh_token: "cd581d37b0434726a37b0268bb99206c",
			refresh_expires: 115200,
			refresh_expires_at: "9999-12-31T23:59:59.999Z",
			account_id: "ninja",
			client_id: "3446cd72694c4a4485d81b77adbb2141",
			internal_client: true,
			client_service: "fortnite",
			displayName: req.h,
			app: "fortnite",
			in_app_id: "ninja",
			device_id: "164fb25bb44e42c5a027977d0d5da800"
		})
	});

	//kill token
	app.delete('/account/api/oauth/sessions/kill', (req, res) => {
		res.status(204).end();
	});

	app.delete('/account/api/oauth/sessions/kill/:token', (req, res) => {
		delete global[req.params.token]
		res.status(204).end();
	});

	//account info
	app.get('/account/api/public/account/:accountId', (req, res) => {
		res.json({
			id: req.params.accountId,
			displayName: req.params.accountId.replace(/_/g, ' '),
			externalAuths: {}
		})
	});

	app.get('/account/api/public/account/', (req, res) => {
		res.json([{
			id: req.query.accountId,
			displayName: req.query.accountId ? req.query.accountId.replace(/_/g, ' ') : req.query.accountId,
			externalAuths: {}
		}])
	});

	// device auth
	app.get('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json([]));

	app.post('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json({
		accountId: req.params.accountId,
		deviceId: "aabbccddeeff11223344556677889900",
		secret: "aabbccddeeff11223344556677889900"
	}));
}