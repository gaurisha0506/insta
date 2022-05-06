const express= require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=5000
const MONGOURI=require('./keys');

mongoose.connect(MONGOURI,{useNewUrlParser:true,})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('connected',(err)=>{
    console.log("error in mongo")
})
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})