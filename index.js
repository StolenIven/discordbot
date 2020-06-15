const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const guildInvites = new Map();
const bot = new Discord.Client({disableEveryone: true});

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '▸welcome')
    welcomeChannel.send (`Let's all give a warm welcome to ${member}!`)
        const welcomeEmbed = new Discord.MessageEmbed()
            .setAuthor('Armys Chillin', "https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setTitle("Welcome!")
            .setThumbnail("https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setDescription(`Hello ${member}, we are so glad to have you here at ${member.guild.name}!\n\nFor starters, make sure to look over <#718310831535685642> and follow all regulations when chatting. Violations may result in a **mute**, **kick** or **ban** \n\n**[IMPORTANT]** If you are wondering how BangBangCon streaming will work, review <#719751081474916352>. If you are new to Discord, check out <#720443014471745547>! Follow up questions can be forwarded to an admin+. \n\nWe'd love for you to introduce yourself to us! Feel free to do so in <#718246633573187705>! \n\nCheck out the variety of cool roles in <#718435782850904074> & <#718405986842312804>. We hope to see you join us chatting in <#718244007859322923>! ♡`)
            .setColor('#857cfa')
            .setTimestamp()

    welcomeChannel.send(welcomeEmbed);
});

bot.on('guildMemberAdd', async member => {
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
        const logChannel = member.guild.channels.cache.find(channel => channel.id === '720413308468985946');
        if(logChannel) {
            logChannel.send(`${member.user.tag} **joined**; Invited by ${usedInvite.inviter.tag}. (**${usedInvite.uses}**)`).catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
});

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.token);
