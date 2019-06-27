'use strict';

const env = require(__dirname + '/private/env.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const string = 'halloween';
  const string2 = 'test';
  const string3 = 'nice';
  const happyHallow = new Discord.RichEmbed;
  if (msg.content.toUpperCase().includes(string.toUpperCase())) {
    // msg.reply('God is his only son');
    
    return msg.reply(happyHallow.addField('First Favorite Candybar:', 'Snickers', false).addField('Second Favorite Candybar:', 'PayDay', false).setColor('ORANGE').setTitle('Happy Halloween!').setImage('https://i.pinimg.com/originals/34/c8/e4/34c8e48e1821ccf73aace421fc1b5cd1.gif'));
  }

  if (msg.content.toUpperCase() === string2.toUpperCase()) {
    // msg.reply('God is his only son');
    happyHallow.author = 'Samuel';
    return msg.reply(`The Author: ${happyHallow.author}`);
  }
  
  if (msg.content.toUpperCase().includes(string3.toUpperCase())) {
    // msg.reply('God is his only son');
    
    return msg.reply(happyHallow.setColor('PURPLE').setTitle('Fuck Yo Couch!').setImage('https://memegenerator.net/img/instances/64102014.jpg'));
  }
  
});

client.login(env.bot.token);