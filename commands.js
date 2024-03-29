
const fetch = require('node-fetch');

const ayaya = require('./commands/ayaya.js');
const gif = require('./commands/gif.js');
const twice = require('./commands/twice.js');
const wonderegg = require('./commands/wonderegg.js');

//obj of functions
const commands = {ayaya, gif, twice, wonderegg};

module.exports = async function (msg){
    
    //checks if message is in specific channel and that content is matched
    if(msg.channel.id == '830440963846701106' || msg.channel.id == '822260686658076722'){
        console.log(msg.content);
        let tokens = msg.content.split(' ');

        //selects the command part of the message
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