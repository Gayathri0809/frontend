import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddMenu() {
  let navigate = useNavigate();

  const [list, setList] = useState({
    address: "",
    name:"",
    phone: "",
    pincode:"",
   
  });

  const { address,phone,name,pincode } = list;

  const onInputChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/address", list);
    navigate("/cart");
  };

  return (
    <div className="address">
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <h2 className="text-center m-4">Address</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
               Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          
              <div className="mb-3">
              <label htmlFor="name" className="form-label">
              Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phoneno
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your pincode"
                name="pincode"
                value={pincode}
                onChange={(e) => onInputChange(e) }
              />
              </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/data">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
