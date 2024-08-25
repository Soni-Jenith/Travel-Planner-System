import React from 'react';
import './Section5.css';
import Background from '../../Assets/Section 5/background.png';

const Section5 = () => {
  return (
    <section id='section5'>
    <img src={Background} alt="Background_section_5" />
    {/* 1 */}
    <div className="trip_steps_con">

        <div className="Diamond">
            <div className="Step">1</div>
        </div>

        <div className="trip_steps_data">
            <div className="title">Describe your dream Trip</div>
            <p>Tell us about your perfect vacation.Destinations, preferences,and what you would like to see and do.</p>
        </div>

    </div>

    {/* 2 */}
    <div className="trip_steps_con">

        <div className="Diamond">
            <div className="Step">2</div>
        </div>

        <div className="trip_steps_data">
            <div className="title">Get matched</div>
            <p> Our team connects you with up to two vetted travel specialists,who will compete for your business.</p>
        </div>

    </div>
    {/* 3 */}
    <div className="trip_steps_con">

        <div className="Diamond">
            <div className="Step">3</div>
        </div>

        <div className="trip_steps_data">
            <div className="title">Plan your trip</div>
            <p>Our team connects you with up to two vetted travel specialists, who will compete for your business.</p>
        </div>

    </div>

  </section>
  )
}

export default Section5