import React from 'react'
import './Features.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BackImage from '../../Assets/Features Section/sunset-8381528_1280.png'

const Features = () => {

  gsap.registerPlugin(ScrollTrigger);


 useGSAP(()=>{

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "bottom -100%",
      pin: "#section2",
      scrub: 2,
      markers: true,
      duration: 4,
    }
  });
  tl.to(".Container", {
    height: "100%",
    width: "100%",
    borderRadius: "0px",
  })
  .from(".Heading", {
    y: -200,
    ease: "power4.inOut"
  }, "<")
  .to(".slide", {
    transform: "translateX(-301%)", 
    duration: 2,
    scrub: 2, 
  }, ">")
  .to(".Heading", {
    y: -200,
    ease: "bounce.inOut"
  }, ">")
 })



  return (
    <section id='section2'>
      <div className='Container'>
        <img src={BackImage} alt='backimage' />
        <div className='slide'>
          <div className='Content1 Content'>
            <div className='ContentBox'>
              <h1>Tailored Trip Suggestions</h1>
              <p>Whether You're a beach bum, a mountain explorer, or a city slicker, we'll help you discover your perfect gateway.</p>
            </div>
          </div>
          <div className='Content2 Content'>
          <div className='ContentBox'>
              <h1>Tailored Trip Suggestions</h1>
              <p>Whether You're a beach bum, a mountain explorer, or a city slicker, we'll help you discover your perfect gateway.</p>
            </div>
          </div>
          <div className='Content3 Content'>
          <div className='ContentBox'>
              <h1>Tailored Trip Suggestions</h1>
              <p>Whether You're a beach bum, a mountain explorer, or a city slicker, we'll help you discover your perfect gateway.</p>
            </div>
          </div>
          <div className='Content4 Content'>
          <div className='ContentBox'>
              <h1>Tailored Trip Suggestions</h1>
              <p>Whether You're a beach bum, a mountain explorer, or a city slicker, we'll help you discover your perfect gateway.</p>
            </div>
          </div>
        </div>
          <div className='Heading'>YOUR ADVENTURE BEGINS HERE</div>
      </div>
    </section>
  )
}

export default Features