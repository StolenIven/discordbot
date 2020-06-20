const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let messageText = message.content.split(`*embed `).join("");
        if (!messageText) return message.channel.send(`You did not specify your message to send!`);
    let newEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, `${message.guild.icon}`)
        .setThumbnail(`${message.guild.icon}`)
        .setDescription(messageText)
        .setColor("RANDOM")
        .setFooter("Embed by: " + `${message.author.tag}`)
        .setTimestamp()
    
        message.channel.send(newEmbed);
        message.delete();
}

module.exports.config = {
    name: "embed",
    description: "embed",
    usage: "*embed <msg>",
    accessableby: "Members",
    aliases: []
}