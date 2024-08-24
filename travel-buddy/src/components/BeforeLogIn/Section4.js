import React from 'react'
import './Section4.css';
import image from '../../Assets/Section 4/image.png';
import background from '../../Assets/Section 4/pexels-photo-3278215.png'

const Section4 = () => {
  return (
    <section id="section4">
    <img src={background}/>
    <div className='heading'>Why TravelBuddy</div>
        <div className='TextContainer'>
            <p>TravelBuddy isn't just a travel-planner- It's your gateway to extraordinary experiences. Our platform is built for travelers, by travelers, ensuring that every aspect of your journey is covered, from the initial idea to the last detail. With a vast selection of destinations, tailored suggestions, and a seamless planning process, we make travel accessible and exciting.</p>
            <p>We craft and plan unique itineraries tailored to customers' interests and with strong attention to detail</p>
        <a href='' className='button'>HELP ME PLAN A TRIP</a>
        </div>

    
</section>
  )
}

export default Section4