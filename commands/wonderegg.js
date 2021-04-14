

module.exports = function(msg){
    const currentDate = new Date();
    const countDate = new Date("29 Jun 2021");

    const oneDay = 1000*24*60*60;

    const diffInTime = countDate.getTime() - currentDate.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);
    
    var output = diffInDays + " days (";

    for(var i = 0; i < diffInDays; i++){
        output += "🥚";
    }
    output += ") \nuntil Wonder Egg Priority";

    console.log(output);

    msg.channel.send(output);
}