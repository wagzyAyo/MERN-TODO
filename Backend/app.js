const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send("Hello world!")
});


app.listen(3000, ()=>{
    console.log("App listening on port 3000")
})