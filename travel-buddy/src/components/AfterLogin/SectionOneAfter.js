import React from "react";
import "./CssFiles/SectionOneAfter.css";
import NavbarAfter from "./NavbarAfter";
import SearchIcon from "../../Assets/AfterLogin/Section1/magnifier.png";
import BackgroundImage from "../../Assets/AfterLogin/Section1/pexels-photo-1450340.png";

const SectionOneAfter = () => {
  return (
    <section id="HomeSection_Afterlogin">
      <NavbarAfter />

      <img src={BackgroundImage} alt="background" />

      <div className="HeroContainer">

        <div className="textContainer">
          <div id="Home_Heroline">FIND YOUR PERFECT ESCAPE</div>
          <div id="Home_Subheroline">
            Search from the best destinations around the world
          </div>
        </div>

        <div className="SearchBar">
          <img src={SearchIcon} id="searchicon" alt="searchicon" />
          <input
            type="search"
            name="LocationSearch"
            id="LocationSearch"
            placeholder="Search..."
          ></input>
        </div>
      </div>
    </section>
  );
};

export default SectionOneAfter;
