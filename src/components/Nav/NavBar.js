import React from 'react'
import "./NavBar.css"
import logo from "../Images/logo.png";
export default function NavBar() {
  return (
    <nav>
    
      <img src={logo} alt="logo" />
        <ul className="navList">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
        </ul>
  
    </nav>
  )
}
