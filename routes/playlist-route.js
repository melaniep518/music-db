const router = require('express').Router();
const Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

// ****************************** Callbacks ******************************

function getPlaylistsWithInfo(req, res) {
	Playlist.findAll({
		include: [Song]
	})
	.then(function(data) {
		res.send(data);
	})
}


// ****************************** Routes ******************************

// /api/playlists GET all playlists with song information fully populated (in other words, should say full song, artist, and genre names, instead of only having the ids)
router.route('/')
	.get(getPlaylistsWithInfo)

module.exports = router;