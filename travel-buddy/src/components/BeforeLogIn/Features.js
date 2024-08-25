import React from "react";
import "./Features.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BackImage from "../../Assets/Features Section/pexels-photo-1261728.png";
// import BackImage from "../../Assets/Section 3/background.png";
import illustration1 from "../../Assets/Features Section/illustration1.png";
import illustration3 from "../../Assets/Features Section/illustration3.png";
import illustration4 from "../../Assets/Features Section/illustration4.png";
import illustration5 from "../../Assets/Features Section/illustration5.png";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "bottom -100%",
        pin: "#section2",
        scrub: 1,
        markers: true,
        duration: 4,
      },
    });
    // tl.to(".Container", {
    //   height: "100%",
    //   width: "100%",
    //   borderRadius: "0px",
    // })
    tl.from(
      ".Heading",
      {
        y: -200,
        ease: "power4.inOut",
      },
      "<"
    )
      .to(
        ".slide",
        {
          transform: "translateX(-301%)",
          duration: 2,
          scrub: 2,
        },
        ">"
      )
      .to(
        ".Heading",
        {
          y: -200,
          ease: "bounce.inOut",
        },
        ">"
      );
  });

  return (
    <section id="section2">
      <div className="Container">
        <img src={BackImage} alt="backimage" id="section_2_back_img" />
        <div className="top_overlay_section2"></div>
        <div className="bottom_overlay_section2"></div>
        <div className="slide">
          <div className="Content1 Content">
            <div className="ContentBox">
              <div className="PicPart">
                <img src={illustration1} />
              </div>
              <div className="TextPart">
                <h1>Tailored Trip Suggestions</h1>
                <p>
                  Whether You're a beach bum, a mountain explorer, or a city
                  slicker, we'll help you discover your perfect gateway.
                </p>
              </div>
            </div>
          </div>
          <div className="Content2 Content">
            <div className="ContentBox">
              <div className="PicPart">
                <img src={illustration3} />
              </div>
              <div className="TextPart">
                <h1>Itinerary Magic</h1>
                <p>
                  Forget the hassle of planning. We craft day-by-day itineraries that match your style, interests and budget
                </p>
              </div>
            </div>
          </div>
          <div className="Content3 Content">
          <div className='ContentBox'>
              <div className='PicPart'>
                <img src={illustration4}/>
              </div>
              <div className='TextPart'>
              <h1>Budget-Friendly Options</h1>
              <p>We beleive great travel doesn't have to break the bank. Explore afforfable trips that don't compromise on experience.</p>
              </div>
            </div>
          </div>
          <div className="Content4 Content">
          <div className='ContentBox'>
              <div className='PicPart'>
                <img src={illustration5}/>
              </div>
              <div className='TextPart'>
              <h1>Real Traveler Reviews.</h1>
              <p>get insights from fellow travelers who have walked the path before you. Our community is full of helpful tips and honest feedback.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Heading">YOUR ADVENTURE BEGINS HERE</div>
      </div>
    </section>
  );
};

export default Features;
