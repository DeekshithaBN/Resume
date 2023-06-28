import React, { useRef, useState } from 'react';
import './personal_info.css';
//import {Helmet} from 'react-helmet';
//import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';

//const isBackgroundRed=true;
function Skills() {
    
  const [certificateInfo, setCertificateInfo] =useState([{name:"",domain:"",date:""}]);

 

  const handleAddCertificate = () =>
       setCertificateInfo([...certificateInfo , {name:"",domain:"",date:""}]);

  const handleRemoveCertificate =(index)=>{
     const list =[...certificateInfo];
     list.splice(index,1);
     setCertificateInfo(list);
  };
  
  const handleUpdateCertificate =(e,index) =>{
    const{name,value} = e.target;
    const list = [...certificateInfo];
    list[index][name]=value
    setCertificateInfo(list);  
  };

  
  
  const handleSubmit=(e)=>{
    console.log(e);
    alert('A form is submitted Successfully');
    e.preventDefault();
  
   }
  return (
  
<div className="pppage">

     <form onSubmit={(submit) => {handleSubmit(submit)}}>

    
        
            <div class="heading">
                
                <h1>SKILLS </h1>
              </div>  <br/>
                
              <h2 className='head'>Communication Skill</h2><br/>
              <div className="cskill">
                <div className='beginner'>
                   <input type="radio" className='middle'  name="optradio" />Beginer</div>
                <div className='inter'>
                    <input type="radio" className='middle' name="optradio" />Intermediate</div>
                <div className='advans'>
                    <input type="radio" className='middle'  name="optradio"/>Advanced</div>
               </div>
               <br/><br/>
              <div class="check">
              
                <h2 className='headd'>Languages Known</h2>
                <br/>
                <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value="" />Kannada
                    
                  </div>
                  <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value="" />English
                    
                  </div>
                  <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value=""  />Hindi
                   
                  </div>
                  <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value="" />Telugu
                   
                  </div>
                  <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value="" />Tamil
                   
                  </div>
                  <div class="form-check">
                    
                      <input type="checkbox" class="form-check-input" value=""  />Malyalam
                    
                  </div>
                  <div>
                  <label for="name3">
                    <input type="checkbox" id="name3activaitor" onclick="if(this.checked){ document.getElementById('name3').focus();}" />
                     Other:
                     </label> &nbsp;
                      <input type="" id="name3" name="name3" />
                  </div>
                </div>
               <br/>
               <div class="check">
                
                <h2 className='hh'>Technical Skills</h2>
                <br/>
                    
                    <div class="form-check">
                      
                        <input type="checkbox" class="form-check-input" value=""/>C
                      
                    </div>
                    <div class="form-check">
                     
                        <input type="checkbox" class="form-check-input" value=""/>C++
                      
                    </div>
                    <div class="form-check">
                      
                        <input type="checkbox" class="form-check-input" value=""/>Python
                      
                    </div>
                    <div class="form-check">
                      
                        <input type="checkbox" class="form-check-input" value=""/>Java
                      
                    </div>
                    <div class="form-check">
                      
                        <input type="checkbox" class="form-check-input" value=""/>UX/UI Design
                     
                    </div>
                    <div class="form-check">
                      
                        <input type="checkbox" class="form-check-input" value=""/>JavaScript
                      </div>
                    </div>
                    <div>
                    
                    <label for="name3">
                    <input type="checkbox" id="name3activaitor" onclick="if(this.checked){ document.getElementById('name3').focus();}" />
                     Other:
                     </label> &nbsp;
                      <input type="" id="name3" name="name3" />

                    
                    
                    </div>
                  
              <br/>
              
              <h2 className='hhh'>Certificate</h2>
              <br/>
                {        }
                {certificateInfo.map((certificate, index)=> (
                  <div  key={index}>
                    <div className='name'>
                    <div className='middlename'>
                  <label htmlFor='middle'>CertificateName:</label>
                  <input type='text' name='name' required onChange={(e)=> handleUpdateCertificate(e,index)}/></div>

                  <div className='middlename'>
                     <label htmlFor='domain'>Domain:</label>&nbsp;
                     <input type='text' name='domain' required onChange={(e)=>handleUpdateCertificate(e,index)}/>
                     </div>
                     </div>
                  
                 <br/>
                 <div className='cetificates'>
                     <label htmlFor='date'>Date:</label>&nbsp;
                     <label>from:-</label>&nbsp;<input type="date" name='date' style={{width:"200px",backgroundColor:"whitesmoke",height:"50px",border:"solid",borderRadius:"15px",borderWidth:"2px"}} required onChange={(e)=>handleUpdateCertificate(e,index)} />&nbsp;<label>to:-</label>&nbsp;<input type="date" name='date'style={{width:"200px",backgroundColor:"whitesmoke",height:"50px",border:"solid",borderRadius:"15px",borderWidth:"2px"}} required onChange={(e)=>handleUpdateCertificate(e,index)}/>
                  </div>   
                  <br/>
                  <div className='btn_group'>
                    {certificateInfo.length - 1 ===index && certificateInfo.length< 5 &&(
                      <button id='addBtn' style={{width:"100px",height:"30px",borderRadius:"5px"}} onClick={handleAddCertificate}>Add</button>
                    )}
                    {certificateInfo.length > 1 && (
                      <button style={{width:"100px",height:"30px",borderRadius:"5px"}} id='deleteBtn' onClick={() => handleRemoveCertificate(index)}>
                        Del
                      </button>
                    )}
                  </div>
                  </div>
                )
                )}
              
              
              
              
              <br/><br/>

        
                        <div className="name">
                          <div className='middlename'>
                        <input class="submit" style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}input type="submit"   onclick="ValidateEmail(document.form1.text1)"/>

                           </div>  
                           <div className='middlename'>
                        <input class="submit" style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}input type="reset"   onclick="ValidateEmail(document.form1.text1)"/>
                             </div>
                             </div>
                             
  
        
    </form>
    </div>
    );
};

export default Skills;