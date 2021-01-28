const crypto = require('crypto');
const fs = require('fs');
const Profile = require("../profile");

module.exports = (app) => {
	//token
	app.post('/account/api/oauth/token', async (req, res) => {
		var displayName = "";
		var accountId = "";
		
	
                if (req.body.username) displayName, accountId = req.body.username.split("@")[0]
		else if (req.body.exchange_code){try {
			displayName = Buffer.from(req.body.exchange_code, 'base64').toString();
			accountId = req.body.exchange_code
			if (!accountId.endsWith('=')) accountId = accountId + '='
		}catch{displayName, accountId = `InvalidUser${Math.random().toString().substring(15)}`}}
		else if (req.body.email) displayName, accountId = req.body.email.split("@")[0]
		else displayName = `InvalidUser${Math.random().toString().substring(15)}`
		accountId = accountId.replace(/ /g, '_');
		if (!accountId.startsWith("InvalidUser")) {
			var profileId = "athena";
			var profileData = Profile.readProfile(accountId, profileId);

			if (!profileData) {
				profileData = Profile.readProfileTemplate(profileId);

				if (!profileData) {
					throw new ApiException(errors.com.epicgames.modules.profiles.operation_forbidden).with(profileId);
				}

				profileData.created = profileData.updated = new Date().toISOString();
				profileData['_id'] = accountId;
				profileData.accountId = accountId;
				await Profile.updatedCos(profileData);

				try {
					fs.mkdirSync(`./config/${accountId}/profiles`, { recursive: true });
					Profile.saveProfile(accountId, profileId, profileData);
				} catch (e) {
					console.log("Failed creating profile");
					throw e;
				}
			}
		}

		res.json({
			access_token: crypto.randomBytes(15).toString("hex") + `@${accountId}`, //Make life Easier
			expires_in: 28800,
			expires_at: "9999-12-31T23:59:59.999Z",
			token_type: "bearer",
			account_id: accountId,
			client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
			internal_client: true,
			client_service: "fortnite",
			displayName: displayName,
			app: "fortnite",
			in_app_id: accountId,
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
		var displayname = `${req.params.accountId}`
		if (displayname.endsWith('=')) displayname = Buffer.from(req.params.accountId, 'base64').toString();
		res.json({
			id: req.params.accountId,
			displayName: displayname,
			externalAuths: {}
		})
	});
	//http://localhost:5595/account/api/public/account?accountId=NeoniteBot10&accountId=NeoniteBot11&accountId=NeoniteBot12&accountId=NeoniteBot13&accountId=NeoniteBot14&accountId=NeoniteBot15

	app.get('/account/api/public/account/', (req, res) => {
		try {
			var displayName = req.query.accountId ? req.query.accountId.replace(/_/g, ' ') : req.query.accountId
			if (`${req.query.accountId}`.endsWith('='))
			{
				displayName = Buffer.from(req.query.accountId, 'base64').toString();
			}
			if (`${req.query.accountId}`.startsWith("NeoniteBot")) { displayName = "NeoniteBot" }

			res.json([{
				id: req.query.accountId,
				displayName: displayName,
				externalAuths: {}
			}])
		}
		catch {
			let response = []
			req.query.accountId.forEach(accId => {
				var dn = accId
				if (`${accId}`.startsWith("NeoniteBot")) { dn = "NeoniteBot" }
				response.push({
					id: accId,
					displayName: dn,
					externalAuths: {}
				})
			})
			res.json(response)
		}

	});

	// device auth
	app.get('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json([]));

	app.post('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json({
		accountId: req.params.accountId,
		deviceId: "aabbccddeeff11223344556677889900",
		secret: "aabbccddeeff11223344556677889900"
	}));
}
