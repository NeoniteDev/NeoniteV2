const express = require("express");
const app = express.Router();

app.get("/fortnite/api/storefront/v2/catalog", (req, res) => {
	res.json(require("../shop.json"));
});

module.exports = app;