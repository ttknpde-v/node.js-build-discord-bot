class ServiceModules {
    static get client() {
        const { Client, GatewayIntentBits } = require('discord.js');
        /* in discord.js version 16 or more that than
        *  I have to set GatewayIntentBits */
        return new Client({
            intents: [
                GatewayIntentBits.Guilds, // GUILDS - ตอบสนองต่อเหตุการณ์ใดๆ ที่มีการดำเนินการสร้างหรือลบ เช่น messageCreate
                GatewayIntentBits.GuildMessages,  // GUILD_MESSAGES - reacts to events such as Sending a message, Editing a message and Deleting a message.
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers, // GUILD_MEMBERS - reacts to events such as adding, updating and removing a new user to the server.
            ],
        })
    }
    static get path() {
        return require('path')
    }
    static get fetch() {
        // This module allows our code to make an HTTP request to get data from the API
        return require("node-fetch")
    }
}

module.exports = ServiceModules
