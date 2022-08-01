const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const UserModel=require("../models/UsersModel")
const jwt=require("jsonwebtoken")
router.post("/updatepassword",authorize,async (req,res)=>{
const data=req.body
try{
const hashedpassword=await bcrypt.hash(data.upassword,4)
const update=await UserModel.findOneAndUpdate({email:req.token.email},{password:hashedpassword})
if(update){
    res.send({msg:"updated successfully",status:true})
}
else{
    res.send({msg:"update failed",status:true})
}
}

catch(err){
    console.log(err)
    res.send("error in authorization")
}

})
function authorize(req,res,next){
    try{
let reqtoken=req.headers['authorization']
const token=reqtoken.replace('Bearer ','')
const result=jwt.verify(token,'jamesbond')
req.token=result
next()
    }
    catch(err){
        res.send("error in authorization")
    }
}
module.exports=router