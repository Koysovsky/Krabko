const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'help') {
      message.reply('```1.Krabko\n2.Clear\n3.ll```');
    }
  });

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'krabko') {
    message.reply('Danko🦀');
  }
});

client.on('guildMemberAdd', member => {
    member.addRole('544574828846383105').catch(console.error);
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'll') {
      message.reply('\nMyLearning: http://www.spseke.mylearning.elct.sk/Default.aspx \nRozvrh: https://spseke.edupage.org/timetable/ \nZnámky: https://spseke.edupage.org/znamky/?\nSuplovanie: https://spseke.edupage.org/substitution/?\nKreslenie: <https://aggie.io/>');
    }
  });

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.member.roles.has('544569400120967179')) {
        if(message.content.toLowerCase() == 'clear'){
            async function clear() {
                message.delete();
                const fetched = await message.channel.fetchMessages({limit: 99});
                message.channel.bulkDelete(fetched);
            }
            clear();
            message.reply("vyčistil 100 hovien!");
        }
    }
});


client.login(process.env.TOKEN);

