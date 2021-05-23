//cron is a scheduler (node-cron)
const cron = require('node-cron');

const shows = {
  mtd: { crontab: '* * * * * *', message: 'BOOBA' },
  osamake: { crontab: '0 9 * * wed', message: 'New Osamake episode today!' },
  superCub: { crontab: '0 11 * * wed', message: 'Super Cub widePeepoHappy' },
  higehiro: { crontab: '0 11 * * mon', message: 'New Higehiro today!' },
  vivy: { crontab: '0 12 * * sat', message: 'Vivy AYAYAJAM' }
};
function reminder(remindersChannel, show) {
  cron.schedule(
    show.crontab,
    () => {
      console.log(show.message);
      remindersChannel.send(show.message);
    },
    { timezone: 'America/New_York' }
  );
}
//its messy i know, could store pass a 'show' object that has all the relevant information a general function.
//IDEA: a foreach loop that goes through each show inside a single module.exports function...
module.exports = {
  mtd: (remindersChannel) => {
    reminder(remindersChannel, shows.mtd);
  },
  osamake: (remindersChannel) => {
    reminder(remindersChannel, shows.osamake);
  },
  superCub: (remindersChannel) => {
    reminder(remindersChannel, shows.superCub);
  },
  higehiro: (remindersChannel) => {
    reminder(remindersChannel, shows.higehiro);
  },
  vivy: (remindersChannel) => {
    reminder(remindersChannel, shows.vivy);
  }
};
