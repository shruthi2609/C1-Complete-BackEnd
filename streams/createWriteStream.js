const { write } = require("fs")
const {Writable}=require("stream")
class MyWritableStream extends Writable{
    
    _write(chunk,enc,next){
        data.push(chunk)
        next()
    }
}
const data=[]
const writableObj=new MyWritableStream(data)

writableObj.write("data is wrriiten")
console.log(data.toString())

