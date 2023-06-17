const express = require('express');
const app = express();
const PORT = 5000
const mongoose = require('mongoose');

//connect backend with DB
mongoose.connect("mongodb+srv://userone:userone@cluster0.swjmklw.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("Error connecting to MongoDB")});

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});