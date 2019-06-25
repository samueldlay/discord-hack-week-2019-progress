'use strict';

const isValidString = require(__dirname + '/is-valid-string.js');
// const env = require(__dirname + '/private/env.json');
// const Discord = require('discord.js');
// const client = new Discord.Client();

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', msg => {
//   if (isValidString(msg.content)) {
//     msg.reply('no u');
//   }
// });

// client.login(env.bot.token);

const msg = 'no u';
const valid = isValidString(msg);
console.log(valid);
