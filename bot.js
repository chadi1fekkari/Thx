const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*'

 

 

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`NirexCodes4Ever  `,"https://www.twitch.tv/dggamingbot")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});
client.on('guildMemberAdd', msg => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setThumbnail(msg.user.avatarURL)
    .setImage('https://cdn.pg.sa/4J1jipROqB.jpg')     
    .setTitle('New Member!')
    .setDescription('Welcome To server')
    .addField('**ID Member:',"" +  msg.user.id, true)
    .addField('**Tag Member**', msg.user.discriminator, true)
    .addField('**Member Created At', msg.user.createdAt, true)
    .addField(' 👤   You Number',`**[ ${msg.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(msg.guild.name, msg.guild.iconURL, true)
    var channel = msg.guild.channels.find('name', 'chat')         
    if (!channel) return;
    channel.send({embed : embed});
    });
 


 

 

client.login(process.env.BOT_TOKEN);
