let sql = require('../config/config.js');
let bcrypt = require('bcryptjs'); 
let UserInfo = require('../mod/user');

//const password = "password123";

let UsrLogin = function(user){
    this.username = user.username;
    this.password = user.password;

    
}



UsrLogin.auth = async function(username, password, result) {
    

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

/*UsrLogin.comparePasswrd = async function(password, hash, callback){
    await bcrypt.compare(password, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}*?

//hashing code 
/*bcrypt.hash(password, 8, (err, hashedPassword) => {
    if (err) {
        return err;
    }

    console.log(hashedPassword);

    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (err) {
            return err;
        }

        console.log(isMatch);
    });

});*/

module.exports = UsrLogin;