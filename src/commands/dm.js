module.exports = {
  name: 'dm',
  description: 'Sends you a dm!',
  public: true,
  logs: [{ user_id: 1, msgs: [''] }],
  async execute(message, args) {
    if (!message.channel.type === 'dm') {
      message.author.send('Vai tomar no cu');
      console.log('oi');
      return;
    }

    const messageContent = message.content;

    message.author.send('Vaisefuder');
    // client.fetchApplication()
    const user_id = message.author.id;

    const userIndex = this.logs.findIndex((user) => user.user_id === user_id);
    if (userIndex > -1) {
      this.logs[userIndex].msgs.push([messageContent]);
      return;
    }
    this.logs.push({ user_id, msgs: [messageContent] });
  },
};
