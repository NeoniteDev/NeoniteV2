const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const neoconsole = require("./structs/neoconsole.js");
const errors = require("./structs/errors.js");
const { v4: uuidv4 } = require("uuid");
const { ApiException } = errors;

const app = express();
global.version = "2.8.0";
global.xmppClients = [];
global.port = 5595;
global.LobbyBotPort = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("etag", false);
app.use("/", express.static("public"));

require("./xmpp");

app.all("*", (req, res, next) => {
	console.log(`[${req.method}] ${req.url}`);
	next();
});

fs.readdirSync(`${__dirname}/managers`).forEach(route => {
	app.use(require(`${__dirname}/managers/${route}`))
});

app.use((req, res, next) => {
	next(new ApiException(errors.com.epicgames.common.not_found));
});

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
	if (process.argv.includes("--test")) {
		require(`${__dirname}/.github/test/testing.js`)(app);
		process.exit(0)
	}
	neoconsole.log(`v${version} is listening on port ${port || 5595}!`);
});