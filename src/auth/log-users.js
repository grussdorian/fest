const mongoose = require('../db/mongoose');
const User = require('../models/user');
const logUsers = async (user,res)=>{
    try{
        const newUser = new User(user);
        await newUser.save();
        console.log("user created succesfully");
    }catch(err){
        console.log(err);
        return err;
    }
}
module.exports = {logUsers};