import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from "axios";
import"./Registration.css";
export default function RegistrationForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSave = (e) => {

    let error = '';
    if(name === '')
    error = error + 'Name ,';  
    if(phone === '')
    error = error + 'Last Name ,'; 
    if(email === '' )
    error = error + 'Email ,';
    
    if(password === '')
    error = error + 'Password ,';
    
    if(error.length > 0)
    {
      error = error.substring(0, error.length-1) + 'can not be blank';
      alert(error);
      return;
    }
    
    e.preventDefault();
    const url = `http://localhost:8080/register`;
    const data = {
      name: name,
      phone: phone,      
      email: email,
      password: password
    };
    const errors = validate(data);
    if(Object.keys(errors).length === 0){
    axios
      .post(url, data)
      .then((result) => {
        clear();
        const dt = result.data;
       
        alert("successfully register");
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
      setErrors(errors);
    }
    
  };
  if (Object.keys(errors).length === 0) {
    
    fetch("http://localhost:8080/registers")
      .then((response) => response.json())
      .then((data) => {
        const userMatch = data.find((storeduser) => storeduser.email === email);
        if (userMatch) {
         
         alert("You are alreday register");
        }
      })
    }
  const clear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };
  function validate(data) {
    let errors = {};

   
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  }
  return (
    <Fragment>
      <div className="registers bubble-background align-right"style={{ padding: "7px", background: `url("register.jpg")` }}>
        <div className="header" style={{ width: "530px" }}>
          <h1 className="register">Register Here</h1>
        </div>
        <div className="form">
        <section className="vh-90" style={{ padding: "7px" }}>
          <div className="containerss">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-blue" style={{ border: "none", background: "transparent" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-end">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <FaUser className="fa-lg me-3" />
                            <div className="form-outline flex-fill mb-0">
                            <label htmlFor="form3Example1c" className="form-label custom-label" id="text">
      Name
    </label>
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder=" Name"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <FaUser className="fa-lg me-3" />
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="Email" className="form-label" id="text">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                placeholder="Phone"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <FaEnvelope className="fa-lg me-3" />
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="Email" className="form-label" id="text">
                                Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Enter Email"
                              />
                              {errors.email && (
                                <span className="text-danger">{errors.email}</span>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <FaLock className="fa-lg me-3" />
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="Email" className="form-label" id="text">
                                Password
                              </label>
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter Password"
                              />
                              {errors.password && (
                                <span className="text-danger">{errors.password}</span>
                              )}
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={(e) => handleSave(e)}
                            >
                              Register
                            </button>
                            &nbsp;
                            <Link
                              to="/logins"
                              className="btn btn-info btn-lg btn-block"
                            >
                              Login
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </Fragment>
  );
}
    