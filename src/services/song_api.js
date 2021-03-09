const axios = require('axios').default;

const song_api = axios.create({
  baseURL:
    'https://api.spotify.com/v1/playlists/04J2eBSsLWr05tK0eZ5cIv/tracks?fields=items(track(name,href,album(name,href,artists)))',
  headers: {
    Authorization: `Bearer ${process.env.SPOTIFY_AUTH_TOKEN}`,
  },
});

module.exports = song_api;
