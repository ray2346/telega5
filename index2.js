const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
let TelegramBot = require('node-telegram-bot-api');
const token = '979957847:AAHysdp4haGKUFs9YiW0DG784p9P5Km-2Ss';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Получили твое сообщение! Спасибо!');
});