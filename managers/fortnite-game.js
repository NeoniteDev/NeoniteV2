

module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
        res.json({
            "jcr:isCheckedOut": true,
            _title: "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
            _activeDate: "2017-08-30T03:20:48.050Z",
            lastModified: new Date(),
            _locale: "en-US",
            battleroyalenewsv2: {
                news: {
                    motds: [
                        {
                            entryType: "Website",
                            image: "https://cdn.discordapp.com/attachments/703974059121049720/715300713995042877/Fornite1920x1080.jpg",
                            tileImage: "https://cdn.discordapp.com/attachments/703974059121049720/715300717837156362/FortniteMidLogo.jpg",
                            hidden: false,
                            videoMute: false,
                            tabTitleOverride: "Neonite V2",
                            _type: "CommonUI Simple Message MOTD",
                            title: "Neonite",
                            body: "Made by Kemo (@xkem0x). If you have any bugs, you can join our Discord by clicking the button below.",
                            videoLoop: false,
                            videoStreamingEnabled: false,
                            sortingPriority: 0,
                            id: `Neonite-welcome-1`,
                            spotlight: false,
                            websiteURL:"https://discord.gg/DJ6VUmD",
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
                    _type: "Battle Royale News",
                    messages: [
                        {
                            hidden: false,
                            _type: "CommonUI Simple Message Base",
                            subgame: "br",
                            title: "Neonite V2",
                            body: "Made by kemo (@xkem0x).\r\nDiscord: https://discord.gg/DJ6VUmD",
                            spotlight: true
                        }
                    ]
                },
                _title: "emergencynotice",
                _activeDate: new Date(),
                lastModified: new Date(),
                _locale: "en-US"
            },
            dynamicbackgrounds: {
                "jcr:isCheckedOut": true,
                backgrounds: {
                    backgrounds: [
                        {
                            stage: "season14",
                            _type: "DynamicBackground",
                            key: "lobby"
                        },
                        {
                            stage: "season14",
                            _type: "DynamicBackground",
                            key: "vault"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                _title: "dynamicbackgrounds",
                _noIndex: false,
                "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
                _activeDate: new Date(),
                lastModified: new Date(),
                _locale: "en-US"
            }
        })
    })
}
