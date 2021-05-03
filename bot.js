console.log("Ara araa");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){   
    console.log('ohayo U.U');
}

//text channel commands
const commandHandler = require("./commands");
client.on('message', commandHandler);

//automatic reminders usign node cron
//exported function calls from inside an anon fn
const reminders = require('./reminders');
client.on('ready', ()=>{
    const channel = client.channels.cache.get(`831923281028317290`);
    reminders.osamake(channel);
    reminders.superCub(channel);
    reminders.higehiro(channel);
});


