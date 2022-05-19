const bcrypt = require('bcrypt');
const {logUsers} = require('./log-users');
const register = async (req,res)=>{
    // create entry for new user
    try{
        // console.log(req.body["name"])
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const user = 
        {
            "user-name":req.body["user-name"],
            "password":hashedPassword,
            "name": req.body["name"],
            "phone":req.body["phone"],
            "email":req.body["email"],
            "age":req.body["age"],
            "institution": req.body["institution"],
            "time-stamp":req.body["time-stamp"] //should be overriden by data fetched from database
        }
        const code = await logUsers(user,res);
        console.log("DEBUG  " + code)
        if(code) return res.status(500).send(code)
        else res.status(201).send("User created!");
    }catch(err){
        res.status(500).send("Internal error:  " + err.message);
    }
}
module.exports = {register};