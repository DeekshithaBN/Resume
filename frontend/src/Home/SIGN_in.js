import React, {useState} from 'react';
import "../Resume/pages/personal_info.css"
 
function SIGN_in() {
    const [values,setValues]=useState({ 
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateofbirth:"",
    adress1:"",
    
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    dateofbirth,
    adress1,
    } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
 const PostData=async(e)=>{
  e.preventDefault();
  const res =await fetch("http://localhost:5000/apps",{
    method:"POST",
    headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify({
      
      firstName,
      lastName,
      email,
      phoneNumber,
      dateofbirth,
      adress1,
    
    })
   });
   if(res.status==200){
    alert("Registration successful")}
   else{
   alert("user already exists")

 }
 }

  
 
 
    
  return (
    <div className="App">
    <header className="App-header">
    <form className="pppage" method="POST" onSubmit={PostData}>

  
    <div className='heading'>
                 <h1 style={{fontSize:"40px"}}>Personal Information</h1></div>
                 <h1 className='h1'>Name</h1><br/>
                    <div className="name">
                        <div className='firstname'>
                            <label className="middle"> First Name* </label><br/>
                            <input
                             type="text" 
                             onChange={handleChange("firstName")}
                             value={firstName}
                             required
                             />
                        </div>
                        <div className='middlename'>
                            <label className="middle"> Middle Name:</label><br/>
                            <input
                              type="text" 
                              required
                               />

                              </div>
                        <div className='lastname'>
                            <label className="middle"> Last Name:</label><br/>
                            <input
                             type="text" 
                             onChange={handleChange("lastName")}
                             value={lastName}
                             required
                             />
                        </div>
                        </div>
                        <div className='lastname'>
                        <h1 className='h1'>DOB</h1><br/>
                      
                            <input type="text" 
                            onChange={handleChange("dateofbirth")}
                            value={dateofbirth} 
                            required/>
                      
                      </div>

       
                        <h1 className='h1'>Adress</h1><br/>
                        <div className='address'>
                        <label className="middle"> Adress</label><br/>
                            <input type="text" 
                            onChange={handleChange("adress1")}
                            value={adress1}
                            required />
                        </div> 
                    
                    <div className='place'>
                        <div className="add">
                            <div className='address1'>
                            <label className="middle"> District:</label><br/>
                            <input type="text" 
                             />
                            </div> 
                         </div> 


         <div className="add">
                            < div className='address1'>
                                <label className="middle"> State/Province:</label><br/>
                                <input type="text"  />
                             </div> 
                        </div> 
                        <div className="add">
                            < div className='address1'>
                                <label className="middle"> Pincode:</label><br/>
                                <input type="text" 
                                 />
                             </div> 
                        </div> 
                        
                    </div>
                    <h1 className='h1'>Contact Information</h1><br/>

                    <div className='lastname'>
<label className="middle">
         PhoneNumber
        </label><br/>
        <input type="Text" 
        value={phoneNumber} 
        onChange={handleChange("phoneNumber")}
         /><br/>
</div>
<div className='lastname'>
<label className="middle">
         Email
        </label><br/>
        <input type="Text" 
        value={email} 
        onChange={handleChange("email")}
         /><br/>
        
       </div> 
        <input class="submit" style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}input type="submit" />
      </form>
    </header>
    </div>
  );
}
 
export default SIGN_in;

