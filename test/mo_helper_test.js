const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/people", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
    .once('open', ()=> console.log('Connection Success'))
    .on('error', (err)=> {
            console.log('You cought error', err);
    })
