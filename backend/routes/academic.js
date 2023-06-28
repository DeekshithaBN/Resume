const express = require('express')
const router=express.Router()
const Ainfo=require('../models/Acdademic')

router.get('/',async(req,res)=>{
   
  try{
    const pinfos =await Ainfo.find()
    res.json(pinfos)
  }
  catch(err){
    res.send('Error'+err)
  }

});

router.post('/',async(req,res)=>{
  const ainfo = new Ainfo({
  
        sslc:{
            shoolName:req.body.shoolName,
            totalPer:req.body.totalPer,
            perObtained:req.body.perObtained
            },
        puc:{
            collegeName:req.body.collegeName,
            ctotalPer:req.body.ctotalPer,
            cperObtained:req.body.cperObtained
        },
        graduation:{
            dCollegeName:req.body.dCollegeName,
            dperObtained:req.body.dperObtained,
            course:req.body.course,
            branch:req.body.branch,
            currentSem:req.body.currentSem
         }
    
  })
  try{
      const a1= await ainfo.save()
      res.json(a1)
  }catch(err){
    res.send('Error')
  }
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