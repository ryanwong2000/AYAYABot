const fetch = require('node-fetch');
module.exports = async function(msg, args){

    let keywords = 'chika';
    if(args.length > 0){
        //ex.
        //!gif kitty cat
        //"kitty cat"
        keywords = args.join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`;
    let response = await fetch(url);
    let json = await response.json();
    // console.log(json);

    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
}