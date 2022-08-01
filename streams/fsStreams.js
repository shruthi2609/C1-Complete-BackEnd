const fs=require('fs')
const readStreamFs=fs.createReadStream('./file1.txt',{highWaterMark:30})
let data=''
let bytesRead=0;
readStreamFs.setEncoding('UTF-8')
readStreamFs.on('data',(chunk)=>{
    data+=chunk
    bytesRead+=chunk.length
    console.log(`${chunk.length}`)
    if(bytesRead===990){
        console.log("paused ")
        readStreamFs.pause()
    }
    setTimeout(()=>readStreamFs.resume(),5000)
})
readStreamFs.on('end',()=>{
    console.log(data)
})
readStreamFs.on('close',()=>{
    console.log("data end")
})