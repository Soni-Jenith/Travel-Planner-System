import React from 'react'
import './CssFiles/Navbar.css';
import logo from '../../Assets/Brown Mountain Travel Retro Logo (2)-Photoroom.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  function remove_user_data(){
    localStorage.removeItem('store_jwt_token_pass_key_for_travel_body')
    window.location.reload()
  }
  const navigate = useNavigate();

    const go_to_login_page = ()=>{
            navigate('/UserLogin')
    }
  return (
    <>
    <nav id="navbar">
        <img src={logo} id='logo' alt='logo' />
        <div id='nav-container'>
            <div id='nav-links'>
            <a href='#section1' >Home</a>
            <a href='' onClick={go_to_login_page}>Discover</a>
            <a href='' onClick={go_to_login_page}>Plan A Trip</a>
            </div>
            <div id='signupContainer'>
                <a href='' id='LoginLink'  onClick={go_to_login_page}>LogIn</a>
                <a href='' id='SignUpLink' onClick={go_to_login_page}>SignUp</a>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar