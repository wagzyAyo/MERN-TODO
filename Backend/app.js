const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();



const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 3000;
const mongoURL = process.env.DB
mongoose.connect(mongoURL)
.then(
    console.log("Connected to database")
).catch((err)=>{
    console.log(`Error connecting to database ${err}`)
});

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        require: true
    }
});

const task = mongoose.model("tasks", taskSchema);


app.get('/', (req, res)=>{
    res.send("Hello world!")
});

app.post('/', (req, res)=>{
    const newTask = req.body.task;
    try{
        const saveTask = new task({
            task: newTask
        })
        saveTask.save()
        res.send({Message: "Task added successfully"})
    } catch(err){
        console.log(`Error Adding new task ${err}`)
    }

})


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})