//cron is a scheduler (node-cron)
const cron = require('node-cron');

const shows = {
    
}

//its messy i know, could store pass a 'show' object that has all the relevant information a general function.
module.exports = {
    mtd: function(remindersChannel) {
        cron.schedule('* * * * * *', ()=>{
            console.log("COPIUM");
            remindersChannel.send("BOOBA");
        })    
    },
    osamake: function(remindersChannel) {
        cron.schedule('0 12 * * wed', ()=>{
            console.log("osamake reminder " + now);
            remindersChannel.send("New Osamake episode today!");
        })
    },
    superCub: function(remindersChannel) {
        cron.schedule('0 11 * * wed', ()=>{
            console.log("Super Cub widePeepoHappy " + now);
            remindersChannel.send("Super Cub widePeepoHappy");
        })
    },
    higehiro: function(remindersChannel) {
        cron.schedule('0 11 * * mon', ()=>{
            console.log("Higehiro VeryPog");
            remindersChannel.send("New Higehiro today!")
        })
    },
    vivy: function(remindersChannel) {
        cron.schedule('0 12 * * sun', ()=>{
            console.log("Higehiro VeryPog");
            remindersChannel.send("New Higehiro today!")
        })
    }
};

