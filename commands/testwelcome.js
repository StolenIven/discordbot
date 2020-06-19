const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    message.channel.send (`Let's all give a warm welcome to ${member}!`) 
    if (message.member.id != "255866063630237697") {
        return message.channel.send(`ERROR: Missing Permission **BOT_OWNER**`);
    }
        const welcomeEmbed = new Discord.MessageEmbed()
            .setAuthor(`${member.guild.name}`, "https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setTitle("Welcome!")
            .setThumbnail("https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setDescription(`Hello ${member}, we are so glad to have you here at ${member.guild.name}!\n\nFor starters, make sure to look over <#722194553154699274> and follow all regulations when chatting. Violations may result in a **mute**, **kick** or **ban**. \n\nWe'd love for you to introduce yourself to us! Feel free to do so in <#718246633573187705>! \n\nCheck out the variety of cool roles in <#718435782850904074> & <#718405986842312804>. We hope to see you join us chatting in <#718244007859322923>! ♡`)
            .setColor('#857cfa')
            .setTimestamp()
    message.channel.send(welcomeEmbed);
}

module.exports.config = {
    name: "ping",
    description: "Testing welcome embed",
    usage: "*testwelcome",
    accessableby: "Admin",
    aliases: ['tw']
}