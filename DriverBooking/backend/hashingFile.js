const md5 = require("md5");

module.exports = {
    hash(rawPasswrd, options = {}) {
        const salt = options.salt ? options.salt: new Date().getTime();
        const rounds = options.rounds ? options.rounds : 10;

        let hashed = md5(rawPasswrd + salt);

        for(let i =0; i <= rounds; i++){
            hashed = md5(hashed);
        }
        return `${salt}$${rounds}$${hashed}`;
    },

    compare(rawPasswrd, hashedPassword){
        try {
            const[salt, rounds] = hashedPassword.split('$');
            const hashedRawPasswrd = this.hash(rawPasswrd, {salt, rounds})
            return hashedPassword == hashedRawPasswrd;
        } catch (error) {
            throw Error(error.message);
        }
    }

};