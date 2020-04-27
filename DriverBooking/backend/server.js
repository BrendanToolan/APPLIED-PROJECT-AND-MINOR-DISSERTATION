/*
    INSTALLED PACKAGES:
    npm install -g @angular/cli
    npm install express --save
    npm install body-parser --save
    npm install mysql     : https://www.w3schools.com/nodejs/nodejs_mysql.asp
    npm install -g nodemon : https://nodemon.io/
    npm install @angular/material @angular/cdk @angular/animations --save
    npm install @angular/flex-layout
    npm install express-session
    npm install cookie-parser -g - (needs to be installed in the backend and outside the backend)
    npm install node-gyp -g
    npm i --S bcrypt ( for password hashing )
    npm i --S bcryptjs ( for password hashing )

*/

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

//Parser content to JSON !!!!!!!!!!!!!!!!!!!!!
app.use(bodyParser.json());
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    name: 'cookie',
    key: 'sessCookie',
    secret: 'secret', //Secret for signing cookies
    resave: false, // Force save for each request
    savseUninitialized: false, // Save a session that is new, but has not been modified
    cookie: {
        expires: 3600000, //after 1 hour
    } // End cookie
}));

// Create application/x-www-form-urlencoded parser & Cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' === req.method) {
        res.status(200).send();
    } else {
        next();
    }
});

//Use api routes from the class created
app.use('/api', api);

const server = app.listen(8081, function () {
    console.log("Server Info: ", server.address())
});

module.exports = app;