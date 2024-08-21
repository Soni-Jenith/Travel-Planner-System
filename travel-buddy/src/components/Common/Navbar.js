import React from 'react'
import './Navbar.css';
import logo from '../../Assets/Brown Mountain Travel Retro Logo-Photoroom.png';


const Navbar = () => {
  return (
    <>
    <nav id="navbar">
        <img src={logo} id='logo' alt='logo' />
        <div id='nav-container'>
            <div id='nav-links'>
            <a href='#section1'>Home</a>
            <a href='#section4'>Discover</a>
            <a href='#section5'>Plan A Trip</a>
            </div>
            <div id='signupContainer'>
                <a href='#section3' id='LoginLink'>LogIn</a>
                <a href='#section3' id='SignUpLink'>SignUp</a>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar