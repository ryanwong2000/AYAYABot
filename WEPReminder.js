//cron is a scheduler (node-cron)
var CronJob = require('cron').CronJob;
var job = new CronJob('00 8 * * 2', );
job.start();

module.exports = function WEPReminder(){
    msg.channel.send("WONDER EGG TUESDAY!");
}