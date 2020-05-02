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

};

UserInfo.createUser = async function createUser(newUser, result) {
    
    
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

UserInfo.auth = async function(username, password, result) {
    
    //const match = await bcrypt.compare(password, UserInfo.password);
    //match = password;

    sql.query('SELECT * FROM users WHERE username =? AND password =?', [username, password], function (err, res){
        
        if(res.length > 0){
            username = res[0].username;
            password = res[0].password;

            result(null, res.authData = {
                success: true,
                message: 'User been authenticated',
               
            });

        } else {
            result(err, res.authData = {
                success: false,
                message: 'User Login Info Invalid',
            });
        }
    });
    
};

module.exports = UserInfo;