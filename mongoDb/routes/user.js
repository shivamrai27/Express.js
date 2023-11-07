import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:2701/practicekaro");

const userschema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
});
module.exports = mongoose.model('users', userschema);
