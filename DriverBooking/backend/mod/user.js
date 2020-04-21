let sql = require('../config/config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt =10;

let UserInfo = function (user) {
    this.username = user.username;
    this.firstname = user.firstname;
    this.surname = user.surname;
    this.phoneNo = user.phoneNo;
    this.password = user.password;

   // this.hash = bcrypt.hash(user.password, 10);

};

UserInfo.createUser = function createUser(newUser, result) {
    
    sql.query('INSERT INTO users set ?', newUser, function (err, res) {
         
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.newUser);
            result(null, res.newUser);
        }//End if else
    });

};

UserInfo.findUser = function(username, result) {
    sql.query('SELECT * FROM users WHERE username =?', [username], function(err, res){
        if(err) {
            console.log(err);
            result(null, err);
        } else{
            result(null, res)
        }
    });
};


module.exports = UserInfo;