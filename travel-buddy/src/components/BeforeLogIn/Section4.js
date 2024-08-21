import React from 'react'
import './Section4.css';
import image from '../../Assets/Section 4/image.png';

const Section4 = () => {
  return (
    <section id="section4">
    <div className="section_4_part_1">
        <div className="title"><span>Why</span> TravelBuddies</div>
        <img src={image} alt="illustration" />
    </div>
    <div className="section_4_part_2">
        <div className="item">TravelBuddies isn't just a travel planner- It's your gateway to
            extraordinary experiences. Our platform is built for travelers,
            by travelers, ensuring that every aspect of your journey is 
            covered, from the initial idea to the last detail. 
            With a vast selection of destinations, tailored suggestions, 
            and a seamless planning process,
            we make travel accessible and exciting.</div>

            <div className="item">We craft and plan 
                unique itineraries 
                tailored to customers'
                interests and with
                strong attention
                to detail</div>

            <div className="item">
                <button>HELP ME PLAN A TRIP</button>
            </div>
    </div>
</section>
  )
}

export default Section4