const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Estoy pruento!');
});

client.on('message', message => {
    if (message.content === 'pog'){
        message.channel.send('pog frog');
    }
});

client.login(process.env.TOKEN);
