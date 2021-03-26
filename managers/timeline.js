const axios = require('axios');

module.exports = (app) => {
    app.get('/fortnite/api/calendar/v1/timeline', (req, res) => {
        var season

        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
        } catch {
            //idk why i did ?? but sure
            season = 1
        }

        res.json({
            "channels": {
                "standalone-store": {},
                "client-matchmaking": {},
                "tk": {},
                "featured-islands": {},
                "community-votes": {},
                "client-events": {
                    "states": [{
                        "validFrom": "2020-05-21T18:36:38.383Z",
                        "activeEvents": [
                            {
                                "eventType": `EventFlag.LobbySeason${season}`,
                                "activeUntil": "9999-12-31T23:59:59.999Z",
                                "activeSince": "2019-12-31T23:59:59.999Z"
                            }
                        ],
                        "state": {
                            "activeStorefronts": [],
                            "eventNamedWeights": {},
                            "activeEvents": [],
                            "seasonNumber": 10,
                            "seasonTemplateId": `AthenaSeason:athenaseason${season}`,
                            "matchXpBonusPoints": 0,
                            "eventPunchCardTemplateId": "",
                            "seasonBegin": new Date(),
                            "seasonEnd": new Date(),
                            "seasonDisplayedEnd": new Date(),
                            "weeklyStoreEnd": new Date(),
                            "stwEventStoreEnd": new Date(),
                            "stwWeeklyStoreEnd": new Date(),
                            "dailyStoreEnd": new Date()
                        }
                    }],
                    "cacheExpire": new Date()
                }
            },
            "cacheIntervalMins": 15,
            "currentTime": new Date()
        })
    })
}
