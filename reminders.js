//cron is a scheduler (node-cron)
const cron = require('node-cron');

// module.exports = {
//     mtd: function(remindersChannel){
//         console.log("COPIUM");
//         remindersChannel.send("yo");
//     }
// }


module.exports = function reminders(remindersChannel) {
    // add new schedules here
    cron.schedule('0 12 * * wed', osamake(remindersChannel));
    cron.schedule('0 11 * * wed', superCub(remindersChannel));
    cron.schedule('* * * * * *', () => {
        console.log("MTD COPIUM");
    })
}

let now = new Date().toString();
//add new functions here
function osamake(remindersChannel) {
    console.log("osamake reminder " + now);
    remindersChannel.send("New Osamake episode today!");
}
function superCub(remindersChannel) {
    console.log("Super Cub widePeepoHappy " + now);
    remindersChannel.send("Super Cub widePeepoHappy");
}