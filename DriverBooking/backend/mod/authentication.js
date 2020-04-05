let sql = require('../config/config.js');
let bcrypt = require('bcrypt'); 

let UsrLogin = function(user){
    this.username = user.username;
    this.password = user.password;
}


UsrLogin.auth = function(username, password, result) {
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

module.exports = UsrLogin;