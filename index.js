const Discord = require('discord.js');
const client = new Discord.Client();
var CryptoJS = require("crypto-js");
 
var ciphertext = CryptoJS.AES.encrypt(TOKEN, 'xd');
 
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'xd');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 
console.log(plaintext);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'help') {
      message.reply('```1.Krabko -> Meme\n2.Clear\n3.ll\n3.linux\n4.vilo```');
    }
  });

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'krabko') {
    message.reply('Danko🦀');
  }
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'linux') {
      message.reply('\nVšetky commandy na linux: https://ss64.com/bash/');
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

function sranda() {
    let srand = (Math.floor(Math.random() * 10));
    switch(srand) {
        case 0:
            return("Ma malé pelisko");
            break;
        case 1:
            return("My Cisko");
             break;
        case 2:
            return("O stôl som jebol vajčisko");
            break;
        case 3:
            return("Onetapčisko");
            break;
        case 4:
            return("Memčisko");
            break;
        case 5:
            return("Jebal som linux a cisco");
            break;
        case 6:
            return("Nacisko");
            break;
        case 7:
            return("Izicisko");
            break;
        case 8:
            return("Bombisko");
            break;
        case 9:
            return("Dal som si na zubnú kefku pastisko");
            break;
        default:
            return("Error");
      }
}
client.on("message", message => {
    if(message.content.toLowerCase() == "vilo") {
        message.reply(sranda() + "... ");
    }
});

client.login(plaintext);
