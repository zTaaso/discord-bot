module.exports = {
  name: 'menu',
  description: 'Shows menu!',
  public: true,
  execute(message, args) {
    const commands = require('../util/getCommands');
    const { prefix } = require('../../config.json');

    const publicCommands = commands.filter((command) => !!command.public);

    let commandsString =
      'Eae gay, se liga na lista de comandos (tá em inglês msm pq to c preguiça de mudar): \n';

    publicCommands.forEach((command) => {
      commandsString = commandsString.concat(
        `\n--> ${prefix} ${command.name}: ${command.description} `,
        command.args ? `~ Accepted options: ${command.args}` : ''
      );
    });

    commandsString = commandsString.concat(
      '\n\n Por enquanto é só isso e vai tomar no cu'
    );
    message.channel.send(commandsString);
  },
};
