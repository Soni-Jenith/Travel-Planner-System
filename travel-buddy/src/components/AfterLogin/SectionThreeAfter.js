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
        <div className='Sec3Heading'>Tailored Suggestions</div>
        <div className='MainContainer'>
            <div className='SubContainer1'>
                <div className='SubSubContainer1 Sub'>
                
                    <img src={place1} alt='places' />
                    <div className='category_overlay'>
                        <div className='heroTitle'>Urban Adventures</div>
                        <div className='heroTitle'>Dive into the hustle and bustle of vibrant cities teeming with life and energy.</div>
                    </div>
                </div>
                <div className='SubSubContainer2 Sub'>
                <img src={place2} alt='places' />
                <div className='category_overlay'>
                        <div className='heroTitle'>Historic Trails</div>
                        <div className='heroTitle'>Walk through time and discover the stories behind the world's most iconic landmarks.</div>
                    </div>
                </div>
            </div>
            <div className='SubContainer2'>
                <div className='SubSubContainer3 Sub'>
                <img src={place3} alt='places' />
                <div className='category_overlay'>
                        <div className='heroTitle'>Beach Bliss</div>
                        <div className='heroTitle'> Soak up the sun and relax at the most idyllic and serence beach destinations.</div>
                    </div>
                </div>
                <div className='SubSubContainer4 Sub'>
                <img src={place4} alt='places' />
                <div className='category_overlay'>
                        <div className='heroTitle'>Summer Escapades</div>
                        <div className='heroTitle'> Beat the heat and enjoy endless summer adventures at these top spots.</div>
                    </div>
                </div>
                <div className='SubSubContainer5 Sub'>
                <img src={place5} alt='places' />
                <div className='category_overlay'>
                        <div className='heroTitle'>Family-Friendly Retreats</div>
                        <div className='heroTitle'>Create memories that last a lifetime with the best places for family fun and bonding.</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default SectionThreeAfter