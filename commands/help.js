const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     var embed = new Discord.MessageEmbed()
            .setAuthor(`Commands:`)
            .addField("help", "Brings up this embed.")
            .addField("ping", "Pong!")
            .addField("announce", "Announces the message in an embed.")
            .addField("embed", "Puts the message you provided in an embed.")
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
