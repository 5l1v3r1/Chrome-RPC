
const express = require('express')
const bodyParser = require('body-parser')
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: "ipc" });
const presence = require('./presence.js')

let clientID = "579904628641234944"; 

client.login({ clientId: clientID }).catch(console.error);

client.on('ready', () => {
    const app = express()

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    setInterval(() => {

        app.post('/', function (req, res) {

            let body = req.body;

            presence(client, body)

        });


    }, 1000)


    app.listen(3000, () => console.log(`Started on port 3000!`))


});
