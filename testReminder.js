module.exports = function(){
    const remindersChannel = client.channels.cache.get(`831923281028317290`);
    if(remindersChannel){
        console.log("it works:)");
        remindersChannel.send("cron job export function works so you can delete this now and make the higehiro one");
    }else{
        console.log("ERROR: something wrong with test reminder Sadge go agane");
    }
}