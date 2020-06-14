const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let rChannel = message.guild.channels.cache.get(args[0]);
        if (!rChannel) return message.channel.send(`You did not insert a channel!`);
    let messageText = message.content.split(`*announce ${rChannel.id}`).join("");
        if (!messageText) return message.channel.send(`You did not specify your message to send!`);
    let newEmbed = new Discord.MessageEmbed()
            .setAuthor('Armys Chillin', "https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setTitle("Embed:")
            .setThumbnail("https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setDescription(`${messageText}`)
            .setColor("RANDOM")
            .setFooter("Embed by: " + `${message.author.tag}`)
            .setTimestamp()
    
        message.channel.send(newEmbed);
        message.delete();
}

module.exports.config = {
    name: "embed",
    description: "embed",
    usage: "<channel id> <msg>",
    accessableby: "Members",
    aliases: []
}