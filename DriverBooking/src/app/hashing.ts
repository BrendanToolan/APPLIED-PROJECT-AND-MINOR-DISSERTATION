import { AuthService } from './services/auth.service';
let sql = require('../config/config.js');

export class Hashing {

    public hashing(){
        AuthService.hashPassword('myPassword', 12, (err, hash) => {
            if (err){
                //throw err
            }else{
                //store hash
            }
        });
    }

    public static login(username, password) {
        sql.connection.query('SELECT * FROM users WHERE username = ?', [username], (error: Error, results: any[]) => {
            if (error) {
                // there was an error in the mysql
            } else {
                // selects return an array, so access the first in the array
                let user = results[0];
                // now lets compare the passwords
                AuthService.compare(password, user.password, (error: string | null, match: boolean | null) => {
                    if (error) {
                        // passwords did not match
                    } else {
                        // passwords match
                    }
                })
            }
        });
    }
}