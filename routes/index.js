const artist = require('./artist-route')
const song = require('./song-route')
const playlist = require('./playlist-route')
const genre = require('./genre-route')

module.exports = {
  routes : {
    artist,
    song,
    playlist,
    genre
  }
}
