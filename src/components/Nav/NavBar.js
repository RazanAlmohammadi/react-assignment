import React from 'react'
import "./NavBar.css"
import logo from "../../Images/logo.png";
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
    
      <img src={logo} alt="logo" className="logo" />
        <ul className="navList">
        <Link to="/Home">Home</Link>
        <Link to="Products">Products</Link>
           
            <Link>About</Link>
        </ul>
  
    </nav>
  )
}
