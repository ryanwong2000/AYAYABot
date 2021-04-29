//im just testing how to send a message to a specific channel

//just wait for the client ot be ready before looking for the channel
//i did that by doing it inside the on event listener but i think you can do an async function


console.log("Ara araa");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

const cron = require('node-cron');

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ohayo QoQ');
    channel = client.channels.cache.get(`831923281028317290`);
    
    cron.schedule('* * * * * *', () => {
        channel.send("Minami 🐐");
        console.log("Minami 🐐");
    });
    
    
}
