const {Readable}=require("stream")
const data=[
    "node js is open source",
    "react js is a library",
    "vanilla js"
]
class MyStream extends Readable{
constructor(data){
    super()
    this.data=data
    this.index=0
}
_read(){
    if(this.index<=this.data.length){
        const chunk=this.data[this.index]
        this.push(chunk)
        this.index+=1
    }
    else{
        this.push(null)
    }
}

} 
const readObj=new MyStream(data)
const readobj2=new MyStream(["data1","data2"])

readObj.on("data",(chunk)=>{
setTimeout(()=>console.log(chunk.toString()),3000)
})

readObj.on("error",()=>{
    console.log("error in reading")
})

readObj.on('end',()=>{
    process.stdout.write("closed")
})


readObj.on("close",()=>{
    console.log("stream connection closed")
})


