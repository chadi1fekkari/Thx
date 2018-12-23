const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

 

 

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`NirexCodes4Ever `,"https://www.twitch.tv/dggamingbot")

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
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message',async message => {//Toxic Code
  if(message.author.bot || message.channel.type === '*bc') return;
  let args = message.content.split(' ');
  if(args[0] === `*bc`) {//Toxic Code
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Toxic Code
        g.send(args.slice(1).join(' ')).then(() => {//Toxic Code
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);//Toxic Code
        });//Toxic Code
      });//Toxic Code
    });//Toxic Code
  }
});//Toxic Codes



 

 

 

client.login(process.env.BOT_TOKEN);
