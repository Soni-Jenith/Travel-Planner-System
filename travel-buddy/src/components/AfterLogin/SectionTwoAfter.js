import React from 'react';
import './CssFiles/SectionTwoAfter.css';

const SectionTwoAfter = () => {
  return (
    <section id='SectionTwoAfter'>
      <div className='sec2Container1'>
        <div className='section2Heading'>Recently Made Itineraries</div>
        <a href=''> + Plan a Trip</a>
      </div>

      <div className='sec2Container2'>
          <div className='Temp_Text'>Haven't Planned a trip yet. <a href='' id='Temp_text_Link' >Let's Plan a trip</a></div>
      </div>

    </section>
  )
}

export default SectionTwoAfter