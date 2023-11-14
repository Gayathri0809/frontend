import React,{useState,useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Swal from "sweetalert2";
function Cart() {
  
  const [lists, setLists] = useState([]);
  const [cart, setCart] = useState([]);
    
  const[selects,setSelects]=useState();
  let navigate = useNavigate();
  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const result = await axios.get("http://localhost:8080/addres");
    setLists(result.data); 
  };
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/address/${id}`);
    loadLists();
  };
  const removeItem = async (id) => {
    await axios.delete(`http://localhost:8080/history/${id}`);
    loadList();
  };
  useEffect(() => {
    loadList();
  }, []);
  const loadList = async () => {
    const result = await axios.get("http://localhost:8080/history");
    setCart(result.data); 
  };
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(Array(cart.length).fill(1));
  }, [cart]);

  const updateQuantity = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  }



  const getTotalAmount = (item) => {
    const index = cart.indexOf(item);
    const quantity = quantities[index];
    return item.price * quantity;
  }

  const getTotalPrice = () => {
    let total = 50;
    cart.forEach((item, index) => {
      total += item.price * quantities[index];
    });
    return total;
  }
  const getTotalShipping=()=>{
    let  charge=50;
     return charge=50+0;
  }
   
  const onClick = async (e) => {
    Swal.fire({
      title: 'Click OK to conform order',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then(function(){
          window.location.href="/final"
    });
  }
 
   

  return (
    
    <div class="mt-0 pt-2">
        <div class="row"> 
            <div class="col-md-3">
                <a href="/menu" class="btn btn-success">Back</a>
            </div>
            <div class="col-md-3">
                <a href="/address" class="btn btn-success">Add Address</a>
            </div>
           
        </div>  
      <table class="table table-striped table-light mt-5">
        <thead>
             <tr>
             <th></th>
              <th>Menu Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
         </thead>
         <tbody>
          {cart.map((item, index) => (
         
          <tr>
                <td><img src={item.images} style={{ height: "100px", width:"100px" }}  ></img></td>
                <td>{item.name}</td>
                <td>Rs.{item.price}</td>
                
                <td>
                <input type="number" value={quantities[index]} min="1" max="15" onChange={(e) => updateQuantity(index, e.target.value)} />
                </td>
                <td>Rs.{getTotalAmount(item)}</td>
                <td><button class="btn btn-warning" onClick={() => removeItem(item.id)}>Remove</button></td>
            </tr>
                                                    
        ))}
        </tbody>
        <tfoot>
          <tr>
        <td colspan="3">
              GST and restaurant charges: Rs.{getTotalShipping()}
            </td>
            
          <td colspan="5">
       
            </td>
            </tr>
            <tr>
        <td colspan="3">
              
              Grand Total: Rs.{getTotalPrice()}
            </td>           
          <td colspan="5">      
            </td>
            </tr>
            </tfoot>
        </table>
        <div class="col-md-3">
             <button onClick={ (e)=>onClick(e)} class="btn btn-danger">Place Order ₹{getTotalPrice()}</button>
             <h6 className="pay">PAY USING</h6>
             <select value={selects} onChange={e=>setSelects(e.target.value)}id="select">
              <option>Choose Payment</option>
              
              <option>Cash on Delivery</option>
             </select>
             
            </div>
            <table class="table  mt-5">
            <thead>
          <tr>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
            {lists.map((list, index) => (
              <tr>
                
                <td style={{ gap:"50px" }} >📍 {list.name}&nbsp;,    {list.address}&nbsp;,  {list.phone}&nbsp;,  {list.pincode}</td>
                <td>
                 
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editaddress/${list.id}`}
                  >
                  ✎
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteItem(list.id)}
                  >
                     ✖
                  </button>
                  </td>
                  
              </tr>
            ))}
          </tbody>
                 
            </table>
            
      </div>
    
  );
}

export default Cart;