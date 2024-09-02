import React from 'react'
import './Footer.css';
import logonobg from '../../Assets/Footer/logo_no_bg.png';
import location from '../../Assets/Footer/location.png';
import phone from '../../Assets/Footer/phone-call.png';
import send from '../../Assets/Footer/send.png';
import twitter from '../../Assets/Footer/twitter.png';
import pinterest from '../../Assets/Footer/pinterest.png';
import instagram from '../../Assets/Footer/instagram.png';



const Footer = () => {
  return (
    <footer>
        <div className="column_s">
            <img src={logonobg} alt=""/>
            <p>Discover top travel destinations, tips, and deals. Plan your perfect getaway with our expert guides, personalized recommendations, and seamless booking experience</p>
            <button>Get more</button>
        </div>

        <div className="column_s">
            <div className="item">
                <div className="title">Services</div>
            </div>
            <div className="item">
                Go to home
            </div>
            <div className="item">
                Back from home
            </div>
            <div className="item">
                center in home
            </div>
            <div className="item">
                70% at home
            </div>
        </div>

        <div className="column_s">
            <div className="item">
                <div className="title">Help</div>
            </div>
            <div className="item">
                Get help
            </div>
            <div className="item">
                Customer Support
            </div>
            <div className="item">
                FAQ
            </div>
        </div>

        <div className="column_s">
            <div className="item">
                <div className="title" >Contact us</div >
            </div>
            <div className="item">
                <img src={location} alt="about us"/>
                
                <p>203 Fake st. mountain View,san Francisoc, California USA</p>
            </div>
            <div className="item">
                <img src={phone} alt="about us"/>
                <p>+91 22215483</p>
            </div>
            <div className="item">
                <img src={send} alt="about us"/>
                <p>gfapk63@gmail.com</p>
            </div>
            <div className="item">
                <div className="title" >Social</div >
            </div>
            <div className="social_logo_con">
                <img src={twitter} alt="twitter"/>
                <img src={pinterest} alt="pinterest"/>
                <img src={instagram} alt=""/>
            </div>
        </div>

{/* 
        <div className="footer_bottom">
            © 2020-2024 All Rights Reserved
        </div> */}

        
    </footer>
  )
}

export default Footer