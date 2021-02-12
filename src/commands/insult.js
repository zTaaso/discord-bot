const getInsult = require('../util/getRandomInsult');

module.exports = {
  name: 'insult',
  args: 'on/off',
  description: `Insult literally everyone in the chat!`,
  enabled: true,
  enabled_guilds: [],
  public: true,
  safeUsers: ['ztaaso'],

  execute(message, args) {
    // if (this.safeUsers.includes(message.author.username.toLowerCase())) return;

    let isEnabled = !!this.enabled_guilds.find(
      (guild) => guild === message.guild.id
    );

    // this.enabled = isEnabled;
    const guild_id = message.guild.id;

    if (args[0] === 'on') {
      if (isEnabled === true) {
        message.channel.send('esse comando ja tá ligado, seu merdinha');
        return;
      }

      this.enabled_guilds = this.enabled_guilds.concat([guild_id]);
      message.channel.send('blz agr vc ativou esse comando chato pra krl');
      return;
    } else if (args[0] === 'off') {
      if (isEnabled === false) {
        message.channel.send('esse comando ja tá desligado, seu merdinha');
        return;
      }

      this.enabled_guilds = this.enabled_guilds.filter(
        (guild) => guild !== guild_id
      );
      message.channel.send('blz agr vc desativou esse comando chato pra krl');
      return;
    }

    if (!isEnabled) return;
    message.channel.send(getInsult(message).insultPhrase);
  },
};
