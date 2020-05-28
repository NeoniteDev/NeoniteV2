module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
        res.json({
            _title: 'Fortnite Game',
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: 'en-US',
            battleroyalenews: {
                news: {
                    motds: [
                        {
                            entryType: "Website",
                            image: "https://cdn.discordapp.com/attachments/703974059121049720/715300713995042877/Fornite1920x1080.jpg",
                            tileImage: "https://cdn.discordapp.com/attachments/703974059121049720/715300717837156362/FortniteMidLogo.jpg",
                            hidden: false,
                            tabTitleOverride: "FORTNITE.DEV V2",
                            _type: "CommonUI Simple Message MOTD",
                            title: "Welcome To Fortnite.Dev",
                            body: "Made by Kemo (@xkem0x). If you have any bugs, you can join our Discord by clicking the button below.",
                            videoStreamingEnabled: false,
                            sortingPriority: 20,
                            id: "Fortnite-Dev-Welcome",
                            videoFullscreen: false,
                            spotlight: false,
                            websiteURL: "https://discord.gg/DJ6VUmD",
                            websiteButtonText: "Join our Discord!"
                        }
                    ]
                },
                "jcr:isCheckedOut": true,
                _title: "battleroyalenews",
                header: "",
                style: "None",
                _noIndex: false,
                alwaysShow: false,
                "jcr:baseVersion": "a7ca237317f1e74e4b8154-226a-4450-a3cd-c77af841e798",
                _activeDate: "2020-01-21T14:00:00.000Z",
                lastModified: new Date(),
                _locale: "en-US"
            },
            emergencynotice: {
                news: {
                    platform_messages: [],
                    _type: 'Battle Royale News',
                    messages: [
                        {
                            hidden: false,
                            _type: 'CommonUI Simple Message Base',
                            subgame: 'br',
                            title: "Fortnite.Dev V2",
                            body: "Made by kemo (@xkem0x).\nDiscord: https://discord.gg/DJ6VUmD",
                            spotlight: true
                        }
                    ]
                },
                _title: 'emergencynotice',
                _activeDate: "2019-12-03T00:51:35.524Z",
                lastModified: new Date(),
                _locale: 'en-US'
            }
        })
    })
}