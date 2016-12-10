// Require telegram-bot-api
var TelegramBot = require('node-telegram-bot-api');
// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot('226441370:AAHycQ7ELMKWN8IAlKbcPZ4CmncKq_Kedbs', { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
  var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  var message = msg.text.toLowerCase();

  if(message.indexOf('hi') > -1 || message.indexOf('hello') > -1 || message.indexOf('hey') > -1) return bot.sendMessage(chatId, 'Hey Sweet thing, how you doing?');
  if(message.indexOf('age') > -1 || message.indexOf('old') > -1) return bot.sendMessage(chatId, 'I don\'t really have an age. I guess you could say I\'m young at heart.');
  if(message.indexOf('love') > -1 || message.indexOf('like') > -1) return bot.sendVideo(chatId, '/Users/nitinmegamind/Desktop/giphy.gif');
});
