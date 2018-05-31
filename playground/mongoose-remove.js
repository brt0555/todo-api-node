const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });


Todo.findOneAndRemove({_id: '5b0fc7117ad92e2593581230'}).then(todo => {
    console.log(result);
});

Todo.findByIdAndRemove('5b0fc7117ad92e2593581230').then(todo => {
    console.log(todo);
});