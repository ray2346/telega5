let TelegramBot = require('node-telegram-bot-api');
let token = '979957847:AAHysdp4haGKUFs9YiW0DG784p9P5Km-2Ss';
let botOptions = {polling: true};
let bot = new TelegramBot(token, botOptions);


bot.on('text', function(msg)
{
    let messageChatId = msg.chat.id;
    let messageText = msg.text;


    {
        sendMessageByBot(messageChatId,  "?? ����������" + '\n' + "[������� ?? /city1 ] " +
            + '\n' +" ?? �������" + '\n' + "[������� ?? /city2 ]")


        switch (messageText === '/start') {
            case '/city1':
                gorod1.shopRayna()
                break;
            case '/city2':
                gorod2.shopRayna()
                break;
        }}});


class Gorod {
    constructor(name,sale,age) {
        this.name = name
        this.sale = sale
        this.age = age
    }
    shopRayna(){
        sendMessageByBot(this.name,this.sale,this.age,"����� ����� ���� 1500")
    }
}

const gorod1 = new Gorod('����������','�����','�����')
const gorod2 = new Gorod('�������','�����','�����')




















