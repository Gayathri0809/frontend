import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddMenu() {
  let navigate = useNavigate();

  const [list, setList] = useState({
    name: "",
    price: "",
    description:"",
    category:"",
    images:"",
  });

  const { name, price,description,category,images } = list;

  const onInputChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/list", list);
    alert("product added");
    navigate("/adminmenu");
  };

  return (
    <div className="admenu">
      <div className="row">
        <div className="col-md-6 offset-md-3 border ">
          <h2 className="text-center m-4" id="large">Add Item</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
              description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
               category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
               Image URL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Image URL"
                name="images"
                value={images}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/dashboard">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
