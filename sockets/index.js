const express=require("express")
const app=express()
const htp=require('http')
const http=htp.Server(app)
const socket=require("socket.io")
const io=socket(http)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

io.on('connection',(socket)=>{
console.log("User is Connected")
setTimeout(()=>{
    socket.send("hey ! welcome back")
},3000)
setTimeout(()=>{
    socket.emit('advertisement',{ad:'checkout our hot deals'})
},6000)
socket.on('clientevent',(data)=>{
console.log(data.clientmsg)
})
socket.on('disconnect',()=>{
    console.log("user disconnected")
})
})



http.listen(3001,()=>{
    console.log("server is listening")
})




