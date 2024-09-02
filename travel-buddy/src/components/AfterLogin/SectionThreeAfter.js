import React from 'react'
import './CssFiles/SectionThreeAfter.css';
import place1 from '../../Assets/AfterLogin/Section3/panorama-miami-florida-water-346286.png'
import place2 from '../../Assets/AfterLogin/Section3/pexels-photo-1851481.png';
import place3 from '../../Assets/AfterLogin/Section3/pexels-photo-3801097.png'
import place4 from '../../Assets/AfterLogin/Section3/photo-1469854523086-cc02fe5d8800.png';
import place5 from '../../Assets/AfterLogin/Section3/bushwalking-young-family-in-tasmania-australia-taking-in-the-view-at-freycinet-np.png';

const SectionThreeAfter = () => {
  return (
    <section id='SectionThreeAfter'>
        <div className='MainContainer'>
            <div className='SubContainer1'>
                <div className='SubSubContainer1 Sub'>
                    <img src={place1} alt='places' />
                </div>
                <div className='SubSubContainer2 Sub'>
                <img src={place2} alt='places' />
                </div>
            </div>
            <div className='SubContainer2'>
                <div className='SubSubContainer3 Sub'>
                <img src={place3} alt='places' />
                </div>
                <div className='SubSubContainer4 Sub'>
                <img src={place4} alt='places' />
                </div>
                <div className='SubSubContainer5 Sub'>
                <img src={place5} alt='places' />
                </div>
            </div>

        </div>
    </section>
  )
}

export default SectionThreeAfter