import React from "react";
import "./style.css";

const Homecard = ({ name ,Description,button_content,url}) => {
  return (

    <div className="card">
      <div className="tophead">
        <h2 className="head" style={{color:"white",textAlign:"center",padding:"10px"}}>{name}</h2></div>
      <div className="middlebody">
      <h2 style={{color:"white",textAlign:"center",padding:"10px"}}>{Description}</h2></div>
       <div> <a style={{color:"black",textAlign:"center",padding:"10px",fontSize:"20px",fontWeight:"bold"}}href={url}>{button_content}</a></div>
        </div>
    

  );
};

export default Homecard;

// Place cards in a row ?
