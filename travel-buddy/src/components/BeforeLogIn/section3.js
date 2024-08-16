import React from 'react'

// import form folder
import './section3.css'
import test_img from './test_img.jpg'
import test_img_on_img from './test_img_on_img.png'

function notneeded() {
  return (
    <>
    <section id="section3">
        <div className="gride_con">
            <div className="columns">
                <div className="item">
                    Dream <br/>Escapes<br/>
                    <button className="view_all">View All</button>
                </div>
                <div className="item">
                    
                    <img src={test_img} alt="indian place"/>
                    <img src={test_img_on_img} alt="on img texture"/>
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={test_img} alt="indian place"/>
                    <img src={test_img_on_img} alt="on img texture"/>
                </div>
                <div className="item">
                    <img src={test_img} alt="indian place"/>
                    <img src={test_img_on_img} alt="on img texture"/>
                </div>
            </div>
            <div className="columns">
                <div className="item">
                    <img src={test_img} alt="indian place"/>
                    <img src={test_img_on_img} alt="on img texture"/>
                </div>
                <div className="item">
                    <img src={test_img} alt="indian place"/>
                    <img src={test_img_on_img} alt="on img texture"/>
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default notneeded
