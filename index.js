const express = require("express");
const app = express();
const studentRoute = require('./routes/studentRoute.js');
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require("mongoose");
mongoose.set('strictQuery' , false);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/' , studentRoute)

mongoose.connect('mongodb+srv://ayaan:12345@myproject.g7sq4.mongodb.net/schooldb')
.then(()=>{console.log("Connected to db")})
.catch((err)=>(err));





app.listen(4000 , ()=>{
    console.log("Listening in port 4000");
})