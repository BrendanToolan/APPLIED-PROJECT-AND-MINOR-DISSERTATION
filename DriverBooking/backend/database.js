'use strict';

var config = require('./config/config');
let Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.mysql.username, 
    config.mysql.password
);