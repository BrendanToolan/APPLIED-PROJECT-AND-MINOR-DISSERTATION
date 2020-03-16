let express = require('express');
let router = express.Router();
let sql = require('../config/config.js');
const jwt = require('jsonwebtoken')

//Class for all routers


router.get('/', (req, res, next) => res.send('API Hello World'));

//get user//#endregio
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

var Location = {
    getLocation: function (callback) {
        // run query
        return sql.query('select * from location', callback);
    }
}
router.get('/locations', function (req, res) {
    console.log("inside the backend get method");
    Location.getLocation(function (err, data) {
        if (err) res.status(400).send(err)
        console.log("inside the backend get method");
        // Complete - send callback
        res.send(data);
        console.log(data);
    });
});

var Instructor = {
    getInstructor: function (callback) {
        // run query
        return sql.query('select * from instructor', callback);
    }
}

router.get('/instructors', function (req, res) {
    console.log("inside the backend get method");
    Instructor.getInstructor(function (err, data) {
        if (err) res.status(400).send(err)
        console.log("inside the backend get method");
        // Complete - send callback
        res.send(data);
        console.log(data);
    });
});


router.get('/instructors/:id', (req,res) => {
    sql.query('select * from instructor where Lid = ?',[req.params.id], (err, rows, fields)=>{
        if (!err)
        res.send(rows);
        else
        console.log(err);
    })
});

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized REquest')
    }
    let token = req.headers.authorization.split(' ' )[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized Request')
    }
    let payload = jwy.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unauthorized Request')
    }
    req.userId = payload.subject
    next()
}

router.post('/Login', (req, res) => {
    let userData = req.body;
    var userName = userData[0].userName;
    var Password = userData[0].Password;
    console.log(userData);

    connection.query('SELECT * FROM users WHERE username = ?',[userName], (err, rows, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).send( {'error' :'Sorry username does not exits'} );    
        } else {
          if (rows.length >0) {
            if ( rows[0].password == Password) {
              // debugger
              // let payload = {subject: user._id}
              // let token = jwt.sign(payload, 'secretKey')
              // return res.status(200).send({token});
              return res.status(200).send( {'success' :'login successful '} );
            } else {
                return res.status(401).send({ 'error': 'Invalid Password' });  
            }
          } else{
              return res.status(404).send('Sorry username does not exits');        
          }   
        }
      });
    });


/*var Register = {
    getReg: function (callback) {
        return sql.query('select * from users', callback);

    }
}*/

/*router.post('/register', (req, res) => {
    let userData = req.body;
    console.log(userData);
    var name = userData.name;
    var surname = userData.surname;
    var email = userData.email;
    var address = userData.address;
    var number = userData.number;
    var password = userData.password;

    var sql = "INSERT INTO users ( name, surname, email, address, phoneNum, password) VALUES ( '"+name+"', '"+surname+"', '"+email+"', '"+address+"', '"+number+"', '"+password+"')";
    
})*/

module.exports = router;