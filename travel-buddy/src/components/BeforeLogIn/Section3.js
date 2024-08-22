import React from 'react'
import './Section3.css';
import diamond from "../../Assets/Section 3/test_img_on_img.png";
import image from "../../Assets/Section 3/test_img.jpg"

const Section3 = () => {
  return (
   
    <section id="section3">
        <div className="gride_con">
            <div className="columns">
                <div className="item">
                    Dream <br/>Escapes<br/>
                    <button className="view_all">View All</button>
                </div>
                <div className="item">
                    <img src={image} alt="indian place" />
                    <img src={diamond} alt="on img texture" />
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={image} alt="indian place" />
                    <img src={diamond} alt="on img texture" />
                </div>
                <div className="item">
                    <img src={image} alt="indian place" />
                    <img src={diamond} alt="on img texture" />
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={image} alt="indian place" />
                    <img src={diamond} alt="on img texture" />
                </div>
                <div className="item">
                    <img src={image} alt="indian place" />
                    <img src={diamond} alt="on img texture"/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Section3