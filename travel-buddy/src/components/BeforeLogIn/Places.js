import React from 'react';
import './Places.css';
import diamond from '../../Assets/Section 3/test_img_on_img.png';
import  beach from '../../Assets/Section 3/beach.png';
import  historic from '../../Assets/Section 3/historic.png';
import  adventure from '../../Assets/Section 3/hot-air-balloons-4561267_1280.png';
import  mountain from '../../Assets/Section 3/mountain.png';
import  nature from '../../Assets/Section 3/pexels-photo-1152359.png';
import background from '../../Assets/Section 3/background.png'


const section3 = () => {
  return (
    <section id="section3">
        {/* <img src={background} id='background'/> */}
        <div className="top_overlay_section3"></div>
        <div className="bottom_overlay_section3"></div>


        
        <div className="gride_con">
            <div className="columns">
                <div className="item">
                    Dream <br/>Escapes<br/>
                    <a href='' className="view_all">View All</a>
                </div>
                <div className="item">
                    <img src={beach} alt="indian place" />
                    <img src={diamond} alt="on img texture" />
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={mountain} alt="indian place"/>
                    <img src={diamond} alt="on img texture"/>
                </div>
                <div className="item">
                    <img src={historic} alt="indian place"/>
                    <img src={diamond} alt="on img texture"/>
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={adventure} alt="indian place"/>
                    <img src={diamond} alt="on img texture"/>
                </div>
                <div className="item">
                    <img src={nature} alt="indian place"/>
                    <img src={diamond} alt="on img texture"/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default section3