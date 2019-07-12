module.exports = function pre (client, body) {

    if (body.action === "set") {


        client.setActivity({


            state: body.state,
            details: body.details,
            startTimestamp: new Date(),
            largeImageKey: "chrome",
            largeImageText: body.largeText,
            smallImageKey: 'chromium',
            smallImageText: body.smallText,
            instance: true


        }).then(console.log, console.error);

    } else if (body.action === "clear") {
        client.clearActivity();
    }

}