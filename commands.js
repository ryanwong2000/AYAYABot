
const fetch = require('node-fetch');

const ayaya = require('./commands/ayaya.js');
const gif = require('./commands/gif.js');
const twice = require('./commands/twice.js');

//obj
const commands = {ayaya, gif, twice}

module.exports = async function (msg){
    console.log(msg.content);
    //checks if message is in specific channel and that content is matched
    if(msg.channel.id == '830440963846701106'){
        let tokens = msg.content.split(' ');

        let command = tokens.shift();
        // console.log(command);
        // console.log(tokens);
        if(command === 'ayaya'){
            commands['ayaya'](msg, tokens);
        }
        else if(command.charAt(0) === "!"){
            //remove '!'
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
}