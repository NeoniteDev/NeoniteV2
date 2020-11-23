var axios = require('axios')
var fs = require('fs')
var shop_url = 'https://benbotfn.tk/api/v1/shop/raw'

module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
		var shop = JSON.parse(fs.readFileSync(shop_url))
		if(shop["CustomShop"] == true) {
			res.json(shop["Shop"])
		}
		else {
			axios.get(shop_url).then(result => {
				res.json(result.data)
			})
		}
	});
}