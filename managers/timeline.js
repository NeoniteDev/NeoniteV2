const axios = require('axios');

module.exports = (app) => {
    app.get('/fortnite/api/calendar/v1/timeline', function (req, res) {
        axios.get('https://api.nitestats.com/v1/epic/modes').then(response => {
            res.json(response.data)
        }).catch(e => {
            res.json({"channels":{"client-events":{"states":[{"state":{"seasonNumber":0,"seasonTemplateId":"AthenaSeason:athenaseason0","seasonBegin":"0001-06-23T04:00:00Z","seasonEnd":"0001-07-23T04:00:00Z","seasonDisplayedEnd":"0001-07-23T04:00:00Z"}}]}},"currentTime": new Date()})
        })
            
     })
}
