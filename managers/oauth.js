const crypto = require('crypto');
const fs = require('fs');
const uuid = require('uuid')
const Profile = require("../profile");
const { ApiException } = require('../structs/errors');
const errors = require("../structs/errors");

const { application } = require('express');

/**
 * 
 * @param {application} app 
 */
module.exports = (app) => {
	//token
	app.post('/account/api/oauth/token', async (req, res, next) => {
		var displayName = "";
		var accountId = "";
		switch (req.body.grant_type) {
			case "client_credentials":
				displayName = undefined;
				accountId = undefined;
				break;

			case "password":
				if (!req.body.username) {
					throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("username")
				}
				if (req.body.username.includes("@")) {
					displayName = req.body.username.split("@")[0]
				}
				else {
					displayName = req.body.username;
				}

				accountId = displayName.replace(/ /g, "_");
				break;

			case "authorization_code":
				if (!req.body.code) {
					throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("code")
				}
				displayName = req.body.code;
				accountId = req.body.code;

				break;

			case "device_auth":
				if (!req.body.account_id) {
					throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("account_id")
				}
				displayName = req.body.account_id;
				accountId = req.body.account_id;
				break;


			case "exchange_code":
				if (!req.body.exchange_code) {
					throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("exchange_code")
				}

				displayName = req.body.exchange_code;
				accountId = req.body.exchange_code;

				break;

			default:
				throw new ApiException(errors.com.epicgames.common.oauth.unsupported_grant_type).with(req.body.grant_type)
				break;
		}

		res.json({
			access_token: crypto.randomBytes(16).toString("hex"),
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
		res.status(204).end();
	});

	//account info
	app.get('/account/api/public/account/:accountId', (req, res) => {
		req
		res.json({
			id: req.params.accountId,
			displayName:  req.params.accountId,
			externalAuths: {}
		})
	});

	app.get("/account/api/public/account/displayName/:displayName", (req, res) => {
		res.json({
			"id": req.params.displayName,
			"displayName": req.params.displayName,
			"externalAuths": {}
		})
	})


	app.get('/account/api/public/account/', (req, res) => {
		try {
			var response = []
			req.query.accountId.forEach(accId => {
				response.push([{
					id: accId,
					displayName: accId.startsWith("NeoniteBot") ? "NeoniteBot" : accId,
					externalAuths: {}
				}])
			})
			res.json(response)
		}
		catch {
			res.json([{
				id: req.query.accountId,
				displayName: req.query.accountId.startsWith("NeoniteBot") ? "NeoniteBot" : req.query.accountId,
				externalAuths: {}
			}])
		}
	});

	// device auth
	app.get('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json([]));

	app.post('/account/api/public/account/:accountId/deviceAuth', (req, res) => res.json({
		accountId: req.params.accountId,
		deviceId: "null",
		secret: "null"
	}));

	app.delete('/account/api/public/account/:accountId/deviceAuth/*', (req, res) => res.status(204).end());
}
