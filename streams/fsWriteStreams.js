const fs=require("fs")
const writeableStream=fs.createWriteStream("./file5.txt")

writeableStream.write("this is a new line 1")
writeableStream.write("\n")
writeableStream.write("this is a new line 2")
writeableStream.write("\n")
writeableStream.write("this is a new line 3")
writeableStream.write("\n")

writeableStream.end()

writeableStream.on('finish',()=>{
    console.log("finished writing")
})



