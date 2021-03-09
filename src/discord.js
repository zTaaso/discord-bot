const Discord = require('discord.js'); //Conexão com a livraria Discord.js

const client = new Discord.Client(); //Criação de um novo Client
client.commands = new Discord.Collection();

const { prefix } = require('../config.json'); //Pegando o prefixo do bot para respostas de comandos
const generateLog = require('./util/generateLog');

const commands = require('./util/getCommands');

commands.forEach((command) => client.commands.set(command.name, command));

client.on('message', async (message) => {
  try {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) generateLog(message);

    if (message.channel.type === 'dm') {
      client.commands.get('dm').execute(message);
      return;
    }

    if (message.content === prefix) {
      client.commands.get('menu').execute(message);
      return;
    }

    if (!message.content.startsWith(prefix)) {
      client.commands.get('insult').execute(message);
      return;
    }

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command) && message.content.startsWith(prefix)) {
      client.commands.get('inexistent-command').execute(message);
      return;
    }

    client.commands.get(command).execute(message, args);
  } catch (err) {
    console.log(err);

    const imgError =
      'https://i.pinimg.com/564x/0c/8a/ac/0c8aac99bff63074ad8d8b1a66db56bc.jpg';

    message.channel.send('Erro desconhecido :(', {
      files: [imgError],
    });
  }
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  await client.user.setStatus('idle');
  await client.user.setActivity({
    type: 'LISTENING',
    name: 'sua mãe gemendo',
  });
  // client.user.setActivity({})
});

client.login(process.env.TOKEN);

module.exports = client;
