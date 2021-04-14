console.log("Ara araa");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

const cron = require('node-cron');
client.on('ready', readyDiscord);

const osamakeReminder = require("./osamakeReminder.js")
function readyDiscord(){
    console.log('ohayo U.U');
 
    cron.schedule('0 0 12 * * WED', osamakeReminder);
}

const commandHandler = require("./commands");

client.on('message', commandHandler);





