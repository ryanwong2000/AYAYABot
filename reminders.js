//cron is a scheduler (node-cron)
const cron = require('node-cron');

const shows = {
    mtd: { crontab: '* * * * * *', message: "BOOBA" },
    osamake: { crontab: '0 9 * * wed', message: "New Osamake episode today!" },
    superCub: { crontab: '0 11 * * wed', message: "Super Cub widePeepoHappy" },
    higehiro: { crontab: '0 11 * * mon', message: "New Higehiro today!" },
    vivy: { crontab: '0 12 * * sat', message: "Vivy AYAYAJAM" }
}

//its messy i know, could store pass a 'show' object that has all the relevant information a general function.
module.exports = {
    mtd: function(remindersChannel) {
        let show = shows.mtd;
        cron.schedule(show.crontab, ()=>{
            console.log(show.message);
            remindersChannel.send(show.message);
        })
    },
    osamake: function(remindersChannel) {
        let show = shows.osamake;
        cron.schedule(show.crontab, ()=>{
            console.log(show.message);
            remindersChannel.send(show.message);
        })
    },
    superCub: function(remindersChannel) {
        let show = shows.superCub;
        cron.schedule(show.crontab, ()=>{
            console.log(show.message);
            remindersChannel.send(show.message);
        })
    },
    higehiro: function(remindersChannel) {
        let show = shows.higehiro;
        cron.schedule(show.crontab, ()=>{
            console.log(show.message);
            remindersChannel.send(show.message);
        })
    },
    vivy: function(remindersChannel) {
        let show = shows.vivy;
        cron.schedule(show.crontab, ()=>{
            console.log(show.message);
            remindersChannel.send(show.message);
        })
    }
};

