console.log("Ara araa");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

const cron = require('node-cron');
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ohayo U.U');
}

const osamakeReminder = require("./osamakeReminder.js");
const testReminder = require("./testReminder.js");
//import a function w all the cron jobs there?
client.on('ready', () => {
    console.log('reminders');
    // remindersChannel = client.channels.cache.get(`831923281028317290`);
    cron.schedule('* * * * * *', testReminder);
    cron.schedule('0 12 * * wed', osamakeReminder);
    cron.schedule('0 11 * * wed', () => {
        remindersChannel.send("Super Cub widePeepoHappy");
        console.log("Super Cub widePeepoHappy");
    })
    cron.schedule('5 12 * * fri', testReminder);
    
    // cron.schedule('24 10 * * thu', () => {
    //     remindersChannel.send("Minami 🐐🐐🐐🐐");
    //     console.log("Minami 🐐🐐🐐🐐");
    // });
})

const commandHandler = require("./commands");

client.on('message', commandHandler);





