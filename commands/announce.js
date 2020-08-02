const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.channel.send(`ERROR: Missing Permission **MANAGE_MESSAGES**`)
    }
    let rChannel = message.guild.channels.cache.get(args[0]);
        if (!rChannel) return message.channel.send(`You did not insert a channel!`);
    let messageText = message.content.split(`*announce ${rChannel.id}`).join("");
        if (!messageText) return message.channel.send(`You did not specify your message to send!`);
    let announceEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name}`)
            .setThumbnail(`${message.guild.icon}`)
            .setDescription(messageText)
            .setColor("RANDOM")
            .setFooter("Announced by: " + `${message.author.tag}`)
            .setTimestamp()
    
        rChannel.send(announceEmbed);
        message.delete();
}

module.exports.config = {
    name: "announce",
    description: "announce embed",
    usage: "*announce <channel id> <msg>",
    accessableby: "Admins",
    aliases: []
}
