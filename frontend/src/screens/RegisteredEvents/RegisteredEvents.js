import React from 'react';
import './RegisteredEvents.css'

import { AiOutlineDownload } from "react-icons/ai";

const EVENTS = [
    {eventname:"Bootcamp", date:"31/12/2022"}
]

const ProductRow = ({product})=>{
    return(
      <tr onClick={()=>{alert("Moving to "+ product.eventname)}}>
        <td>{product.eventname}</td>
        <td>{product.date}</td>
        <td><AiOutlineDownload /></td>
      </tr>
    )
}
const RegisteredEventTable = ({products}) => {
    console.log(products);
    const rows = [];
  
    products.forEach((product) => { 
     rows.push(<ProductRow product={product} key= {product.name} />);
    });
  
    console.log(rows);
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
           {rows}
           
          </tbody>
        </table>
      </div>
    );
};

const RegisteredEvents = () => {
    return (
        <div className="certi">
          <div className="title">
            <span className="mycerti">Registered Events</span>
          </div>
          <RegisteredEventTable products = {EVENTS}/>
        </div>
      );
}

export default RegisteredEvents;