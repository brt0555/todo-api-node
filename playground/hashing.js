const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = 'dupa123'


// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$eZMz4GRe/u0ynrdHfZj6Yu7GJXvMHYqtKZdAdL.VYdB/Hte/vIhHe';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});



// let data ={
//     id: 10
// }

// let token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded =jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// let message = 'I am user number 3';

// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();


// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Dont trust');
// }

