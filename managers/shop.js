const { application } = require('express')

/**
 * @param {application} app
 */
module.exports = (app) => {
	app.get('/fortCommunism/api/storefront/v2/catalog', function (req, res) {
		res.json(require("../shop.json"));
	});
}