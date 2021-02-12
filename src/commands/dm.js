module.exports = {
  name: 'dm',
  description: 'Sends you a dm!',
  public: true,
  execute(message, args) {
    message.author.send('Vai tomar no cu');
  },
};
