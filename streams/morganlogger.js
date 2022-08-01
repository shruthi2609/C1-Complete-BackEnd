const express=require("express")
const app=express()
const morgan=require("morgan")
const fs=require('fs')
const logStream=fs.createWriteStream('morganlog.log',{flags:'a'})

//app.use(morgan('combined',{stream:logStream}))
app.use(morgan('tiny',{stream:logStream}))
app.get("/home",(req,res)=>{
res.status(200).send("Home Page")
})
app.get("/dashboard",(req,res)=>{
    res.status(200).send("Dashborad Page")
    })

app.listen(3001,()=>console.log("server started"))