const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5b0db13d8c75c13d890b4b321';

// if(!ObjectID.isValid(id)) {
//     console.log('Specified id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));

const userId = '5b0da205dfbe9229f51bfe26';
User.findById(userId).then(user => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User', user);
}).catch(e => {
    console.log(e);
})
