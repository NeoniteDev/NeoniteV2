const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const errors = require("./structs/errors");
const { v4: uuidv4 } = require("uuid");
const { ApiException } = errors;
const { Console } = require("console");
const port = 5595;
const version = "2.5.0";
const URL_LOGGING = false;

// Lobby bot by: @TheBeatYT_evil
(function () {
	"use strict";

	try {
		global.BotConfig = JSON.parse(fs.readFileSync('./config/NeoniteBot/config.json', 'utf8', function (err, data) {
			if (err) global.BotConfig = false;
		}))
	}
	catch {
		global.BotConfig = false
	}

	String.prototype.format = function () {
		const args = arguments[0] instanceof Array ? arguments[0] : arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != "undefined" ? args[number] : match;
		});
	};

	if (!BotConfig) {
		fs.mkdirSync(`./config/NeoniteBot/`, { recursive: true });
		fs.writeFile(`./config/NeoniteBot/config.json`, JSON.stringify({
			skin: 'CID_286_Athena_Commando_F_NeonCat',
			emote: null
		}), function (err, data) {
			if (err) global.BotConfig = false;
		})
		global.BotConfig = {
			skin: 'CID_286_Athena_Commando_F_NeonCat',
			emote: null
		}
	}

	require('./xmpp')

	const app = express();


	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.set("etag", false);

	if (URL_LOGGING)
		app.use((req, res, next) => {
			console.log(req.url)
			next()
		})

	app.use("/", express.static("public"));
        //For lobby bot
	global.xmppClients = {}

	fs.readdirSync(`${__dirname}/managers`).forEach(route => {
		require(`${__dirname}/managers/${route}`)(app, port);
	})

	app.use((req, res, next) => {
		next(new ApiException(errors.com.epicgames.common.not_found));
	})

	app.use((err, req, res, next) => {
		let error = null;

		if (err instanceof ApiException) {
			error = err;
		} else {
			const trackingId = req.headers["x-epic-correlation-id"] || uuidv4();
			error = new ApiException(errors.com.epicgames.common.server_error).with(trackingId);
			console.error(trackingId, err);
		}

		error.apply(res);
	});

	app.listen(port, () => {
		console.log(`Neonite v${version} is listening on port ${port}!`);
	});


	module.exports = app;
}());
