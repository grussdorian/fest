// yet to be implemented using redis
const bcrypt = require('bcrypt');
// const redisPort = process.env.REDISPORT || 6379;
// const client = redis.createClient(redisPort);

const login = async (req,res)=>{
    try{
        client.get("user_"+req.body["phone"]+":name",(err,data)=>{
            if(data === req.body["user-name"]){
                client.get("user_"+req.body["phone"]+":password", async (error,data)=>{
                    try{
                        if(error) res.status(500).send();
                        await bcrypt.compare(req.body.password,data,(e,access)=>{
                            if(e) res.status(500).send();
                            if(access){
                                res.status(202).send("Accepted!");
                            }else{
                                res.status(401).send("Wrong Password!");
                            }
                        })
                    }catch{
                        res.send(500);
                    }
                    
                })

            }else{
                res.status(400).send("user not found!");
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).send();
    }

}
module.exports = {login};