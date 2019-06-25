'use strict';

const env = require(__dirname + '/private/env.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'no u') {
    msg.reply('no u');
  }
});

client.login(env.bot.token);
