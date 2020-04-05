const bcrypt = require('./hashingFile')
const rawPasswrd = 'password'

console.log(bcrypt.hash(rawPasswrd))
console.log(bcrypt.compare('password','1563995248971$10$58e0867f3acc11de363e03389bb27167'));
console.log(bcrypt.hash(rawPasswrd, {salt: 'someRandomString', rounds: 20}))
