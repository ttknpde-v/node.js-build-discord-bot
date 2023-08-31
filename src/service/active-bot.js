const {ActivityType} = require("discord.js");
const dotenv = require("dotenv");
const path = require("./service-modules").path;
const fetch = require("./service-modules").fetch;
const client = require('./service-modules').client
const log = require("../log/logging").logger
dotenv.config({path: path.resolve('../env/.env')})

class ActiveBot {
    prefix = '!'
    getLogin = ()=> {
        client.login(process.env.TK_DISCORD).then(() => {
            client.user.setPresence({activities: [{
                    name: 'WWE 2K2020',
                    type: ActivityType.Playing,
                    url: 'https://github.com/ttknpde-v'
                }], status: 'online'
            }) // set status bot
        }) // login to Discord with your app's token
    }
    getMessageText = ()=> {
        client.on("messageCreate", (message) => {
            log.info(`You have been disconnected at ${new Date()}`)
            if (message.content.startsWith(this.prefix)) { // if you need to call bot just use prefix '!'
                switch (message.content) {
                    case `${this.prefix}` :
                        // .channel.send() to send the message to the channel.
                        message.channel.send('what do you want ? '+message.author.toString() +' :man_detective:') // Mention a user in a message
                        break
                    case `${this.prefix}dm` :
                        // Send a Direct Message to a user
                        message.author.send('hello')
                        break
                    case `${this.prefix}inspire` :
                        this.getQuote().then((quote) => {
                            message.channel.send(quote)
                        })
                        break
                } // end switch case
            } // ended if condition
        }) // client.on() ใช้เพื่อตรวจสอบเหตุการณ์
    }
    getMessageGif = () => {
        client.on("messageCreate", (message) => {
            if (message.content.startsWith(this.prefix)) { // if you need to call bot just use prefix '!'
                switch (message.content) {
                    case `${this.prefix}gif1`:
                        // sent a gif file
                        message.channel.send("https://www.reactiongifs.com/wp-content/uploads/2013/07/running.gif")
                        break
                    case `${this.prefix}gif2`:
                        message.channel.send("https://www.reactiongifs.com/wp-content/uploads/2013/08/kiss.gif")
                        break
                    case `${this.prefix}gif3`:
                        message.channel.send("https://www.reactiongifs.com/r/omgshoop.gif")
                        break
                } // end switch case
            } // ended if condition
        })
    }

    getMessageImage = () => {
        client.on("messageCreate", (message) => {
            if (message.content.startsWith(this.prefix)) { // if you need to call bot just use prefix '!'
                switch (message.content) {
                    case `${this.prefix}circle`:
                        // sent a gif file
                        message.channel.send("https://f.ptcdn.info/778/067/000/q4co2x7zff9va7ipQ9F-o.jpg")
                        break
                } // end switch case
            } // ended if condition
        })
    }


    getQuote = () => {
        // get Inspirational Quotes to the bot (from free api)
        return fetch("https://zenquotes.io/api/random")
            .then(res => {
                return res.json()
            })
            .then(data => {
                return data[0]["q"] + " -" + data[0]["a"]
            })
    }
}

module.exports = ActiveBot
