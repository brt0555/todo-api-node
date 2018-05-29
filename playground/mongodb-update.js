// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');


    //findOneAndDelete
    // db.collection('Todos')
    // .findOneAndUpdate({
    //     _id: new ObjectID('5b0d9711001cc28ca3273048')
    // }, 
    // { 
    //     $set: {
    //         completed: true
    //     }
    // }, { 
    //     returnOriginal: false
    // })
    // .then(result => {
    //     console.log(result);
    // })

    db.collection('Users')
    .findOneAndUpdate({
        _id: 66
    }, 
    { 
        $set: {
            name: 'Bartek'
        },
        $inc: {
            age: 1
        }
    }, 
    { 
        returnOriginal: false
    })
    .then(result => {
        console.log(result);
    })



    // client.close();
});