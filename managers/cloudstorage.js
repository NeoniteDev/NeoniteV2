const express = require("express");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const app = express.Router();

const hotfixPath = path.join(__dirname, "../hotfixes/");

/*
* Dynamic Cloudstorage Implementation: @VastBlastt
*/

/*app.get('/fortnite/api/cloudstorage/system/config', (req, res) => {
	res.json({"lastUpdated":"2021-02-17T04:21:28.383Z","disableV2":false,"isAuthenticated":true,"enumerateFilesPath":"/api/cloudstorage/system","transports":{"McpProxyTransport":{"name":"McpProxyTransport","type":"ProxyStreamingFile","appName":"fortnite","isEnabled":true,"isRequired":true,"isPrimary":true,"timeoutSeconds":30,"priority":10},"McpSignatoryTransport":{"name":"McpSignatoryTransport","type":"ProxySignatory","appName":"fortnite","isEnabled":false,"isRequired":false,"isPrimary":false,"timeoutSeconds":30,"priority":20},"DssDirectTransport":{"name":"DssDirectTransport","type":"DirectDss","appName":"fortnite","isEnabled":true,"isRequired":false,"isPrimary":false,"timeoutSeconds":30,"priority":30}}});
});*/

app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
	const output = [];
	const dir = await fs.promises.opendir(hotfixPath);

	for await (const dirent of dir) {
		output.push({
			"uniqueFilename": dirent.name,
			"filename": dirent.name,
			"hash": crypto.createHash("sha1").update(fs.readFileSync(hotfixPath + dirent.name)).digest("hex"),
			"hash256": crypto.createHash("sha256").update(fs.readFileSync(hotfixPath + dirent.name)).digest("hex"),
			"length": fs.readFileSync(hotfixPath + dirent.name).length,
			"contentType": "text/plain",
			"uploaded": fs.statSync(hotfixPath + dirent.name).mtime,
			"storageType": "S3",
			"doNotCache": false
		});
	}

	res.json(output);
});

app.get('/fortnite/api/cloudstorage/system/:filename', (req, res) => {
	const filePath = hotfixPath + req.params.filename;

	if (fs.existsSync(filePath)) {
		res.sendFile(filePath);
		return;
	} else {
		res.status(404).end();
		return;
	}
});

app.get("/fortnite/api/cloudstorage/user/:accountId", (req, res) => {
	res.json([]);
});
app.get("/fortnite/api/cloudstorage/user/:accountId/:fileName", (req, res) => {
	res.status(204).send();
});
app.put("/fortnite/api/cloudstorage/user/:accountId/:fileName", (req, res) => {
	res.status(204).send();
});

module.exports = app;