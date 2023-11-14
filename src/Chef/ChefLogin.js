import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

import"./ChefLogin.css";
const ChefLogin=() =>{
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [authenticated,setauthenticated]=useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users=[{username:"chef",password:"chef"}];
    const handleSubmit=(e) =>{
        e.preventDefault();
        const account=users.find((user) => user.username ===username);
        if(account && account.password=== password){
            localStorage.setItem("authenticated",true);
            
            navigate("/c");
        }
        else{
            alert("INVALID USERNAME AND PASSWORD");
        }
    };

    return(
      
        <div>
 <div id="backgroundimage"></div>
<div class="boxes">
            <form onSubmit={handleSubmit}>

            <div class="row">
              <h2 id='chef'>CHEF LOGIN</h2>
         <hr/>
              </div>

              <div class="row">
             <div class="col-sm-6">

              <div class="form-group">
          <label id="one">USERNAME</label>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          
          />

        </div>

        <div class="form-group">
            <label id="one">PASSWORD</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            
            />
          </div>
          <br></br>

          <button type="submit" class="btn btn-primary" value="Submit" >Login</button>
            
          </div>
            </div>
            </form>
            
        </div>
        
        </div>
    );
}
export default ChefLogin;