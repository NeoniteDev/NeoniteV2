const axios = require('axios').default;
Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + (h * 60 * 60 * 1000));
  return this;
}

module.exports = (app) => {
  app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
    axios.get("https://api.nitestats.com/v1/epic/store", { timeout: 3000 }).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.json({
        "refreshIntervalHrs": 24,
        "dailyPurchaseHrs": 24,
        "expiration": new Date().addHours(24),
        "storefronts": [
          {
            "name": "BRDailyStorefront",
            "catalogEntries": []
          },
          {
            "name": "BRWeeklyStorefront",
            "catalogEntries": []
          }
        ]
      })
    })
  })
}
