const express = require('express')
const router=express.Router()
const Pinfo=require('../models/personalInfo')

router.get('/',async(req,res)=>{
  try{
    const pinfos =await Pinfo.find()
    res.json(pinfos)
  }
  catch(err){
    res.send('Error'+err)
  }

});

router.post('/',async(req,res)=>{
  const pinfo = new Pinfo({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    dateofbirth:req.body.dateofbirth,
    adress1:req.body.adress1,
    phoneNumber:req.body.phoneNumber
  })
  try{
     const a1= await pinfo.save()
    res.json(a1)
  }catch(err){
    res.status(400).json({
      message:"user already exits",
      status:0
  });}
})
module.exports=router;

// const personalinfo={ 
  // firstName:"Deekshitha",
  // lastName:"B N",
  // email:"deekshithabn7@gmail.com",
  // dateofbirth:"10/10/2001",
  // adress1:"bdsc",
  // phoneNumber:"7483042669"
  // }
  // const newPersonalInfo=new Schemas.personalinfo;
  // try{
  //   await newPersonalInfo.save(async(err,newPersonalInfoResult=>{
  //     console.log('New user created');
  //     res.end('new user created');
  //   }));
  // }
  // catch(err){
  //   console.log(err);
  //   res.end("user not added!");
  // }