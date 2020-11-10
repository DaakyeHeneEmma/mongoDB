const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const peopleSchema = new Schema({
    name: String,
    age: Number,
    isVerified : Boolean
});

const Person  = mongoose.model('people', peopleSchema);

module.exports = Person;