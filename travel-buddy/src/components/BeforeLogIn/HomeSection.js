import React, { useRef } from 'react';
import "./CssFiles/HomeSection.css";
import Navbar from './Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZoomImage from '../../Assets/Home Page Images/ZoomImage.png';
import video from '../../Assets/Home Page Images/Video.mp4';
import { useGSAP } from '@gsap/react';


const HomeSection = () => {
  const ZoomImg = useRef(null);
  
 gsap.registerPlugin(ScrollTrigger);


 useGSAP(()=>{

  gsap.to(ZoomImg.current ,{
    scale: 6.2,
    scrollTrigger: {
      trigger: ZoomImg.current,
      scroller: "body",
      start: "top top",
      end: "60% top",
      pin : ".HomeSection",
      scrub: 1,
    },})

    gsap.from("#navbar", {
      y:  -100,
      scrollTrigger: {
        trigger : ZoomImage.current,
        start: "1% top",
        end: "5% top",
        scrub: 1,
      },
    })
    

    // gsap.to("#section1", {
    //   height: "90%",
    //   width: "90%",
    //   scrollTrigger: {
    //     trigger: "#section1",
    //     start: "20% top",
    //     end: "center top",
    //     scrub: true,
    //     // markers: true,
    //   }
    // },)
 })
  

    

  return (
    <div className='HomeSection' id='HomeSection'>

        <Navbar/>
     
          <img src={ZoomImage} ref={ZoomImg} id='HomeImage' alt='HomeSection' /> 
     
          <section id='section1' className='Home'>
              <video src={video} id='Homevideo' alt='HomeSection' data-scroll data-scroll-speed="-3"  autoPlay muted loop></video>
              <div className="bottm_overlay"></div>
          </section>

    </div>
  )
}

export default HomeSection;