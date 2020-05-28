const path = require('path')
const fs = require("fs"); // Or `import fs from "fs";` with ESM

module.exports = (app) => {
    app.get('/panel/main.css', function (req, res) {
        res.sendFile(path.join(__dirname + '/panel/main.css'));
    });

    app.get('/panel/icon.png', async function (req, res) {
        res.sendFile(path.join(__dirname + '/panel/icon.png'));
    });

    app.get('/panel/', (req, res) => {
        if (req.query && req.query.user) {
            if (checkUser(req.query.user)) {
                res.sendFile(path.join(__dirname + '/panel/index.html'));
            } else res.send("user not found!, make sure to open your game at least once")
        } else res.send("No user entered!")
    });

    app.get('/api', async function (req, res) {
        const username = req.query.user
        const command = req.query.command
        const value = req.query.value
        switch (command) {
            case "vbx": {
                if(!checkUser(username)) return res.send("User not found")
                const fileName = path.join(__dirname, '../config/', username, "profiles/profile_common_core.json")
                if(!fileName) return res.send("User not found")
                const file = require(fileName);

                file.items['Currency:MtxPurchased'].quantity = parseInt(value, 10);

                fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
                    if (err) return console.log(err);
                });
                res.send("Operation successful")
            break
            }
            case "level": {
                if(!checkUser(username)) return res.send("User not found")
                const fileName = path.join(__dirname, '../config/', username, "profiles/profile_athena.json")
                if(!fileName) return res.send("User not found")
                const file = require(fileName);

                file.stats.attributes.level = parseInt(value, 10);

                fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
                    if (err) return console.log(err);
                });
                res.send("Operation successful")
            break
            }
            default:
                res.send("command not found!")
        }
    });

    function checkUser(username) {
        if (fs.existsSync(path.join(__dirname, '../config/', username))) {
            return true;
        } else return false;
    }
}