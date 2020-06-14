const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.channel.send(`ERROR: Missing Permission **MANAGE_MESSAGES**`)
    let rChannel = message.guild.channels.cache.get(args[0]);
        if (!rChannel) return message.channel.send(`You did not insert a channel!`);
    let messageText = message.content.split(`*announce ${rChannel.id}`).join("");
        if (!messageText) return message.channel.send(`You did not specify your message to send!`);
    }
    let announceEmbed = new Discord.MessageEmbed()
            .setAuthor('Armys Chillin', "https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setThumbnail("https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setDescription(`${messageText}`)
            .setColor("RANDOM")
            .setFooter("Announced by: " + `${message.author.tag}`)
            .setTimestamp()
    
        message.channel.send(announceEmbed);
        message.delete();
}

module.exports.config = {
    name: "announce",
    description: "announce embed",
    usage: "<channel id> <msg>",
    accessableby: "Members",
    aliases: []
}
