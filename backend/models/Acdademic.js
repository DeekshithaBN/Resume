const express = require('express');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const academicInfoSchema=new Schema({
   
        sslc:{
            shoolName:{
                type:String,
                required:true
            },
            totalPer:{
                type:String,
                required:true
            },    
            perObtained:{
                type:String,
                required:true
            } ,               
        
        puc:{
            collegeName:{
                type:String,
                required:true
            },
            ctotalPer:{
                type:String,
                required:true
            },    
            cperObtained:{
                type:String,
                required:true
            }                
        },

        graduation:{
            dcollegeName:{
                type:String,
                required:true
            },
            course:{
            type:String,
            required:true
            },
            branch:{
            type:String,
            required:true   
            },
            currentSem:{
                type:String,
                required:true

            },

            dperObtained:{
                type:String,
                required:true
            }             
        }
    }
    
        
 
})

module.exports=mongoose.model("academicInfo",academicInfoSchema)