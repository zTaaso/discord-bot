const getInsult = require('../util/getRandomInsult');

module.exports = {
  name: 'insult',
  args: 'on/off',
  description: `Insult literally everyone in the chat!`,
  enabled: true,
  enabled_channels: [],
  public: true,
  safeUsers: ['ztaaso'],

  async execute(message, args = []) {
    const { client } = message;

    let isEnabled = !!this.enabled_channels.find(
      (guild) => guild === message.channel.id
    );

    // this.enabled = isEnabled;
    const channel_id = message.channel.id;

    if (args[0] === 'on') {
      if (isEnabled === true) {
        message.channel.send('esse comando ja tá ligado, seu merdinha');
        return;
      }

      this.enabled_channels = this.enabled_channels.concat([channel_id]);
      const sentMsg = await message.channel.send(
        'blz agr vc ativou esse comando chato pra krl'
      );
      client.setTimeout(async () => {
        await sentMsg.delete();
      }, 3000);

      return;
    } else if (args[0] === 'off') {
      if (isEnabled === false) {
        message.channel.send('esse comando ja tá desligado, seu merdinha');
        return;
      }

      this.enabled_channels = this.enabled_channels.filter(
        (channel) => channel !== channel_id
      );
      const sentMsg = await message.channel.send(
        'blz agr vc desativou esse comando chato pra krl'
      );
      client.setTimeout(async () => {
        await sentMsg.delete();
      }, 3000);
      return;
    }

    if (!isEnabled) return;
    message.channel.send(getInsult(message).insultPhrase);
  },
};
