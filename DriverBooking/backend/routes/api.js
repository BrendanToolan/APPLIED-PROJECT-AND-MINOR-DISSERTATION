let express = require('express');
let router = express.Router();
let sql = require('../config/config.js');

//Class for all routers

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

router.post('/booking', (req, res) => {
    
  //  var post = {
  //      Lid: 102, 
  //      fname: 'tu',
  //      lname: 'ui',
  //      email: 'fdhgjh'
  //  };


     var Lid = req.body.Lid;
     //fname = req.body;
     //lname = req.body;
     //email = req.body;
    
    
    //  var start_at = req.body.start_at;
    // var end_at = req.body.end_at;


     sql.query `INSERT INTO booking (Lid)'Values ("${Lid}", NOW())`;
          if(!err)
    res.send(result);
    else
    console.log(err);
    
    });
var Register = {
    getReg: function (callback) {
        return sql.query('select * from users', callback);

    }
}

router.post('/register', (req, res) => {
    let userData = req.body;
    console.log(userData);
    var name = userData.name;
    var surname = userData.surname;
    var email = userData.email;
    var address = userData.address;
    var number = userData.number;
    var password = userData.password;

    var sql = "INSERT INTO users ( name, surname, email, address, phoneNum, password) VALUES ( '"+name+"', '"+surname+"', '"+email+"', '"+address+"', '"+number+"', '"+password+"')";
    
})

module.exports = router;