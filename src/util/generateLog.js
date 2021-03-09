const fs = require('fs');
const { resolve } = require('path');
const { prefix } = require('../../config.json');

const formatDate = require('../util/formatDate');

function getPath(filename = '') {
  const path = resolve(__dirname, '..', 'logs', filename);
  return path;
}

if (!fs.existsSync(getPath())) {
  fs.mkdirSync(getPath());
}

function Logger(filename, permanent) {
  const flag = permanent ? 'a' : 'w';
  const logger = fs.createWriteStream(getPath(`${filename}.log`), {
    flags: flag,
  });

  return logger;
}

const messagesLogger = new Logger('messages', true);
const sessionMessagesLogger = new Logger('session_messages', false);

function computeMessage(message) {
  const date = message.createdAt || new Date();

  const formatedDate = formatDate(date);
  const formatedTime = date.toLocaleTimeString('pt');

  const { author, channel, guild } = message;

  let logText = '';
  if (message.channel.type === 'dm') {
    logText = `"${author.username}" disse "${message.content}" no privado.`;
  } else {
    logText = `"${author.username}" disse "${message.content}" no canal "${channel.name}" do server "${guild.name}"`;
  }

  const log = `${formatedDate} - ${formatedTime}: ${logText} \n`;
  return log;
}

function generateLog(message) {
  const log = computeMessage(message);

  messagesLogger.write(log);
  sessionMessagesLogger.write(log);
}

module.exports = generateLog;
