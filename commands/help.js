const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     var embed = new Discord.MessageEmbed()
            .setAuthor(`Commands:`)
            .addFields("help", "Brings up this embed.")
            .addFields("ping", "Pong!")
            .addFields("announce", "Announces the message in an embed.")
            .addFields("embed", "Puts the message you provided in an embed.")
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
