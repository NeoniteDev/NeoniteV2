const axios = require('axios');

module.exports = (app) => {
    app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
        axios.get("https://api.nitestats.com/v1/epic/store").then(response => {
            let data = response.data
            res.json(data)
        })
    })
}
