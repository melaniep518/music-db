const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const User = require('../models/user-model');

User.sync({force: true})