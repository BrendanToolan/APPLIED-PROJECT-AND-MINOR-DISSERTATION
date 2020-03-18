let sql = require('../config/config.js');

let UserInfo = function (user) {
    this.username = user.username;
    this.password = user.password;
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


module.exports = UserInfo;