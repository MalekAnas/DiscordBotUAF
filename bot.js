const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });

  
client.login(auth.token);



// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// // Initialize Discord Bot
// var bot = new Discord.Client({
//     token: auth.token,
//     autorun: true
// });
// bot.on('ready', function (evt) {
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
// });
// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];

//         args = args.splice(1);
//         switch (cmd) {
//             // !ping
//             case 'Hi':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//                 break;
//             // Just add any case commands if you want to..
//         }
//     }
// });