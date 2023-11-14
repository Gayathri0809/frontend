import React from 'react';
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import"./final.css";
const Last = () => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('selectedValue'); // Retrieve the selected value from localStorage
    if (storedValue) {
      setSelectedValue(storedValue);
    }
  }, []);
  let navigate = useNavigate();
  const onClick = async (e) => {
     
      navigate("/rate");
    };

  return (
    
     
      <div className="last">
      
      <img src='https://media.tenor.com/PYQdx807FXAAAAAC/sucess-transparent.gif'style={{ height: "300px", width:"300px", transform:"translateX(600px)" ,mixBlendMode:"multiply"}} ></img>
    <h5 id="od">Order Placed Successfully.....</h5>
    <br></br>
    <button  onClick={(e) => onClick(e)}id="feed">FeedBack</button>
      <br></br>
      <br></br>
      <div >
    <h2 style={{ height: "3px", width:"", transform:"translateX(700px)" }} id='status'>Status of food:<h5  style={{ height: "3px", width:"",fontSize:"30px",color:"green" }}> {selectedValue}</h5></h2>
  </div>
    </div>
   
  );
};

export default Last;