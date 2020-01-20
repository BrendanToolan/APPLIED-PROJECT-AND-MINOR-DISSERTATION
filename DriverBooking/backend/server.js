/*
    INSTALLED PACKAGES:
    npm install -g @angular/cli
    npm install express --save
    npm install body-parser --save
    npm install mysql     : https://www.w3schools.com/nodejs/nodejs_mysql.asp
    npm install -g nodemon : https://nodemon.io/
    npm install @angular/material @angular/cdk @angular/animations --save
*/

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();

//Parser content to JSON !!!!!!!!!!!!!!!!!!!!!
app.use(bodyParser.json());
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(bodyParser.urlencoded({extended: true}));

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

