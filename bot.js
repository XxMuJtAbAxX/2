const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ten10.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 

 //كود للتجربة 

client.on('message', message =>{
  if(message.content === '+ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");



client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('+bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "ScrpitBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bk')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});

client.on('message', async message => {
 
   if (message.content.startsWith("+new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()

                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتبا close`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'close', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('لم يتم تقفيل التكت').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 
 
client.login("NjAzNzkzOTUxNjg1ODY5NTc5.XTkk9g.8GX1kUnrTKqybV3oCW7Yq3oE_hg");


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('💖');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.login('NjAzNzkzOTUxNjg1ODY5NTc5.XTkk9g.8GX1kUnrTKqybV3oCW7Yq3oE_hg');


client.on('ready',  () => {
  console.log('By:XxMuJtAbAxX');
});


client.on('message', message => {
    if(message.content === prefix + 'انشاء') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })     

     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
    }
	});
	
	

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '51');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '53');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '54');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '55');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '56');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '57');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '58');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '59');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '60');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '-61');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '62');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '63');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '64');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '65');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '66');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '67');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '68');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '69');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '70');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '71');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '72');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '73');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '74');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '75');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '76');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '77');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '78');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '79');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '80');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '81');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '82');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '83');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '84');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '85');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '86');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '87');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '88');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '89');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '90');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '91');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '92');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '93');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '94');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '95');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '96');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '97');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '98');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '99');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '100');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '101');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '102');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '103');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '104');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '105');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '106');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '107');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '108');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح+امسح+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '109');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح+امسح+امسح+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '110');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '111');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '112');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '113');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '114');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '115');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '116');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '117');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '118');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '119');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '121');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '122');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '123');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '124');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '125');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '126');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '127');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '128');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '129');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '130');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '131');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '132');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '133');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '134');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '135');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '136');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("+امسح")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '137');
		
		role.delete()
		}
	
	});




	client.login('NjAzNzkzOTUxNjg1ODY5NTc5.XTkk9g.8GX1kUnrTKqybV3oCW7Yq3oE_hg');


client.on("message", function(message) {
    var prefix = "+";
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Puplic | عامه","👥",true)
    .addField("Admin | ادمنيه","👑",true)
    .addField("Games | العاب","🎮",true)
    .addField("Other orders | اوامر اخرى","🤖",true)    
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('👥')
        msg.react("👑")
        msg.react("🎮")
        msg.react("🤖")       
.then(() => msg.react('👥'))
.then(() =>msg.react('👑'))
.then(() => msg.react('🎮'))
.then(() => msg.react('🤖'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 18000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
      :busts_in_silhouette:***__اوامر عامة__***:loudspeaker: 
**
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『+id ====>معلومات عن حسابك الشخصي
『+server ====>معلومات حول السيرفر
『+move ====>سحب عضو الى رومك الصوتي
『+new ====>لتفح تكت جديد
『+close ====>لغلق تكت
『+link ====>يسويلك رابط لمدة يوم وعدد الاستخدامات 100
『+avatar ====>يعرض اك صورتك الشخصية
『+image ====>يعرض لك صورة السيرفر
『+emojilist ====>يظهر لك جميع ايموجي السيرفر
『+bans ====>عدد اشخاص المبندة من السيرفر
『+Minv ====>عددالاشخاص التي دعوتهم الى سيرفر
『+topinv ====>توب انفايت للسيرفر
『+quran ====>القرءان الكريم على شكل صورة
『+rules ====>لعرض قوانيين السيرفر
『+binv ====>لدعوة اي بوت الى سيرفرك
『+لعرض الوقت<====الوقت
『+email ====>يعطيك ايميل
『+report ====>للابلاغ عن مخالفة في سيرفر
『+hypixel ====>يعرض لك ملف الاعب في هايبكسل
『+v2min ====>لانشاء روم صوتي 2دقيقة مدته
『+vonline ====>لتفعيل فويس اونلاين
『+members ====>يعرض لك حالات الاعضاء
『+send ====>لارسال رسالة الى شخص باسم البوت
『+bot ====>يعرض لك معلومات تبع البوت
『+bs ====>عدد السيرفرات التي يوجد فيها البوت
『+usersinfo ====>معلومات مستخدمين البوت 
『+p====>  لتشغيل ميوزك
『+s====>  لايقاف الميوزك
『+sk====>  لتخطي الميوزك
『+q====>  لعرض قائمه الانتظار
『+vol====>  لرفع صوت
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『 By ====> ! ♕COD'XxMuJtAbAxX#3338
البوت قيد التطور
**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png')
      .setColor("#000000")
      .setDescription(`
      :key:***__اوامر ادارية__***:crown: 
**『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『+say====>يكرر البوت كلامك
『+ban====>حضر عضو من السيرفر
『+setwelcomer====>لتحديد روم الويلكم
『+kick====>طرد عضو من السيرفر
『+mute====>لاعطاء ميوت كتابي لعضو
『+unmute====>فك الميوت عن العضو
『+warn====>لتحذير عضو
『+openroom====>فتح المحادثة في الروم
『+closeroom====>قفل المحادثة في الروم
『+role====>اعطاء رتبه لشخض معين
『+role humans====>اعطاء رتب للبشريين
『+role bots====>اعطاء رتبه للبوتات
『+role all====>اعطاء رتبه للجميع سواء بشر او بوتات
『+-role====>سحب الرتبه من شخص معين
『+-role humans====>سحب رتبه من الميمبرز
『+-role bots====>سحب رتبه للبوتات
『+-role all====>سحب رتبه معينه من جميع الاعضاء سواء يوزرات او بوتات
『+giveaway====>لانشاء قيف اوي
『+setStreaming====>لتغير حالت البوت (لصاحب البوت فقط)
『+bc====>لارسال رسالة لجميع اعضاء سيرفر في الخاص
『+bk====>اراسل رسالة للاعضاء ب امبد او بدون
『+cr====>انشاء الوان بعدد
『+لمسح الشات كله<==== مسح
『+لانشاء 137 لون مختلف <====انشاء
『+لمسح 137 لون <====امسح

『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『 By ====> ====>  ! ♕COD'XxMuJtAbAxX#3338
البوت قيد التطور
**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
      .setColor("#000000")
      .setDescription(`
       :video_game: ***__اوامر العاب__***:game_die:
 **       
『+cuttweet ====> لعبة كت تويت
『+لعبة هل تعلم<====هل تعلم
『+cat ====> قطط كيوت 
『+حكم
『+جمع
『+طرح
『+ضرب
『+فواكه
『+فكك
『+عواصم
『+لعبة صراحه <====صراحة
『+لعبة القرعة <==== قرعة
『+xo ====> xo لعبة 
『+نكت مضحكه <==== نكت
『+لعبة الزواج<====الزواج
『+لعبة القتل<==== قتل
『+اسئلة عامة <==== السؤال
『 By ====> WESO#0001
`)
   message.author.sendEmbed(embed)
   message.reply('تم ارسالك بلخاص')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
            -=- اوامر اخرى مهمة  -=-
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『+support====> رابط سيرفر الدعم الفني
『+inv====> رابط اضافة البوت
『+contact ====>لارسال رسالة لصاحب البوت
『+ping====> لمعرفه سرعه اتصال البوت
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
`)
   message.author.sendEmbed(embed)
   message.reply('تم ارسالك بلخاص')
})
    })
}

});






















client.on('message', message => {
    if (message.content == "+سؤال") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});


client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** هذا الأمر فقط للخوادم **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "قتل"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار مو زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`يرجى ذكر عضو لقتل :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(6000)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح 🕳 **").then(msg => msg.delete(7000));
    }
});



client.on('message', message => {
   if(message.channel.type === "dm") return;
     if(message.content.startsWith ("+زواج")) {
     if(!message.channel.guild) return message.reply(' هذا الأمر فقط للخوادم ')
     var proposed = message.mentions.members.first()
 
     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت').catch(console.error);
      if(proposed === message.author) return message.reply(`**خنتى ؟ **`);
       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
             message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 10 ثواني
اكتبي موافقه او لا**`)
 
const filter = m => m.content.startsWith("موافقه");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبرووك**`))
 
  const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
  message.channel.send(`**${message.author} تم رفض عرضك**`);
})
 
 
 
 
 }
});


client.on('message', message => {
var prefix = "+";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( ألعب مع نفسك)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('يجب الانتضار حيث ما يتم الموافقه')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`منشن مع من تريد ألعب`)
    .then(console.log("خطأ الرد بنجاح"))
    .catch(console.error);
  }
}
 });

  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "قرعة")){
            if(!args) return message.channel.send("يجب كتابه رقم")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });



const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
	 'صراحه | نفسك فـ ايه ؟',
	 'صراحه | هل تحب فتاه او احببت من قبل ؟',
	 'صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟',
	 'صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟',
	 'صراحه | هل تحب مدرستك ؟',
	 'صراحه | ما الشئ الذي تتمني ان يحصل ؟',
	 'صراحه | هل تحب عائلتك ؟',
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('+صراحه')) {
     if(!message.channel.guild) return message.reply('** هذا الأمر فقط للخوادم **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});


client.on('message', message => {
    if (message.content == "+فكك") {
        var x = ["محمد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"رياضيات",
"بسم الله رحمن رحيم",
"طماطم",
"سيرفر",
"مجتبى",
"ام سيرفر",
"ام سستم",                 
];
        var x2 = ['م ح م ح',
        "م د ر س ة",
        "ب ي ت ",
        "ا ل ل ه",
"ب ي ت م ق د س",
"م ه ن د س",
"ر ي ا ض ي ا ت",
"ب س م ا ل ل ه ر ح م ن ر ح ي م",
"ط م ا ط م",
"س ي ر ف ر",
"م ج ت ب ى",
"ا م س ي ر ف ر",
"ا م س س ت م"                  
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  فكك
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
        })
        })
    }
})

client.on('message', message => {
if(message.content.startsWith("+فواكه")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "يفوز!"
  } else {
    we = "تخسر!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => {
    if (message.content == "+عواصم"){
        var x = ["ما عاصمة **المغرب**",
    "ما عاصمة **افغانستان**",
    "ما عاصمة **الجزائر **",
    "ما عاصمة **الارجنتين",
    "ما عاصمة ** مصر**",
    "ما عاصمة ** استراليا**",
    "ما عاصمة ** البرازيل**",
    "ما عاصمة **قطر  **",
    "ما عاصمة **السعودية  **",
    "ما عاصمة **سوريا  **",
    "ما عاصمة **تركيا  **",
    "ما عاصمة **العراق  **",
    "ما عاصمة **لبنان  **",
    "ما عاصمة **فلسطين  **",
    "ما عاصمة **امريكا  **",
   "ما عاصمة **كندا  **",
   "ما عاصمة **البرازيل  **",
];
        var x2 = ['الرباط',
        "كابل",
        "الجزائر",
      "بوينس ايرس",
"القاهرة",
"كانبرا",
"برازيليا",
"الدوحة",
      "الرياض",
      "دمشق",
      "انقرة",
    "بغداد",
      "بيروت",
    "القدس",
  "وشنطن",
    "اوتاوا",
  "برازيليا",
  
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب عاصمة صح :  __**${x[x3]}**__
لديك 20 ثانية لكتابة عاصمة صحيحة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة عاصمة صح في الوقت المناسب  `);
        })
        })
    }
})
+

client.on('message', message => {
    if (message.content == "+جمع") {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"10000000000+2=?",
"232+21=?",
"12+23=?",                 
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10000000002",
  "253",
  "35",
                  
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يحل جمع : __**${x[x3]}**_
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بحل جمع في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "+ضرب") {
        var x = ["9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['81',
        "72",
        "16",
        "44",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يحل ضرب :  __**${x[x3]}**__
لديك 15 ثانية لحل ضرب`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "+طرح") {
        var x = ["4326-2345=?",
"5822-8547=?",
"543-823=?",
"1500-500=?",
"4322-2768=?",
"5652-1255=?",
"3421-11234=?",
"34545-1233=?",
"23456-54332=?",
"2312-3433=?",
"4321-321=?",
];
        var x2 = ['1981',
        "-2725",
        "-280",
        "1000",
"1554",
"4397",
"-7813",
"33312",
"-30876",
"1121",
"4000",

        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يكتب حل صح :  __**${x[x3]}**__
لديك 15 ثانية لكتابة حل صحيح`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل في الوقت المناسب  `);
        })
        })
    }
})



const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل على شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
 ]
  client.on('message', message => {
    var prefix = '+';
  if (message.content.startsWith(prefix + 'حكم')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("لعبة حكم ..")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });

var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
        if(!message.channel.guild) return message.reply('** هذا الأمر فقط للخوادم **');
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
.setColor(0xd3d0c4)
   .setFooter(`WESO.Bot`)
message.channel.sendEmbed(cat);

    }
});

client.on('message', message => {
var prefix = "+";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("+cuttweet")) {
                if(!message.channel.guild) return message.reply('** هذا الأمر فقط للخوادم**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'leave')
        if (!channel) return;
        channel.send({embed : embed});
        })



client.on('message', msg => {
                        let args = msg.content.split(" ").slice(1).join(" ")
if (msg.content.split(" ")[0].toLowerCase() === "+cr") {
    if(!args) return msg.channel.send('`الرجاء كتابة عدد اللوان المرجى صنعها`');
             if (!msg.member.hasPermission('MANAGE_ROLES')) return;
              msg.channel.send(`** تم الألوان الناجحة تم إنشاؤها  ${args}**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            msg.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
});

client.on('message', message => {
    if (message.content.startsWith("+link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});


client.on('message', message => {
    if (message.content.startsWith("+bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('Info WESO.Bot.')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ + ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
    })
}
});


client.on('message' , message => {
  var prefix = "+"
  
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  
  
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  
  
  client.users.get("325691905381892096").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
       .setThumbnail(message.author.avatarURL)
       .setFooter("ScriptBot | System")
                                                  
  
  message.channel.send(embed);
  
  
  }
      
  });




client.on('message', message => {
       if (message.content.startsWith(prefix + 'bs')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});


const perfix = '+';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});



client.on('message', message => {
    if (message.content == "+سؤال") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});




client.on('message', message => {
    if(message.content == '+members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**حالات الاعضاء🔋
:green_heart: اونلاين   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:مشغول       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: خامل      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: اوفلاين   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   الكل  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });





client.on('message',async Epic => {
  var prefix = "+" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');    
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});





   client.on('message', msg => {  //WESO#0001
    if (msg.content === 'باك') {  //WESO#0001
      msg.reply('** :wink: وِلِـكُمِـ ﻧَوِرُتْ   :sparkling_heart:**');  //WESO#0001
    }
  });

client.on('message', msg => {  //WESO#0001
    if (msg.content === 'السلام عليكم') {  //WESO#0001
      msg.reply('**وعليكم السلام**');  //WESO#0001
    }
  });


client.on('message', msg => {  //WESO#0001
    if (msg.content === 'باي') {  //WESO#0001
      msg.reply('**الله معك**');  //WESO#0001
    }
  });
  

  client.on('message', msg => {  //WESO#0001
    if (msg.content === 'سلام عليكم') {  //WESO#0001
      msg.reply('*وعليكم السلام**');  //WESO#0001
    }
  });


  
   client.on('message', msg => {  //WESO#0001
    if (msg.content === 'هلا') {  //WESO#0001
      msg.reply('**هلا بيك :heart: **');  //WESO#0001
    }
  });



client.on('message', message => {
  var prefix = "+"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**يرجى تقديم اسم مستخدم Minecraft. ❌**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# تحديد سبب!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("لا يمكن العثور على المستخدم.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__هل أنت متأكد من أنك تريد إرسال هذا إلى صاحب الخادم??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "email") {
function randomem() {
let email = '';
const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
for (let i = 0; i < 5; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
return email;
}
function randompass() {
let pass = '';
const CoDeS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 8; i++) pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
return pass;
}
const random1 = randomem();
const random2 = randompass();
message.author.send(`P.P.------------------------P.P.
Email : **${random1}@gmail.com**
Password : **${random2}**
P.P.------------------------P.P.`).catch(err => {
   if(err == "DiscordAPIError:لا يمكن إرسال رسائل إلى هذا المستخدم") {
      return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
}
});

message.channel.send("**تم الارسال الحساب في الخاص | ☑ **")
}});

 client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'leave')
        if (!channel) return;
        channel.send({embed : embed});
        })

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "+";

    if (message.content === prefix + "الوقت") {
        if (!message.channel.guild) return message.reply('** هذا الأمر فقط للخوادم **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!-[ التاريخ ]-! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});


client.on('message', msg => {
    if(msg.content.startsWith('+binv')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('`منشن بوت`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});


client.on("message", message => {
    if (message.content === "+rules") {
           message.react("✅")
              message.react("❌")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
[ ★・rules   |  قوانين السيرفر  ]
-  نتمنه الالتزام بالقوانين وعدم المخالفه  -



-1- ممنوع الترويج لسيرفر ثاني او لقناة يوتيوب او اي نشر بدون علم الاداره

-2- ممنوع التكلم بلكلمات المخله بلاداب وعدم المزح مع الناس في الرومات الصوتية او الكتابية

-3- نتمنا منكم الحترام وعدم طلب الرتب نحن نعطي الرتب للأشخاص المتفاعلون والمحترمون

-4- ممنوع البيع والشراء بالسيرفر وممنوع التكلم بالهاك بكل انواعه



- وبحال اي شخص ميلتزم بلقوانين سيتم طرده من السيرفر -
__

@everyone || @here
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
  
    `)
   
      message.author.sendEmbed(embed)
      
      }
}); 


client.on('message', message => {
if(message.content === prefix + 'quran') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;

	message.delete();

	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png')
	.setImage(pages[page-1])


	message.channel.sendEmbed(embed).then(msg => {

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))

			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });

			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });

			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; 
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});



client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@325691905381892096> :wink:. فقط هذا الشخص يمكنه القيام بإعادة تشغيل الروبوت حتى لا تحاول مرة أخرى");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');



    }

  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[ ] ${client.users.size}`)
});

client.on('message', async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(' ');
  const searchString = args.slice(1).join(' ');
  const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length)
  if (command === `p`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has('CONNECT')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }
    if (!permissions.has('SPEAK')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }

    if (!permissions.has('EMBED_LINKS')) {
      return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
      }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
    } else {
      try {

        var video = await youtube.getVideo(url);

      } catch (error) {
        try {
                          var fast = {};
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
              .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
          .setFooter(`${msg.guild.name}`)
            .setThumbnail('https://e.top4top.net/p_1001lsv3w1.png')

          msg.channel.sendEmbed(embed1).then(message =>{

            message.delete(15000)

          });
          try {
            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 20000,
              errors: ['time']
            })

            }catch(err) {
            console.error(err);
            return msg.channel.send('لم يتم إختيآر مقطع صوتي');
            }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
        }
    }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `sk`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
    serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
    return undefined;
  } else if (command === `s`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
    return undefined;
  } else if (command === `v`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
    if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `replay`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
  msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);

  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    let index = 0;
    const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
    }
    return msg.channel.send('لا يوجد شيء حالي ف العمل.');
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
    }
    return msg.channel.send('لا يوجد شيء حالي في العمل.');
  }

  return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`,
    time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
    eyad:`${video.thumbnails.high.url}`,
    best:`${video.channel.title}`,
    bees:`${video.raw.snippet.publishedAt}`,
    shahd:`${video.raw.kind}`,
    zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
  serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
  }).then(love => {
    love.react('👍').then(r=>{
    love.react('👎').then(r =>{
    love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

        ll.on("collect", r => {
          yyyy[msg.guild.id].like++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
    cn.on("collect", r => {
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
})
})
})
})
})
}
});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}inv`)){
    var embed = new Discord.RichEmbed()
    .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
    message.author.send({embed})
  }
});

client.on('message', message => {
  if (message.content === "#support") {
  let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/nyeTmQU**")
  
  
message.channel.sendEmbed(embed);
 }
});

client.on('message', message => {
if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
}
 }
});


client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "مسح")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "تــم مسح الشات",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on('message', async message =>{

  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**This Command For Servers Only ! **').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
    if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply(":information_source: `+mute @OrochiX` يجب تحديد شخص ") .then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**I Dont Have Permission** `MANAGE_MASSAGEES`');
      let muterole = message.guild.roles.find(`name`, "Muted");
  
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }

      await(tomute.addRole(muterole.id));
      message.channel.send(`**<@${tomute.id}> Has been muted ! :white_check_mark:**`);
        message.delete();

    }
  });
  
client.on('message', async message => {
        let mention = message.mentions.members.first();
      let command = message.content.split(" ")[0];
         command = command.slice(prefix.length);
        let args = message.content.split(" ").slice(1);	 
      if(command === `unmute`) {2
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**انت لاتحب ان يكون لديك Mute_Members**").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**ليس لدي اذن Mute_Members**").then(msg => msg.delete(6000))
      
        let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
           if(!kinggamer) return message.channel.send(':information_source:  `+unmute @OrochiX` يجب تحديد شخص ').then(msg => {
            msg.delete(3500);
            message.delete(3500); 
          });
      
        let role = message.guild.roles.find (r => r.name === "Muted");
        
        if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
      
        await kinggamer.removeRole(role) 
        message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);      
        return;
      
        }
      
      });

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لديك اذن` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي اذن` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**اذكر شخص**");
  if(!reason) return;
  if (!message.guild.member(user)
  .bannable) return message.reply("**هذا الشخص لديه درجة أعلى من رتبة روبوت له**");

  message.guild.member(user).ban(7, user);
  message.channel.send(`**:white_check_mark: ${user} has been banned :airplane: **`)
user.send(`You Are Has Been Banned Permanently In ${message.guild.name} reason: ${reason}`)
  }})


const sWlc = {}
const premium = ['325691905381892096', '432504963919511553', '560827200077824001', '460472640558202881']
client.on('message', message => {
var prefix = "+";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <اسم القناة>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s تم تغير القناة الى${newChannel}**`);
  }
});


client.on('message', message => {
  var prefix = "+";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
      if (!message.channel.guild) return;
  
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply(":information_source: `+kick @OrochiX` يجب تحديد شخص ");
    if(!reason) return message.reply ("اكتب السبب من فضلك");
    if (!message.guild.member(user)
    .bannable) return message.reply("لا أستطيع أن أكون أعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  message.channel.send(`**:white_check_mark: ${user} has been kicked ! **`)
  user.send(`**لقد تم الركل في ${message.guild.name} reason: ${reason}**`)
      message.delete()
  }
  });

client.on('message',  async  message  =>  {
  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
if(message.content.startsWith(prefix  +  'warn'))  {
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('**للأسف لا تمتلك صلاحيات' );
  if(!user)  return  message.channel.send("**  -  أذكر عضوا  **")//by  XxMuJtAbAxX
  if(!reason)  return  message.channel.send("**  -  اكتب السبب  **")//by  XxMuJtAbAxX
  let  reportembed  =  new  Discord.RichEmbed()
  .setTitle(`**New  Warned User !**`)
.addField("**-  Warned  User:**",  `[${user}  with  ID  ${user.id}]`)//by  XxMuJtAbAxX
.addField('**-  Warned  By:**',`[${message.author.tag} with id ${message.author.id}]`)//by  XxMuJtAbAxX
.addField('**-  Reason:**',  `[${reason}]`,  true)
.addField("**-  Warned  in:**",`[${message.channel.name}]`)
.addField("**-  Time & Date:**",`[${message.createdAt}]`)
.setFooter("M System")
.setColor('#060c37')
let incidentchannel = message.guild.channels.find(`name`, "warns");
if(!incidentchannel) return message.channel.send("لا يمكن العثور على قناة يحذر.");
incidentchannel.send(reportembed);
message.reply(`**:تحذير: ${user} لقد تم تحذيره !:تحذير:**`).then(msg  =>  msg.delete(3000));
user.send(`**:تحذير: لقد تم تحذيرك في ${message.guild.name} reason: ${reason} :تحذير:**`)
}

//coding  by  XxMuJtAbAxX  !

})


client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
 });  

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + '-role' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`M System`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

client.on("message", message => {
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")

      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : XxMuJtAbAxX`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : XxMuJtAbAxX ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

  
client.login(process.env.BOT_TOKEN);


client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

 client.on('message', message => {
    if (message.content.startsWith("+bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on("message", async message => {
            if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'Minv')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});




client.on('message',async message => {
	
  if(message.content.startsWith(prefix + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "تقديم");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بتقديم");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| هل ستحترم القوانين؟... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| ما اسم ارتبه التى تريد الحصول عليها ولماذا؟... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديم**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**هلسيحترم القوانين؟**]:
${boi}
 
[**اسم الرتبه والسبب**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});





client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "325691905381892096") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);

