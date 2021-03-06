const express = require('express');
require('dotenv').config();
require('./discord');

const app = express();

app.all('/', (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.send('Bot is running');
});

app.listen(process.env.PORT); // Recebe solicitações que o deixa online
