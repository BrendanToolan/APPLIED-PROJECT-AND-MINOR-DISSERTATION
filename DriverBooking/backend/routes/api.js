let express = require('express');
let router = express.Router();
let sql = require('../config/config.js');
let UserInfo = require('../mod/user');

var connection = require('../config/config.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

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


router.get('/instructors/:id', (req, res) => {
  sql.query('select * from instructor where Lid = ?', [req.params.id], (err, rows, fields) => {
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


  sql.query`INSERT INTO booking (Lid)'Values ("${Lid}", NOW())`;
  if (!err)
    res.send(result);
  else
    console.log(err);

  ///////////////////////////////

});

router.post('/register', function (req, res) {
  //New student object created from values passed in the body of the URL POST Request
  let new_user = new UserInfo ({
      username: req.body.username,
      password: req.body.password
  });

  // Handle for null errors if any
  if (!new_user.username || !new_user.password) {
      res.status(400).send({error: true, message: 'Please provide all criteria!'});
  } else {
      UserInfo.createUser(new_user, function (err, data) {
          if (err) {
              res.send({status: false, errorCode: err.code, message: err.message});
          } else {
              //Complete!
              res.json({status: true, errorCode: null, message: data}); //sendback request
          }// end if else
      });
  }// End if else
});//End POS


router.post('/Login', (req, res) => {
  let userData = req.body

  UserInfo.findOne({email: userData.email}, (error, user) => {
    if(error){
      console.log(error)
    }else {
      if(!user) {
        res.status(401).send('Invalid Email')
      } else 
      if(user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        res.status(200).send(user)
      }
    }
  })
})


       /* router.post('/register', (req, res) => {
          let userData = req.body;
          console.log(userData);
          var username = userData[0].username;
          var password = userData[0].password;
          var sql = "INSERT INTO users ( username, password) VALUES ( '" + username + "', '" + password + "' )";
          connection.query(sql, (err, rows, fields) => {
              if (err) {
                  console.log(err);
                  return res.status(500).send({
                      'error': 'Sorry username does not exits'
                  });
              } else {
                  return res.status(200).send({
                      'success': 'Registeration successful '
                  });
              }
          })
        });
        */
/*
// let payload = {subject: registered.User._id}
        // let token = jwt.sign(payload, 'secretKey')
        // res.status(200).send({token})
        console.log(sql);
        //var sql = `INSERT INTO users (username, password ) VALUES ('${username}', '${password}')`;
router.post('/Login', (req, res) => {
    let userData = req.body;
    var userName  = userData[0].userName;
    var Password = userData[0].password;
    console.log(userData);
    connection.query('SELECT * FROM users WHERE username = ?',[userName], (err, rows, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).send( {'error' :'Sorry username does not exits'} );    
        }else {
            if (rows.length >0) {
              if ( rows[0].password == Password) {  
                return res.status(200).send( {'success' :'login successful '} );
              } else {
                  return res.status(401).send({ 'error': 'Invalid Password' });  
              }
            } else{
                return res.status(404).send('Sorry username does not exits yeet!!!!');     
            }   
          }
        });
      });
*/
module.exports = router;