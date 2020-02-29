
const telegramBot = require('node-telegram-bot-api')
const token = '1084830404:AAEszzF1u3d8675TSh9qoFKJ_zWdRVADxdk';
const  bot = new TelegramBot(token, {polling: true});

bot.on('message',msg =>{
  bot.sendMessage(msg.chat.id,'Helloy heroku, bot saya: "hi , ${msg.from.first_name}"')
})