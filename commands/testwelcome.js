const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "255866063630237697") { return message.channel.send(`ERROR: Missing Permission **BOT_OWNER**`);
    }
    message.channel.send (`˗ˏˋ╒ :love_letter: ╛ˊˎ- ┊ᴡᴇʟᴄᴏᴍᴇ ꒰${message.author}꒱! •*⁀♡∘˚⬎`) 
        const welcomeEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name}`, `${message.guild.icon}`)
            .setTitle("Greetings!")
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`┌─────┊ ⟭⟬ ┊─────┐ \n\n┌─── Check these out! ──➤\n▹[☀️] <#722194553154699274> →「avoid violations\n▹[🌈] <#718435782850904074>, <#721097222757941330> + <#718405986842312804> →「self-roles \n▹[🌻] <#718246633573187705> →「introduce yourself」\n└───────────────➤ \n\n└─────┊ ⟬⟭ ┊─────\n\n➜ Chat w/ us here in <#718244007859322923>! εïз`)
            .setImage("https://cdn.discordapp.com/attachments/721080728909250591/739058170026262608/welcomeban2.gif")
            .setColor('#FFDFBC')
            .setTimestamp()
    message.channel.send(welcomeEmbed);
}

module.exports.config = {
    name: "testwelcome",
    description: "Testing welcome embed",
    usage: "*testwelcome",
    accessableby: "Admin",
    aliases: ['tw']
}