const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const watch = require('./watch.json')
var prefix = "m!"
var servers = {};
var search = require('youtube-search');
 
var opts = {
  maxResults: 1, 
  key: 'process.env.YT' 
};

client.on('ready', () => {
  console.log('Ik ben er klaar voor!');
client.user.setActivity("xNick Hardstyle", {type: "LISTENING"});
  	client.guilds.get("567392966080069633").channels.get("567396647986921503").join().then((connection) => {
   connection.playStream('http://streaming.slam.nl/web11_mp3');
 });
});

client.on('message', message => {
  
      //  const voiceChannel = message.member.voiceChannel;
     // var isReady = true;

     // if (message.content === `${prefix}join`) {
      //  if(!voiceChannel) {
        //  const embedError = new Discord.RichEmbed()
        //  .setTitle(`Foutmelding!`)
         // .setDescription(`Ik kan je spraakkanaal niet vinden!`)
         // .setColor(`#ff0000`)
          //.setFooter(`Zorg dat je in een spraakkanaal zit`);

        //  message.channel.send(embedError)
      //  } else if (isReady === true) {
       //   client.user.setActivity(`radio = 538 | m! | XnonstopMusic`, {type: "LISTENING"});
       //   voiceChannel.join().then(connection => {
        //    const dispatcher = connection.playStream('http://18973.live.streamtheworld.com/RADIO538.mp3');

         //   isReady = false;

       //     const embed = new Discord.RichEmbed()
        //    .setTitle(`ik speel muziek af`)
        //    .setDescription(`Je luistert nu naar Radio 538!`)
        //    .setColor(`#00ff00`)
        //    .setFooter(`Yay :D`);

         //   message.channel.send({embed});

          //  dispatcher.on("end", end => {
          //   client.user.setActivity("m! | XnonstopMusic")
           //   voiceChannel.leave();
           //   message.channel.send(`Tijd is op!`);
           //   isReady = true;
           // });
         // });
       // } else {
      //    const embedError2 = new Discord.RichEmbed()
      //    .setTitle(`Foutmelding!`)
      //    .setDescription(`Ik speel al muziek af!`)
       //   .setColor(`#ff0000`)
        //  .setFooter(`Yay :D`);

         // message.channel.send(embedError2);
       //}
      //} 
  // if (message.content === `${prefix}leave`) {
     //   if(!voiceChannel) {
      //    const embedError3 = new Discord.RichEmbed()
      //    .setTitle(`Foutmelding!`)
       //   .setDescription(`Ik kan je spraakkanaal niet vinden!`)
      //    .setColor(`#ff0000`)
       //   .setFooter(`Yay :D`);

       //   message.channel.send(embedError3);
       // } else {
        //  client.user.setActivity("m! | XnonstopMusic")
       //   voiceChannel.leave();
       //   message.channel.send(`Succesvol losgekoppeld!`);
       // }
     // }
    if(message.content === `${prefix}reboot`) {
    if(message.author.id !== '254273544689680386') {
        message.reply('Dit command is alleen voor de developer!');
    } else {
        message.channel.send(`Ik ga nu opnieuw opstarten!`);
        setTimeout(function() {
            process.exit();
        }, 1500);
    }
  }
});


client.login(process.env.TOKEN)
