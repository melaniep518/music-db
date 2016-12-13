const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const session = require('express-session');

const User = require('./models/user-model');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/front/bundle')));

// app.set('trust proxy', 1) // trust first proxy
// attaches a cookie (nom nom) to any AJAX requests we make
app.use(session({
	secret: 'uhmm yea sure whatever',
	resave: true,
	saveUninitialized: true,
	cookie: {secure: true}
}))

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));

// Importing consolidated routes
const routes = require('./routes/index').routes;

// Artist routes
app.use('/api/artists', routes.artist);

// Song rotes
app.use('/api/songs', routes.song);

// Playlist routes
app.use('/api/playlists', routes.playlist);

// Genre routes
app.use('/api/genres', routes.genre);

// AUTHORAZTION
app.get('/auth', function(req, res) {
	console.log('session', req.session);
	if(req.session.username) {
		res.send(req.session.username);
	}
	else {
		res.send(null)
	}
})

// MOVE TO ROUTES
app.post('/login', (req, res) => {
	console.log('Session:', req.session);
	let userInfo = req.body;
	User.sync()
	.then(() => {
		return User.findOne({
			where: {
				username: userInfo.username
			}
		})
	})
	.then((user) => {
		console.log('USER: ', user);
// IF user exists check if password is correct
		if(user && user.password === userInfo.password) {
			console.log('password is correct')
// attaches username to our session cookie
			req.session.username = user.username;
			req.session.save();
			console.log('Updated session')
			return user;
		}
// ELSE IF user does not exist create new user
		else if(!user) {
			console.log('User not found');
			return User.create(userInfo);
		}
		else {
			console.log('Incorrect password')
		}
	})
})



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});


