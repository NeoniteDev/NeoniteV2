const errors = require("./../../structs/errors");
const NeoLog = require('./../../structs/NeoLog')

module.exports = (app) => {


    const ExcludedEndpoint = [
        '/account/api/oauth/token',
        '/fortnite/api/game/v2/profile/:accountId/client/:command',
        '/launcher/api/public/distributionpoints/',
        '/fortnite/api/game/v2/matchmakingservice/ticket/player/:accountId'
    ]

    const util = require('util')

    var layers = app._router.stack.filter(x => x.name == "bound dispatch");


    console.log("\nTesting MCP\n")

    const mcpRes = {
        json(data) {
            console.log("PASSED McpTest\n")
        },
        send(data) {
            console.log("PASSED McpTest\n")
        },

        end(data) {
            console.log("PASSED McpTest\n")
        },

        status(status) { return (res) },
        set(name, value) { }
    }

    const mcpReq = {
        params: {
            accountId: "GithubTesting",
            command: "QueryProfile"
        },
        body: {},
        method: "post",
        headers: {
            "Content-Type": 'application/json'
        },
        query: {
            profileId: "athena",
            rvn: "1"
        }
    }

    var MPC_layer = layers.find(x => x.route.path == "/fortnite/api/game/v2/profile/:accountId/client/:command")

    function McpTest(command, profileId, body) {
        if (body) {
            mcpReq.body = body;
        }
        mcpReq.params.command = command
        mcpReq.query.profileId = profileId
        MPC_layer.handle(mcpReq, mcpRes, function (err) { throw err; })
        mcpReq.body = {};
    }

    McpTest("QueryProfile", "athena")
    McpTest("QueryProfile", "collections")
    McpTest("QueryProfile", "common_core")
    McpTest("QueryProfile", "common_public")
    McpTest("QueryProfile", "creative")

    //test equiping
    McpTest("SetCosmeticLockerSlot", "athena", {
        "lockerItem": "sandbox_loadout",
        "category": "Character",
        "itemToSlot": "test",
        "slotIndex": 0,
        "variantUpdates": [],
        "optLockerUseCountOverride": 1
    })


    const TokenReq = {
        body: {
            grant_type: "password",
            username: "GithubTest",
            exchange_code: "GithubTest"
        },
        method: "post"
    }

    const TokenRes = {
        json(data) {
            console.log("PASSED Oauth Token\n")
        },
        send(data) {
            console.log("PASSED Oauth Token\n")
        },

        end(data) {
            console.log("PASSED Oauth Token\n")
        },

        status(status) { return (res) },
        set(name, value) { }
    }

    var OauthToken_layer = layers.find(x => x.route.path == "/account/api/oauth/token")


    console.log("\nTesting Oauth Token\n")
    OauthToken_layer.handle(TokenReq, TokenRes, function (err) { throw err; })
    TokenReq.body.grant_type = "exchange_code";
    OauthToken_layer.handle(TokenReq, TokenRes, function (err) { throw err; })

    var counter = 2;
    var time = 0;
    layers.forEach(layer => {
        const path = layer.route.path + "";

        const req = {
            params: {},
            body: {},
            headers: {
                authorization: "bearer test",
                Authorization: "bearer test"
            },
            query: {
                version: "Github",
                netcl: "CodeQL",
                displayName: "GithubTest",
                accountId: "GithubTest",
            },
            cookies : {
            }
        };


        const res = {
            json(data) {
                console.log("PASSED " + path + "\n")
            },
            

            send(data) {
                console.log("PASSED " + path + "\n")
            },
            sendFile(data) {
                console.log("PASSED " + path + "\n")
            },

            end(data) {
                console.log("PASSED " + path + "\n")
            },

            status(status) { return (res) },
            setHeader(header, value) { },
            set(name, value) { },
            cookie(name, value) {}
        }

        req.method = Object.entries(layer.route.methods)[0][0];

        req.body.accountId = "GithubTest"


        layer.keys.forEach(key => {
            req.params[key.name] = "GithubTesting";
        })

        
        req.params.affiliateName = "Neonite";
        /**
         * 
         * @param {ApiException} thing 
         */
        function next(thing) {
            console.log("Next called by " + path + "\n")
            if (!thing) throw new Error("Unknown error at " + path);

            else if (!thing.errorMessage) throw thing;


            var message = thing.errorMessage;

            message.replace('{0}', thing.messageVars[0])
            message.replace('{1}', thing.messageVars[1])
            message.replace('{2}', thing.messageVars[2])

            console.log(`API error at route ${path}: ${message}\n`);

            //throw thing;
        }

        if (ExcludedEndpoint.includes(path)) return;

        /*setTimeout(() => {
            layer.handle(req, res, next)
            counter++;
            if (counter >= layers.length) {
                NeoLog.Log("Finished Testing")
                process.exit(0)
            }
        }, time);*/

        layer.handle(req, res, next)

        time = time + 50;
    })
    NeoLog.Log("Finished Testing")
    process.exit(0)
}
