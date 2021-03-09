const getInsult = require('../util/getRandomInsult');

module.exports = {
  name: 'react',
  description: 'I will react to your message with all the emoji(s) you choose!',
  args: '🤠',
  public: true,
  execute(message, args = '') {
    if (!args[0]) {
      message.channel.send(
        `vc tem que falar o emoji, seu ${getInsult(message).insult}`
      );
      message.react('🤬');
      return;
    }
    const emojis = args;

    emojis.forEach(async (emoji) => {
      try {
        message.react(emoji);
      } catch {
        message.channel.send(
          `mas é um ${
            getInsult(message).insult
          } mesmo né \n conseguiu fazer merda num comando simples desse`
        );
        message.react(':middle_finger:');
      }
    });
    // console.log(message.content, args[0].split(''));
    // message.react(args[0].split('')[0]);
  },
};
