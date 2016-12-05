const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

const Project = sequelizeConnection.define('project', {
	name: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	},
	releaseDate: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 20]
		}

	}
})

module.exports = Project;