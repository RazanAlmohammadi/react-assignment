import React from 'react'
import "./NavBar.css"
import logo from "../../Images/logo.png";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import InfoIcon from '@mui/icons-material/Info';
export default function NavBar() {
  return (
    <nav>
    
      <img src={logo} alt="logo" className="logo" />
        <ul className="navList">
        <Link to="/Home"> <HomeIcon sx={{ color: "black" }} /></Link>
        <Link to="Products"> <CheckroomIcon sx={{ color: "black" }} /></Link>
           
        <Link to="About"><InfoIcon  sx={{ color: "black" }} /></Link>
        </ul>
  
    </nav>
  )
}
