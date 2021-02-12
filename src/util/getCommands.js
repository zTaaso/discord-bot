const fs = require('fs');
const { resolve } = require('path');

const commandsDir = resolve(__dirname, '../commands');

const commandFiles = fs
  .readdirSync(commandsDir)
  .filter((file) => file.endsWith('.js'));

const commands = [];

commandFiles.forEach((file) => {
  const command = require(`${commandsDir}/${file}`);
  commands.push(command);
});

module.exports = commands;
