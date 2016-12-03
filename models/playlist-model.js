const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model');

//////////
// YOUR CODE HERE:
//////////
const Playlist = sequelizeConnection.define('playlist', {
	title: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	}
})

// could be a variable
Playlist.belongsToMany(Song, {through: 'playlistSongs'});
Song.belongsToMany(Playlist, {through: 'playlistSongs'});


module.exports = Playlist;
