import './my_resume.css'
import Progress_bar from './progressbar';
import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import axios from 'axios';


const Myresume1= ({}) => {
const data=["Aishwarya","Ananya M","Afra"]
  const getdata=async()=>{
    const res=await fetch("http://localhost:5000/apps",{
      method:"get",
     }) .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
    for (var i=0;i>7;i++){
      data.push(res[i])
    }
    }
  
   console.log(data[1][0])
  


    const [loader, setLoader] = useState(false);
const handleSave = () => {
    alert('Download Success');
    const capture = document.querySelector('.page');
      setLoader(true);
      html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [12, 7]
        });
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save('resume.pdf');
        
      })
    
  }






    return (
        <div >
        <div className="page">
           
            <div className="left">
            <div className='child1'>
                        <div className='image'>
                          <h1 className="h2">{data[1][0]}</h1>
                        </div>
                               </div>

                                  <div className='child2'>
                                    <div> <h2 style={{color:"white"}}>Contact</h2>
                                    <div className='under_line'></div></div>
                                 <div className='content'> <span> <label style={{fontSize:'15px',color:'white',}}>Bhogarahalli,Dudda hobli,Hassan taluk</label></span>
                                  <span> <label style={{fontSize:'15px',color:'white',}}>{data[1]}@gmail.com</label></span>
                       <span><label style={{fontSize:'15px',color:'white',}}>7483042669</label><br/></span></div>
                    </div>


                    <div className='child2'>
                    <div> <h2 style={{color:"white"}}>Skills</h2>
                         <div className='under_line'></div></div>
                   <div className='content'>
                   <label style={{fontSize:'15px',color:'white',}}>C language</label>
                         <Progress_bar bgcolor="#99ccff" progress='40'  height={20} /></div>

                         <label style={{fontSize:'15px',color:'white',}}>java</label>
                         <Progress_bar bgcolor="#99ccff" progress='95'  height={20} />



                         <label style={{fontSize:'15px',color:'white',}}>web development</label>
                         <Progress_bar bgcolor="#99ccff" progress='85'  height={20} />


                         
                         </div>


                         <div className='child2'>
                    <div> <h2 style={{color:"white"}}>languages</h2>
                         <div className='under_line'></div></div>
                   <div className='content'>
                   <label style={{fontSize:'15px',color:'white',}}>English</label>
                         <Progress_bar bgcolor="grey" progress='90'  height={20} /></div>

                         <label style={{fontSize:'15px',color:'white',}}>Kannada</label>
                         <Progress_bar bgcolor="grey" progress='95'  height={20} />

                            </div>
       
           

                            <div className='child2'>
                    <div> <h2 style={{color:"white"}}>Hobbies</h2>
                         <div className='under_line'></div></div>
                   <div className='content'>
                   <label style={{fontSize:'15px',color:'white',}}>Reading</label><br/>
                    

                         <label style={{fontSize:'15px',color:'white',}}>Singing</label><br/>
                         <label style={{fontSize:'15px',color:'white',}}>Dancing</label><br/>
                       
                       </div>
                        </div>
                         

                        </div>
                    


                        <div className='right'>
                        <div className='right_top'>

                        <h1 style={{color:"black"}}>{data[1]} </h1>
                        <div className='under_line_right'></div>
                        <h3 style={{color:"black",marginTop:"5px"}}>Computer Science and Engineering</h3>
                        
                        </div>

                        <div className='right_middle'>

                        <h1 style={{color:"black"}}>Education </h1>
                        <div className='under_line_right'></div>
                        <div style={{marginTop:"15px"}}>
                        <h3 style={{color:"black",marginTop:"10px"}}>10th     :   Chirantana School</h3>
                        <h3 style={{color:"grey"}}>Year of passing :2017 Board:KSEEB  percentage :92%</h3>
                    
                         <div style={{height:"20px"}}></div>
                        <h3 style={{color:"black"}}>PUC    :      M Krishna PU College    </h3>
                        <h3 style={{color:"grey"}}>Year of passing :2019 Board:KSEEB  percentage :92%</h3>
                        <div style={{height:"20px"}}></div>
                        
                        <h3 style={{color:"black"}}>Degree :    Malnad College of Engineering   </h3>
                        <h3 style={{color:"grey"}}>Year of passing :2023 Board:VTU percentage :92%</h3>
                    
                        
                        </div>
                        </div>
                          
                        <div className='right_middle'>

                        <h1 style={{color:"black"}}>Internship /Project </h1>
                        <div className='under_line_right'></div>
                        <div style={{marginTop:"15px"}}>
                    
                    <label style={{fontSize:"15px",textAlign:"justify"}}>1.Completed 25 days of internship on “Design and Development of Embedded System
using Machine Learning and IOT on Raspberry Pi Platform and Python Enterprise
</label><br/><br/>
<label style={{fontSize:"15px",textAlign:"justify"}}>2.Student guiding system website designed using Angular and mysql:
 Main aim is to help the students to known about details of future studies and regarding
all types of scholarship provided by private and government sector. 
</label>   </div>
                       


                        <h1 style={{color:"black"}}>Declaration</h1>
                        <div className='under_line_right'></div>      <div style={{marginTop:"20px"}}>
                        <label style={{fontSize:"15px"}}>I ,Deekshitha B N do hereby confirms that information given above is true to the best of
my knowledge. </label>       </div></div>

</div>
                        
 </div>
 <button className="button-certi" onClick={handleSave} disabled={!(loader===false)}>
                  {loader?(
                    <span style={{color:"black"}}>Downloading</span>
                  ):(
                    <span style={{color:"black"}}>Download</span>
                  )}
                </button>      
      
        
       </div>     
    

    )
}

export default Myresume1;