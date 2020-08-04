const axios = require('axios');

module.exports = (app) => {
    app.get('/fortnite/api/calendar/v1/timeline', function (req, res) {
        axios.get('https://api.nitestats.com/v1/epic/modes').then(response => {
            res.json(response.data)
        })
     })
}
