const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const errors = require("./structs/errors");
const { v4: uuidv4 } = require("uuid");
const { ApiException } = errors;
const { Console } = require("console");
const version = "2.7.2";
const NeoLog = require('./structs/NeoLog')

global.xmppClients = [];
global.port = 5595;
global.LobbyBotPort = 80;

(function () {
	"use strict";

	String.prototype.format = function () {
		const args = arguments[0] instanceof Array ? arguments[0] : arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != "undefined" ? args[number] : match;
		});
	};


	require('./xmpp')

	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.set("etag", false);

	app.use("/", express.static("public"));

	fs.readdirSync(`${__dirname}/managers`).forEach(route => {
		require(`${__dirname}/managers/${route}`)(app, port);
	})

	app.use((req, res, next) => {
		if (req.headers["user-agent"].includes("Mozilla")) {

		} else {
			next(new ApiException(errors.com.epicgames.common.not_found));
		}
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
		if (process.env.testing == "yes")
		{
			NeoLog.Log("Sucessfully passed Github Tedt")
			process.exit(0)
		}
		NeoLog.Log(`v${version} is listening on port ` + port || 5595 + "!");
	});

	module.exports = app;
}());
