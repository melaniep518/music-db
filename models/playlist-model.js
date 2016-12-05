const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model')

const Playlist =  sequelizeConnection.define('playlist', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  }
})

Playlist.belongsToMany(Song, {through: 'playlistSongs'});
Song.belongsToMany(Playlist, {through: 'playlistSongs'});

module.exports = Playlist;
