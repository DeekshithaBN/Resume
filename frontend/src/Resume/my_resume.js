import './my_resume.css'
const personalinfo={
    Name:"Deekshitha",
    MiddleName:"NULL",
    LastName:"H K",
    Emailid:"deekshithabn7@gmail.com",
    Phone:"7483042669"

};
const MyResume = ({profile}) => {
        return (
            <div  className='page'>
                <div className='top'>
                    <div className='child1'>
                        <div className='image'></div>
                    </div>
                    <div className='child2'>
                    <label style={{fontSize:'15px',color:'black',}}>{personalinfo.Name}{personalinfo.LastName}</label><br/>
                        <label style={{fontSize:'15px',color:'black',}}>Bhogarahalli,Dudda hobli,Hassan taluk</label><br/>
                        <label style={{fontSize:'15px',color:'blue',}}>{personalinfo.Emailid}</label><br/>
                        <label style={{fontSize:'15px',color:'black',}}>{personalinfo.Phone}</label><br/>
                    </div>  
                </div>      
            
                <div className='middle'>
                    <h1>Academic information</h1>
                    <table>
                                <tr>
                                    <th>Course</th>
                                    <th>Institution</th>
                                    <th>Board/University</th>
                                    <th>Year of Completion</th>
                                    <th>Percentage</th>
                                </tr>
                                <tr>
                                    <td>SSLC/10th</td>
                                    <td>chiranthana English medium scholl</td>
                                    <td>KSEEB</td>
                                    <td>2017</td>
                                    <td>92.64</td>
                                </tr>
                                <tr>
                                    <td>PUC(Science)</td>
                                   <td> Mkrishnapucollege</td>
                                    <td>KSEEB</td>
                                    <td>2019</td>
                                    <td>94.2</td>
                                </tr>
                                <tr>
                                    <td>UNDERGRADUATION</td>
                                   <td>Malnad College of Enginnering</td>
                                    <td>VTU</td>
                                    <td>2019-2023</td>
                                    <td>94.2</td>
                                </tr>
                                </table></div>
                <div className='middle'>
                    <h1>Technical Skills</h1>
                    <label style={{fontSize:"15px"}}>1.C language</label><br/>
                    <label style={{fontSize:"15px"}}>2.Webdevelopment</label><br/>
                    <label style={{fontSize:"15px"}}>3.Java</label><br/>
                    <label style={{fontSize:"15px"}}>3.C#</label><br/>
                    </div> 
                <div className='middle'>
                    <h1>Intership/project</h1>
                    <label style={{fontSize:"15px"}}>1.Completed 25 days of internship on “Design and Development of Embedded System
using Machine Learning and IOT on Raspberry Pi Platform and Python Enterprise
</label><br/><br/>
<label style={{fontSize:"15px"}}>3.Student guiding system website designed using Angular and mysql:
 Main aim is to help the students to known about details of future studies and regarding
all types of scholarship provided by private and government sector. 
</label></div>    
                 <div className='middle'>
                    <h1>Strengths</h1>
                    <label style={{fontSize:"15px"}}>Ability to grasp new skill quickly. </label><br/>
                    <label style={{fontSize:"15px"}}>Good in time management. . </label><br/>
                    
                    </div>

                    <div className='middle'>
                    <h1>Declaration</h1>
                    <label style={{fontSize:"15px"}}>I ,Deekshitha B N do hereby confirms that information given above is true to the best of
my knowledge. </label><br/>

            
            </div>
 
            </div>

            
      );
        }

 const Resume= ({}) => {
            return (
                <MyResume profile={personalinfo}></MyResume>

            )
        }
        
export default Resume;