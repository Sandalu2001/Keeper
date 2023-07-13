const express = require("express");
const bodyParser = require("body-parser");
const { User, Note, List } = require('../db');


const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send("Server is connected !");
});


app.listen('3001',()=>{
    console.log("Server is running on port 3001");
});
