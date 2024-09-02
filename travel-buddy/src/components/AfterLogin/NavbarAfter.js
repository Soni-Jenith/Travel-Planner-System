import React from 'react'
import './CssFiles/NavbarAfter.css';
import logoAfter from '../../Assets/Brown Mountain Travel Retro Logo (2)-Photoroom.png';
import userIcon from '../../Assets/AfterLogin/Section1/user.png'

const NavbarAfter = () => {
  return (

    <nav id='navbarAfter'>

    <div className='logoooo'>
        <img  src={logoAfter} id='logoAfter' alt='logoo'/>
        </div>
        <div className='nav-links'>
            <a href='#'>Home</a>
            <a href='#'>Discover</a>
            <a href='#'>Plan a Trip</a>
            <a href='#'>Popular</a>
        </div>

        <div className='profileContainer'>
            <img  src={userIcon} id='usericon' alt='icon'/>
            <div id='UserNameNavbar'>Mr.Nobody</div>
        </div>

    </nav>
  )
}

export default NavbarAfter