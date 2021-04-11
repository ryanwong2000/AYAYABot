console.log("Ara araa");

require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ohayo QoQ');
}

const commandHandler = require("./commands");

client.on('message', commandHandler);

var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', WEPReminder());
// job.start();
client.on('ready', job.start());

async function WEPReminder(){
    var channel = client.channels.cahche.get('830440963846701106');
    channel.send("WONDER EGG TUESDAY!");
}