const lite = require("dlite.js");
let client = new lite.Bot({ fetchAllUsers: true, logging: false })
 const shard = new lite.shardService()

client.on("messageCreate", (msg) => {
    if(msg.author.bot)return

    if(msg.content == "dl.test"){
        let embed = new lite.CreateEmbed()
            .setTitle("Test!")
            .setDescription(shard.getShard(0).users.data.length)
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setColor("RANDOM");
        msg.channel.send(embed)
    }
})

client.on("channelUpdate", function(msg){
    console.log(msg)
})

client.ready(function(){
    // console.log(client.shardID)
    msg.channel.send("Ready!")
})

client.login("Your bot token!")
