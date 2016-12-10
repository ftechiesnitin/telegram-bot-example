// Require api lib
var apiai = require('apiai');
// Assign api key
var app = apiai("8ef06c347e75426ab40649d21caa9111");
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

  var request = app.textRequest(message, {
      sessionId: '' + new Date().getTime()
  });

  request.on('response', function(response) {
      return bot.sendMessage(chatId, response.result.fulfillment.speech);
  });

  request.on('error', function(error) {
      console.log(error);
  });

  request.end();
});
