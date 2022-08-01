const express=require("express")
const app=express()
const htp=require('http')
const http=htp.Server(app)
const socket=require("socket.io")
const io=socket(http)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/views/ChatApp.html')
})

io.on('connection',(socket)=>{
    users=[]
    console.log("user connected")
    socket.on('setUsername',(data)=>{
        if(users.indexOf(data)===-1){
            users.push(data)
            socket.emit('userSet',{username:data})
        }
        else{
            socket.emit('userNotSet',`${data} already exists`)
        }
    })
    socket.on('message',(data)=>{
        console.log(data)
        io.sockets.emit('newmsg',data)
    })
  
})


http.listen(3001,()=>{
    console.log("server is listening")
})
