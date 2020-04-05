let sql = require('../config/config.js');

var bcrypt = ('bcrypt');
const saltRounds = 10;

let UserInfo = function (user) {
    this.username = user.username;
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