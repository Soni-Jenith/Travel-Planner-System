import React from 'react'
import './CssFiles/NavbarAfter.css';
import logoAfter from '../../Assets/Brown Mountain Travel Retro Logo (2)-Photoroom.png';
import userIcon from '../../Assets/AfterLogin/Section1/user.png'

import { useNavigate } from 'react-router-dom';


const NavbarAfter = () => {
  const navigate = useNavigate();
  
  function remove_user_data(){
    localStorage.removeItem('store_jwt_token_pass_key_for_travel_body')
    navigate('/')
    window.location.reload()
  }

    const UserProfilePage = ()=>{
            navigate('/user-profile')
    }




  return (

    <nav id='navbarAfter'>

    <div className='logoooo'>
        <img  src={logoAfter} id='logoAfter' alt='logoo'/>
        </div>
        <div className='nav-links'>
            <a href='#' >Home</a>
            <a href='#'>Discover</a>
            <a href='#'>Plan a Trip</a>
            <a href='#'>Popular</a>
            {/* <button onClick={>GO to back</button> */}
        </div>

        <div className='profileContainer' onClick={UserProfilePage}>
            <img  src={userIcon} id='usericon' alt='icon'/>
            <div id='UserNameNavbar'>Mr.Nobody</div>
        </div>

    </nav>
  )
}

export default NavbarAfter