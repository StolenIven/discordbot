const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const guildInvites = new Map();
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
    bot.guilds.cache.forEach(guild => {
      guild.fetchInvites()
          .then(invites => guildInvites.set(guild.id, invites))
          .catch(err => console.log(err));
  
    let myGuild = bot.guilds.cache.get('718244007859322920');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('720365453989511289');
    memberCountChannel.setName(`❱ Army Count: ${memberCount}`);
          });
  });

bot.on("guildMemberAdd", async member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '722175564538183881')
    welcomeChannel.send (`Let's all give a warm welcome to ${member}!`)
        const welcomeEmbed = new Discord.MessageEmbed()
            .setAuthor(`${member.guild.name}`, "https://cdn.discordapp.com/attachments/594018667755339795/721134037170913310/image0.gif")
            .setTitle("Welcome!")
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`Hello ${member}, we are so glad to have you here at ${member.guild.name}!\n\nFor starters, make sure to look over <#722194553154699274> and follow all regulations when chatting. Violations may result in a **mute**, **kick** or **ban**. \n\nWe'd love for you to introduce yourself to us! Feel free to do so in <#718246633573187705>! \n\nCheck out the variety of cool roles in <#718435782850904074> & <#718405986842312804>. We hope to see you join us chatting in <#718244007859322923>! ♡`)
            .setColor('#857cfa')
            .setTimestamp()

    welcomeChannel.send(welcomeEmbed);

    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const invites = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
        const logChannel = member.guild.channels.cache.find(channel => channel.id === '720413308468985946');
        if(logChannel) {
            logChannel.send(`${member} **joined**; Invited by **${invites.inviter.username}**. (**${invites.uses}** invites)`);
        }
    }
    catch(err) {
        console.log(err);
    }
  
      let myGuild = bot.guilds.cache.get('718244007859322920');
      let memberCount = myGuild.memberCount;
      let memberCountChannel = myGuild.channels.cache.get('720365453989511289');
      memberCountChannel.setName(`❱ Army Count: ${memberCount}`);
});

bot.on("guildMemberRemove", member => {
  let myGuild = bot.guilds.cache.get('718244007859322920');
  let memberCount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.cache.get('720365453989511289');
  memberCountChannel.setName(`❱ Army Count: ${memberCount}`);
})

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
