const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     var embed = new Discord.MessageEmbed()
            .setAuthor(`Commands:`)
            .addField("help | Usage: help", "Brings up this embed.")
            .addField("ping | Usage: ping", "Pong!")
            .addField("announce | Usage: announce <channel_id> <text>", "Announces the message in an embed.")
            .addField("embed | Usage: embed <text>", "Puts the message you provided in an embed.")
            .addField("memberinfo | Usage: memberinfo <tag>", "Gives information about a member.")
            .addField("dog | Usage: dog", "Random picture of a dog.")
            .addField("cat | Usage: cat", "Random picture of a cat.")
            .addField("bts | Usage: bts", "Random picture of BTS.")
            .setFooter("Bot created by: iven#6140")
            .setTimestamp()
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

module.exports.config = {
    name: "help",
    description: "",
    usage: "*help",
    accessableby: "Members",
    aliases: []
}
