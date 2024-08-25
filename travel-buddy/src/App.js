import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import HomeSection from './components/BeforeLogIn/HomeSection';
import Features from './components/BeforeLogIn/Features';
import Places from './components/BeforeLogIn/Places';
import Section4 from './components/BeforeLogIn/Section4';
import Section5 from './components/BeforeLogIn/Section5';
import Footer from './components/BeforeLogIn/Footer';

gsap.registerPlugin(ScrollTrigger);


function App() {
 
  

  return (
    

    <body id='body'>

      <HomeSection className="home section"/>

      <Features />

      <Places />

      <Section4 />

      <Section5/>
      
      <Footer/>
      
      
      
    </body>
    
  );
}

export default App;
