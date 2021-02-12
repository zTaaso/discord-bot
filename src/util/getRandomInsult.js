module.exports = (message) => {
  const insultWords = [
    'arrombado',
    'merda',
    'filho da puta',
    'gay',
    'fodido',
    'desgraçado',
    'otário',
    'imbecil',
    'inútil',
    'cuzão',
    'puto',
    'ridículo',
    'saco de bosta',
    'trouxa',
  ];

  const { username } = message.author;
  const msgText = message.content;

  let randomIndex = Math.round(Math.random() * (insultWords.length - 1));

  const insult = insultWords[randomIndex];

  const insultPhrases = [
    `fala merda nao ${username}`,
    `o ${insult} do ${username} tá falando bosta dnv?`,
    `vai tomar no cu ${username}, ${insult} do caralho`,
    `tinha que ser esse ${insult}, mais conhecido como ${username}`,
    `${username} é nome de ${insult}`,
    `cala a boca ${username}`,
    `"${msgText}" o caralho, fala bosta n`,
    `vai lavar uma louça ${username}`,
    `fodase?`,
    `ngm liga, ${username}`,
    `o que q esse ${insult} tá falando?`,
  ];

  randomIndex = Math.round(Math.random() * (insultPhrases.length - 1));
  let insultPhrase = insultPhrases[randomIndex];

  const randomNumber = Math.round(Math.random() * 100);
  if (msgText.toLowerCase().includes('kk') && randomNumber > 50) {
    insultPhrase = `tá rindo do quê? ${insult}`;
  }

  return { insultPhrase, insult };
};
