const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model');

const Song = sequelizeConnection.define('song', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },
  youtube_url: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 50],
      isUrl: true
    }
  }
})

Song.belongsTo(Artist);
Song.belongsToMany(Genre, {through: 'Song_Genre'});
Genre.belongsToMany(Song, {through: 'Song_Genre'});


module.exports = Song;
