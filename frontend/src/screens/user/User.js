import React from "react";
import "../../components/style.css";
import "./User.css";
import Homecard from "../../components/homecard";

function ButtonRow(props) {
  return (
    <div className="button-row">
      {props.children}
    </div>
  );
}

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
/*
function FourButtons(props) {
  function handleClick(buttonNumber) {
    alert(`Button ${buttonNumber} clicked!`);
  }
*/
function FourButtons(props) {
  function handleClick(buttonNumber) {
    alert(`Moving to ${buttonNumber}`);
  }
  return (
    <div>
      <ButtonRow>
        <Button  label="My Certificates" onClick={() => handleClick("Certificates")} />
        <Button label="Registered Events" onClick={() => handleClick("Registered Events")} />
      </ButtonRow>
      <ButtonRow>
        <Button label="Academic Records" onClick={() => handleClick("Academic Records")} />
        <Button label="Participated Events" onClick={() => handleClick("Participated Events")} />
      </ButtonRow>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <div className="user">
        <Homecard name="Event1" description="Event Description" price="399" />
        <Homecard name="Event2" description="Event Description" price="399" />
        
      </div>

      <div>
        <FourButtons />
      </div>
    </div>
  );
};

export default User;