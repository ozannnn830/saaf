const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");


var prefix = 'up!';

module.exports = client => {
  var oyun = [
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random]);
  }, 120000);
  
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  client.user.setActivity(
    `${prefix}yardım || ${client.guilds.size} Server || ${client.users.size} User`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Oyun ismi ayarlandı!`
  );
};
