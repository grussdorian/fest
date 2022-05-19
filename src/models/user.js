// DB Schema

const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    "name":{
        type: String,
        required: true, 
        trim: true,
        validator(value){
            if(!validator.isAlpha(value)){
                throw new Error('Name is invalid!');
            }
        }
    },
    "user-name": {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    "email": {
        type: String,
        unique: true,
        required: false,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    // age consent of the app is currently not set, default age is 25, minimum is 13
    "age": {
        type: Number,
        default: 22,
        validate(value){
            if(value<18){
                throw new Error('User must be atleast 13')
            }
        }
    },
    "password": { // passwords are not stored as plain text, hashed passwords are not validated
        type: String,
        required: true,
        trim: true,
        // validate(value){
        //     if(value.includes('password')){
        //         throw new Error('Password contains commonly used phrase(s)')
        //     }
        // }
    },
    // need to edit this part out if institutions from other countries are participating
    "phone": {
        type: String,
        required: true,
        minlength:10,
        maxlength:10,
        unique:true
        
    },
    "institution":{
        type: String,
        required: true
    },
    "time-stamp":{
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;