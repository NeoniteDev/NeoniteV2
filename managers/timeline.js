module.exports = (app) => {
    app.get('/fortnite/api/calendar/v1/timeline', function (req, res) {
        var season
        if (req.headers["user-agent"]) {
            try {
                season = req.headers["user-agent"].split("-")[1].split(".")[0]
            } catch {
                season = 12
            }
        } else season = 12

        res.json({
            channels: {
                "standalone-store": {},
                "client-matchmaking": {},
                tk: {},
                "featured-islands": {},
                "community-votes": {},
                "client-events": {
                    states: [{
                        validFrom: "2020-05-21T18:36:38.383Z",
                        activeEvents: [{
                            eventType: `EventFlag.LobbySeason${season}`,
                            activeUntil: "9999-12-31T23:59:59.999Z",
                            activeSince: "2019-12-31T23:59:59.999Z"
                        }],
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
        })
    })
}