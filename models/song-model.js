const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model');


//////////
// YOUR CODE HERE:
//////////

// Creating a model
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

// Joins
Song.belongsTo(Artist);

// SongGenre table
Song.belongsToMany(Genre, {through: 'songGenre'});
Genre.belongsToMany(Song, {through: 'songGenre'});

// Feature table
Artist.belongsToMany(Song, {through: 'songFeatures'});
Song.belongsToMany(Artist, {through: 'songFeatures'});


module.exports = Song;
