const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    }
});


module.exports = mongoose.model('user', userSchema);