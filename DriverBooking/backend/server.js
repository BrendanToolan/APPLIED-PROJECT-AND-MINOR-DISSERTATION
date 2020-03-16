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

//verifing tokens
function tokenVerify (req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request')
    }

    let token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
        return res.status(401).send('Unauthorized Request')
    }

    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized Request')
    }
    req.userID = payload.subject
    next()
}

//register
//prevous error occured when I used router instead of app
app.post('/register', (req, res) => { 
    let userData = req.bodyParser
    let user = new user(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            //creates a token to save the data from regisered user
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

//login
////prevous error occured when I used router instead of app
/*
app.post('/Login', (req, res) => {
    let userData = req.body

    User.findOne({userName: userData.userName}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid Email')
            } else 
            if (user.password !== userData.password){
                res.status(401).send('Invalid Password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})
*/


//Use api routes from the class created
app.use('/api', api);

const server = app.listen(8081, function () {
    console.log("Server Info: ", server.address())
});

module.exports = app;