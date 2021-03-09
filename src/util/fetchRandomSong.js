const song_api = require('../services/song_api');

const fetchRandomSong = async () => {
  const response = await song_api.get();
  const songs = response.data.items;

  const randomIndex = Math.round(Math.random() * songs.length);
  const randomSong = songs[randomIndex];

  return randomSong;
};

module.exports = fetchRandomSong;
