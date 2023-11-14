import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





import Last from "./users/Last";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import AdminLogin from "./Admin/AdminLogin";
import AdminMenu from "./Admin/AdminMenu";
import EditMenu from "./Admin/EditMenu";
import AddMenu from "./Admin/AddMenu";

import ChefLogin from "./Chef/ChefLogin";

import ChefOrders from "./Chef/ChefOrders";
import Home from "./layout/Home";

import Cart from './users/cart';

import Rating from './users/Rating';
import Address from './users/Address';
import EditAddress from './users/EditAddress';

import Menu from './users/menu';
import AdminDashboard from './Admin/AdminDashborad';
import Users from './Admin/Users';
import Corders from './Chef/Corders';

import ViewRating from './Admin/Viewrating';






function App() {
  return (
  <>
   <Router>
        <Navbar/>
      
   <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/addmenu" element={<AddMenu />} />
          <Route exact path="/editmenu/:id" element={<EditMenu />} />
          <Route exact path="/editaddress/:id" element={<EditAddress />} />
          <Route exact path="/register" element={<RegistrationForm/>}/>
          <Route exact path="/chef/login" element={<ChefLogin/>} />
          <Route exact path="/logins" element={<Login/>}/>
          <Route exact path="/admin/login" element={<AdminLogin/>}/>
          <Route exact path="/adminmenu" element={<AdminMenu/>}/>
          <Route exact path="/vieworders" element={<ChefOrders/>}/>
          <Route exact path="/final" element={<Last/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/dashboard" element={<AdminDashboard/> }/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/c" element={<Corders/>}/>
          <Route exact path="/rate" element={<Rating/>}/>
          <Route exact path="/address" element={<Address/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/user" element={<Users/>}/>
          
          <Route exact path="/viewrate" element={<ViewRating/>}/>
        
        </Routes>
      </Router>
      


  </>
  );
}

export default App;
