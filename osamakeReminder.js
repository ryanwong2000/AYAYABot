module.exports = function(){
    const remindersChannel = client.channels.cache.get(`831923281028317290`);
    if(remindersChannel){
        console.log("osamake reminder");
        remindersChannel.send("New Osamake episode today!");
    }else{
        console.log("ERROR: something wrong osamkeReminder");
    }
}