const express =require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const {login} = require('./auth/login');
const {register} = require("./auth/register");
const log = console.log;
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1>Entry Point<h1>
    <br>
    <a href="/register">Register Now</a>
    <br>
    <a href="/login">Already Registered? Login</a>
    `).status(200);
});

// //  depricated
// app.post('/user/new/',logUsers,(req,res)=>{
//     res.send('New request received...').status(200);
// });

app.use('/register',register);

app.use('/login',login);

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
