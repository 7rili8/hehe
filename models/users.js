const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    name: String,
    age: Number,
    alive: Boolean
});

const user = new mongoose.model('user',newUser);

module.exports = user;