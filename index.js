var TelegramBot = require('node-telegram-bot-api');
var token = '979957847:AAHysdp4haGKUFs9YiW0DG784p9P5Km-2Ss';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);



bot.on('message',msg =>{
  bot.sendMessage(msg.chat.id,`Helloy heroku, bot saya: hi , ${msg.from.first_name}`)
})
