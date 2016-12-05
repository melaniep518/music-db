const router = require('express').Router();
const Artist = require('../models/artist-model');

// /api/artists GET all artists, ordered a-z

function getAllArtists(req, res) {
	Artist.findAll()
	.then(function(data) {
		console.log(data);
		res.send(data)
	})
}

function getArtistById(req, res) {
	Artist.findById(req.params.id)
	.then(function(data) {
		console.log(req.params);
		res.send(data);
	})
}

// /api/artists/ GET all artists
router.route('/')
	.get(getAllArtists);

// /api/artists/:id GET a specific artist by id
router.route('/:id')
	.get(getArtistById);

module.exports = router;
