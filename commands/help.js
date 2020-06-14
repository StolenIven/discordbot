const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Commands:`)
            .setDescription('```ping | help | embed```')
            .addFields({ name: 'Prefix', value: '```*```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "*help",
    accessableby: "Members",
    aliases: []
}