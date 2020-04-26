let express = require('express');
let router = express.Router();
let sql = require('../config/config.js');
let UserInfo = require('../mod/user');
let BookingInfo = require('../mod/bookings');
let UsrLogin = require('../mod/authentication');
var conection = require('../config/config.js');
var bodyParser = require('body-parser');
let activeSess;

const bcrypt = require('bcryptjs');

router.use(bodyParser.json());
var bodyParser = require('body-parser');router.use(bodyParser.json());


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
    console.log(req);
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

router.get('/booking/:id', (req, res) => {
  sql.query('select * from instructor WHERE id = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

router.post('/booking', function (req, res) {
  //New booking object created from values passed in the body of the URL POST Request
  let new_booking = new BookingInfo ({
      InstructorName: req.body.InstructorName,
      email: req.body.email,
      bookingDate: req.body.bookingDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime

  });

  // Handle for null errors if any
  if (!new_booking.InstructorName || !new_booking.email || !new_booking.bookingDate || !new_booking.startTime || !new_booking.endTime) {
      res.status(400).send({error: true, message: 'Please provide all criteria!'});
  } else {
    BookingInfo.createBooking(new_booking, function (err, data) {
          if (err) {
              res.send({status: false, errorCode: err.code, message: err.message});
          } else {
              //Complete!
              res.json({status: true, errorCode: null, message: data}); //sendback request
          }// end if else
      });
  }// End if else
});//End POS


router.post('/register', async function (req, res) {
  //New user object created from values passed in the body of the URL POST Request
  let new_user = new UserInfo ({
      username: req.body.username,
      firstname: req.body.firstname,
      surname: req.body.surname,
      phoneNo: req.body.phoneNo,
      password: req.body.password,

  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(new_user.password, salt);
  new_user.password = hash;
  // new_user.save();

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

router.get('/auth', function(req, res){
  activeSess = req.session;
  console.log(activeSess);
  activeSess.username = req.session.username;

  console.log(activeSess.username)
  console.log('Cookie: ', req.cookies.cookie);

  if (activeSess.username && req.cookies.cookie){
    res.send(res.loggedIn = {
      status: true
    });
  } else {
    res.send(res.loggedIn = {
      statue: false
    });
  }
});


router.post('/Login', function(req, res){
  UsrLogin.auth(req.body.username, req.body.password, function (err, data) {
    
    if(err) res.send(err);

    if(data.success){
      console.log(data.success);
      req.session.username = req.body.username;
      res.send(data);
    } else {
      res.send(data)
    }
  });
});

router.get('/logout', function(req, res){
  if(activeSess.username && req.cookies.cookie){
    res.clearCookie('cookie');
    res.send(true);
    console.log('Logout was Successful');
  } else {
    res.send(false)
  }
});

router.get('/bookings', function (req, res) {
  BookingInfo.getAllBookingInfo(function (err, data) {
      if (err) {
          res.send(err);
      } else {
          console.log(data);
          //Complete! sendback
          res.send(data);
      }// end if else
  });
}); 

router.delete('/bookings/:id', (req, res) => {
  sql.query('DELETE FROM booking WHERE bid = ?',[req.params.id],(err, rows, fields)=>{
      if (!err) 
      res.send(err);
      else 
          //console.log(err);
          res.json({ message: 'Student successfully deleted'});
          //res.status(status).json(obj)
         // res.status(200).json({message: 'Student successfully deleted'}, data);
  })
});

router.get('/booking-update/:id', (req, res) => {
  sql.query('select * from booking where bid = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

router.post('/booking-update/:id', (req, res) => {
  const bookingDate = req.body.bookingDate;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const bid = req.params.id;

  conection.query('UPDATE `booking` SET bookingDate = ?, startTime = ?, endTime = ? WHERE bid = ?', [bookingDate, startTime, endTime, bid], (err, results) =>{
    if (err) throw err;
    if(results.changedRows === 1){
      console.log('Booking Updated');
    }
  });
});

/*
router.post('/booking-update/:id', (req, res) => {
  sql = "UPDATE booking SET bookingDate='"+req.body.bookingDate+"', endTime'"+req.body.endTime+"', startTime='"+req.body.startTime+"' WHERE bid="+req.body.id;
  let query = conection.query(sql, (err, results) => {
    if(err) throw err;
  });
});
*/
/*
router.put('/booking-update/:id', (req, res) => {
  let book = req.body;
  var sql = ("UPDATE booking SET @bid =?; SET @bookingDate = ?; SET @startTime = ?; SET @endTime =?; where bid = ?");

  conection.query(sql,[book.bid, book.bookingDate, book.startTime, book.endTime], (err, rows, fields) => {
    if (!err)
    res.send ('updated');
    else 
    console.log(error);
  })
});
*/
/*
router.put('/bookings/:id', function (req, res){

  let updateBooking = {
    bookingDate: req.body.bookingDate,
    endTime: req.body.endTime,
    startTime: req.body.startTime
  };

  console.log(updateBooking);
  if(!updateBooking.bookingDate){
    res.status(400).send ({error: true, message:'Please provide a booking date'});
  } else{
    BookingInfo.update(updateBooking, req.params.bid, function(err, data) {
       if (err){
    res.send({status: false, message: err.message});
  } else{
    res.json({status: true, message: data});
  }
    });
  }
 
});
*/



// End GET REQUEST
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