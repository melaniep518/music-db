const router = require('express').Router();
const Artist = require('../models/artist-model')

function getAllArtists(req, res) {
  Artist.findAll()
    .then(function(data){
      console.log(data)
      res.send(data)
    })
}

router.route('/')
  .get(getAllArtists)


module.exports = router;
