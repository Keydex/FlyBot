
// bot.js
var botBuilder = require('claudia-bot-builder');
var greeting = require('greeting');
var fetch = require('node-fetch');
var devMode = 0;
var repeat = 0;
var message = "";
var bot = botBuilder(function(message) {
  if(message.text.indexOf('alive') >= 0){
    return 'Yes, I am Alive';
  }
  else if(message.text == "Dev On"){
    devMode = 1;
    return 'Developer Mode activated';
  }
  else if(message.text == "Dev Off"){
    devMode = 0;
    return 'Developer mode off';
  }
  else if(message.text == "Dev Status"){
    return 'Your Dev Status is = ' + devMode;
  }
  else if(repeat == 0){
    repeat = 1;
    return 'I have received your message \"' + message.text + '\". However my NLU has not been installed so I cannot understand it. ';
  }
  else{
    return greeting.random();
  }
}, { platforms: ['groupme', 'twilio'] });

module.exports = bot;
