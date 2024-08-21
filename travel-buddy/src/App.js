import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import HomeSection from './components/BeforeLogIn/HomeSection';
import Features from './components/BeforeLogIn/Features';
import Section3 from './components/BeforeLogIn/Section3';
import Section4 from './components/BeforeLogIn/Section4';
import CustomiseTrips from './components/BeforeLogIn/CustomiseTrips';
import Footer from './components/BeforeLogIn/Footer';

gsap.registerPlugin(ScrollTrigger);


function App() {
 
  

  return (
    

    <body id='body' data-scroll-container>

      <HomeSection className="home section"/>

      <Features data-scroll data-scroll-speed="4" />

      <Section3 />

      <Section4 />

      <CustomiseTrips/>
      
      <Footer/>
      
      
      
    </body>
    
  );
}

export default App;
