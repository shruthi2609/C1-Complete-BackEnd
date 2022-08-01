const express=require("express")
const app=express()
const fs=require("fs")
const writeableStream=fs.createWriteStream("./file5.log",{flags:'a'})
function loggerFunction(req,res,next){
let method=req.method
let url=req.url
let currentDatetime=new Date()
let formattedDate=currentDatetime.getFullYear()+'-'+(currentDatetime.getMonth()+1)+'-'+currentDatetime.getDate()+'-'+currentDatetime.getHours()+'-'+currentDatetime.getMinutes()+'-'+currentDatetime.getSeconds()


next()
let statusCode=res.statusCode
writeableStream.write(url)
writeableStream.write('  ')
writeableStream.write(method)
writeableStream.write('  ')
writeableStream.write(formattedDate)
writeableStream.write('  ')
writeableStream.write(String(statusCode))
writeableStream.write('\n')
}
app.use(loggerFunction)
app.get("/home",(req,res)=>{
res.status(200).send("Home Page")
})
app.get("/dashboard",(req,res)=>{
    res.status(200).send("Dashborad Page")
    })

app.listen(3001,()=>console.log("server started"))