// MySQL Server connection parameters:
let mysql = require('mysql');
//var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

let connection = mysql.createConnection({
    // Localhost
    host: 'localhost',
    // MySQL user + database
    user: 'root',
    password: '',
    database: 'bigproject'
});

// Connect to the mysql database.
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connect to MySQL Server");
    console.log("Status: " + connection.state, "\nDatabase: " + connection.config.database, "\nPort: " + connection.config.port);
});

// Export connection
module.exports = connection;
