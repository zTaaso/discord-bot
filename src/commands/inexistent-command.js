module.exports = {
  name: 'inexistent-command',
  description: 'When someone tries a inexistent command',
  public: false,
  execute(message, args) {
    message.channel.send('Esse comando não existe, arrombado do krl');
  },
};
