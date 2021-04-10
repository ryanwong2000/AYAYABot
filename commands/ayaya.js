const ayayaReplies = [
    'Nam',
    'AYAYA',
    'Ohayo',
    'Ara ara',
    'DATTEBAYO',
    'NANI!?!?!?'
];

module.exports = function (msg, args){
    const index = Math.floor(Math.random() * ayayaReplies.length);
    // msg.reply(msg);
    msg.channel.send(ayayaReplies[index]);
}
