import React from "react";
import "./MyCertificates.css";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";

const CERTIFICATES = [
  {name:"Bootcamp",date:"14/10/2022"},
  {name:"Pragyatha", date:"08/12/2022"},
  {name:"Hackathon", date: "08/04/2023"},
  {name:"Chinmayi", date: "25/04/2023"}
  
];

const ProductRow = ({product})=>{
  return(
    <tr onClick={({product})=>{alert("Moving to "+ product.name)}}>
      <td>{product.name}</td>
      <td>{product.date}</td>
      <td><AiFillEye/>|<AiOutlineDownload /></td>
    </tr>
  )
}
const CertificateTable = ({products}) => {
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
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
         {rows}
         
        </tbody>
      </table>
    </div>
  );
};

const MyCertificates = () => {
  return (
    <div className="certi">
      <div className="title">
        <span className="mycerti">My Certificates</span>
      </div>
      <CertificateTable products = {CERTIFICATES}/>
    </div>
  );
};

export default MyCertificates;
