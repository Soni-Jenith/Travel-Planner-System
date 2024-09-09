import React from 'react'
import './CssFiles/Section4.css';
import image from '../../Assets/Section 4/image.png';
import background from '../../Assets/Section 4/pexels-photo-3278215.png'
import { useNavigate } from 'react-router-dom';

const Section4 = () => {
  const navigate = useNavigate();

    const go_to_login_page = ()=>{
            navigate('/UserLogin')
    }
  return (
    <section id="section4">
    <img src={background}/>
    <div className="top_overlay_section4"></div>
    <div className='heading'>Why TravelBuddy</div>
        <div className='TextContainer'>
            <p>TravelBuddy isn't just a travel-planner- It's your gateway to extraordinary experiences. Our platform is built for travelers, by travelers, ensuring that every aspect of your journey is covered, from the initial idea to the last detail. With a vast selection of destinations, tailored suggestions, and a seamless planning process, we make travel accessible and exciting.</p>
            <p>We craft and plan unique itineraries tailored to customers' interests and with strong attention to detail</p>
        <a href='' className='button' onClick={go_to_login_page}>HELP ME PLAN A TRIP</a>
        </div>

    
</section>
  )
}

export default Section4