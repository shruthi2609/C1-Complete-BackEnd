const fs=require("fs")
const readStream=fs.createReadStream("file1.txt",{highWaterMark:5})
const writeStream=fs.createWriteStream("file2.txt")

readStream.on('data',(chunk)=>{
writeStream.write(chunk)
})

readStream.on('error',(err)=>{
    console.log(err)
})

readStream.on('end',()=>{
    console.log("end")
    writeStream.end()
})
writeStream.on('finish',()=>{
    console.log("write stream is finished")
})