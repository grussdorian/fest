const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const collection = "fest" || process.env.USER_DB_COLLECTION
const db_uri = "mongodb://127.0.0.1:27017/" + collection
console.log(db_uri)
mongoose.connect(db_uri,{
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});