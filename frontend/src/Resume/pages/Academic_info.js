import React, { useId, useRef, useState } from 'react';
//import {Helmet} from 'react-helmet';
//import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';
import './personal_info.css';
const Academic_info = () => {
    
    const [date, setDate] = useState('');
    const dropdown = useId('');
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

    
  
    return (
      <form className='pppage'> 
          <h1>Academic details</h1>
           <div>
              <h2 className='h1'>SSLC:</h2>
            </div>
                  <div className="name">
                      <div className='firstname'>
                          <label className="middle"> SSLC school name</label>
                          <input type="text" required className='middle' />
                        </div>      
                      <div className='middlename'>
                          <label className="middle"> 10th Total (%)marks:*</label>
                    
                          <input type="text" required className='middle'/>
                        </div>
                      <div className='lastname'>  
                        <label className="middle">10th (%)marks obtained:*</label>
                        <input type="text" required className='middle'/>
                      </div>
                  </div>
            
                    <h2 className='h1'>PUC:</h2><br/>
                        <div className="name">
                          <div className='firstname'>
                          <label className="middle">College name:*</label>
                          
                          <input type="text" required/></div>
                          <div className='middlename'>
                            <label className="middle">Stream:*</label>
                            <select className='dropdown' >
                            <option type="choose me"></option>
                            <option type="Science">Science</option>
                            <option type="Science">Commerce</option>
                            <option type="Science">Arts</option>
                            <option type="Science">others</option>
                            </select>
                          </div>
                          <div className='lastname'>
                            <label className="middle">Combination:*</label>
                            <input type="text" required/></div> 

                          </div>        
                  
                          <div className='name'>
                              <div className='firstname'>
                              <label className="middle">12th Total (%)marks:**</label>
                          
                              <input type="text" required/>
                              </div> 

                          <div className='firstname'>
                            <label className="middle">12th (%)marks obtained:*</label>
                            <input type="text" required/>
                          </div> 
                        </div>
                    

                        <h2 className='h1'>Degree:</h2>
                        <div className="name">
                          <div className='firstname'>
                          <label className="middle">University name:*</label>
                          
                          <input type="text" required/></div></div>
                          
                        
                          <div className="name">
                          <div className='middlename'>
                            <label className="middle">Course:*</label>
                            <select name="course" className='dropdown'>
                            <option value="choose me"></option>
                            <option value="B.E">B.E</option>
                            <option value="B.E">B.Tech</option>
                            <option value="B.E">M.Tech</option>
                            <option value="B.E">B.Sc</option>
                            <option value="B.E">B.com</option>
                            <option value="B.E">BCA</option>
                            <option value="B.E">MCA</option>
                            <option value="B.E">others</option>
                            </select>
                            </div>


                            <div className='middlename'>
                            <label className="middle">Branch:</label>
                            <select className='dropdown'>
                            <option value="choose me"  ></option>
                            <option value="CS">CSE</option>
                            <option value="CS">ISE</option>
                            <option value="CS">ECE</option>
                            <option value="CS">EEE</option>
                            <option value="CS">Civil</option>
                            <option value="CS">Mechanical</option>
                            <option value="CS">others</option>
                            </select>
                        </div>  

                        <div className='middlename'>
                            <label className="middle">Current semester</label>
                            <select className='dropdown'>
                            <option value="choose me"></option>
                            <option value="1st">1st</option>
                            <option value="1st">2nd</option>
                            <option value="1st">3rd</option>
                            <option value="1st">4th</option>
                            <option value="1st">5th</option>
                            <option value="1st">6th</option>
                            <option value="1st">7th</option>
                            <option value="1st">8th</option>
                            </select>
                        </div>  
                         </div>

                         <div className="name">
                          <div className='middlename'>
                          <label className="middle">CGPA/(%)marks:</label>
                            <input type="text" required/></div><br/>
                            <div className='middlename'>
                          <label className="middle">year of passing</label>
                            <input type="text" required/></div><br/>

                      
                        </div>
                        <div className="name">
                          <div className='middlename'>
                        <input class="submit" style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}input type="submit"   onclick="ValidateEmail(document.form1.text1)"/>

                           </div>  
                           <div className='middlename'>
                        <input class="submit" style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}input type="reset"   onclick="ValidateEmail(document.form1.text1)"/>
                             </div>
                             </div>
                             
            
    
            
  

            
              
        
                
      </form>
     
);
};

export default Academic_info;