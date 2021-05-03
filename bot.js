console.log("Ara araa");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ohayo U.U');
    channel.send("mtd");
}

//automatic reminders usign node cron
// const reminders = require('./reminders')();
const channel = client.channels.cache.get(`831923281028317290`);
console.log(channel);


// client.on('ready', reminders(Channel));

//text channel commands
// const commandHandler = require("./commands");
// client.on('message', commandHandler);





