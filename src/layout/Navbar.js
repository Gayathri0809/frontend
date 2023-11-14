import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  return (
    <body>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/logins">
            CAFE RESTAURANT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/chef/login">
           Chef
          </Link>
          <Link className="btn btn-outline-light" to="/admin/login">
            Admin
          </Link>
          <Link className="btn btn-outline-light" to="/register">
            Register
          </Link>
          <Link className="btn btn-outline-light" to="/logins">
            Login
          </Link>
          <Link className="btn btn-outline-light" to="/logins">
           Log Out
          </Link>
         <a href="/menu">Menu</a>
        </div>
       </nav>
      
        
       
       
        </body>
      
  );
}
