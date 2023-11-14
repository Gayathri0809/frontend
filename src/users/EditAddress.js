import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAddress() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [list, setList] = useState({
    address: "",
    name: "",
    phone:"",
    pincode:"",
    
  });

  const { address, name,phone,pincode } = list;

  const onInputChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/address/${id}`, list);
    navigate("/cart");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/address/${id}`);
    setList(result.data);
  };

  return (
    <div className="admenu">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Enter Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
              Phone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Phone Number"
                name="Phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
               PinCode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Category"
                name="pincode"
                value={pincode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/cart">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
