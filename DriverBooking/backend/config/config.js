// MySQL Server connection parameters:
let mysql = require('mysql');

let connection = mysql.createConnection({
    // Localhost
    host: 'localhost',
    // MySQL user + database
    user: 'root',
    password: '',
    password: 'RumH@m96',
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
