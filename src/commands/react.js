const getInsult = require('../util/getRandomInsult');

module.exports = {
  name: 'react',
  description: 'I will react to the emoji you choose!',
  args: '🤠',
  public: true,
  execute(message, args) {
    if (!args[0]) {
      message.channel.send(
        `vc tem que falar o emoji, seu ${getInsult(message).insult}`
      );
      message.react('🤬');
      return;
    }

    message.react(args[0]);
  },
};
