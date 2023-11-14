import React, { useEffect, useState } from "react";
import axios from "axios";
import"./ChefOrder.css";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ChefOrders() {
    let navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    
  
  const { id } = useParams();
  
  

  const onClick = async (e) => {
    
    navigate("/final");
    alert("your item is successfully placed");
     

  };
  const onClicks = async (e) => {
    
    navigate("/order");
   alert("order will complete in 30 minutes");
    navigate("/final");
     

  };
  const onClickss= async (e) => {
    
    navigate("/final");
    alert("order will complete in 25 minutes");
     

  };

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const result = await axios.get("http://localhost:8080/history");
    setOrders(result.data);
  };
  return (
  
    <div className="chefOrder">
      <div className="py-4">
        <table className="table border shadow">
          
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
          
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{order.name}</td>
                <td>{order.price}</td>
                 </tr>
            ))}
          </tbody>
          <tr>
          <div class="mt-3 pt-3">
        <div class="row"> 
            <div class="col-md-3">
                <a href="/final" class="btn btn-success">conform</a>
            </div>
            <div class="col-md-1">
                <a href="/cart" class="btn btn-danger">cancel</a>
            </div>
        </div>
        </div>
          </tr>
        </table>
      </div>
    </div>
  );
}

