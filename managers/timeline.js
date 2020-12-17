const axios = require('axios');
var currentseason

function maketimeline(season) {

    return {
        channels: {
            "standalone-store": {},
            "client-matchmaking": {},
            tk: {},
            "featured-islands": {},
            "community-votes": {},
            "client-events": {
                states: [{
                    validFrom: "2020-05-21T18:36:38.383Z",
                    activeEvents: [
                        {
                            eventType: `EventFlag.LobbySeason${season}`,
                            activeUntil: "9999-12-31T23:59:59.999Z",
                            activeSince: "2019-12-31T23:59:59.999Z"
                        }
                    ],
                    state: {
                        activeStorefronts: [],
                        eventNamedWeights: {},
                        activeEvents: [],
                        seasonNumber: season,
                        seasonTemplateId: `AthenaSeason:athenaseason${season}`,
                        matchXpBonusPoints: 0,
                        eventPunchCardTemplateId: "",
                        seasonBegin: "9999-12-31T23:59:59.999Z",
                        seasonEnd: "9999-12-31T23:59:59.999Z",
                        seasonDisplayedEnd: "9999-12-31T23:59:59.999Z",
                        weeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                        stwEventStoreEnd: "9999-12-31T23:59:59.999Z",
                        stwWeeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                        dailyStoreEnd: "9999-12-31T23:59:59.999Z"
                    }
                }],
                cacheExpire: "9999-12-31T23:59:59.999Z"
            }
        },
        cacheIntervalMins: 15,
        currentTime: new Date()
    }

}

try {
    axios.get('https://benbotfn.tk/api/v1/newCosmetics').then(response => {
        currentseason = response.data.currentVersion.split("-")[1].split(".")[0]
    })
} catch {}


module.exports = (app) => {
    app.get('/fortnite/api/calendar/v1/timeline', function (req, res) {



        var season = 2
        if (req.headers["user-agent"]) { try { season = req.headers["user-agent"].split("-")[1].split(".")[0] } catch { } }

        if (season == currentseason) {
            try {
                axios.get('https://api.nitestats.com/v1/epic/modes').then(response => {
                    res.json(response.data)
                })
            } catch {
                res.json(maketimeline(season))
            }
        }
        else
        {
            res.json(maketimeline(season))
        }


    })
}
