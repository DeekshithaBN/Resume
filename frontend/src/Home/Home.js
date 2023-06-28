import React from "react";
import "./home.css"
import Homecard from "../components/homecard";

const Home = () => {
    return <div className="mainhead">
        <label  style={{color:"white",textAlign:"center",padding:"10px",fontSize:"30px",fontWeight:"bold"}}>HOME</label>

    <div className="home">
       <Homecard className="child" name="Resume" Description="Create your resume here" button_content="Create"url="/index"></Homecard>  
       <Homecard className="child" name="Academic Certificate" Description="Apply for your Certificates here" button_content="Apply"url="/my_resume"></Homecard>
       <Homecard className="child"  name="Skills" Description="Updates your skills here" button_content="Update"url="/my_resume"></Homecard>
       <Homecard className="child" name="Awards" Description="upload the awards here" button_content="Update"url="/my_resume"></Homecard>
    </div>
    </div>
}

export default Home;