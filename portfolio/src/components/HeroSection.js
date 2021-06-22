import React from "react";
import "../App.css";
import "./HeroSection.css";
import Button from "react-bootstrap";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="typewriter">
      <h1>Hi! I'm Maisie - a UK-based front-end developer!</h1>
      </div>
      {/* <div className="hero-btns">
        <a href="/portfolio" type="button" class="btn btn-secondary btn-sm">
          See my projects
        </a>
        <a href="/contact" type="button" class="btn btn-secondary btn-sm">
          Get in touch
        </a>
      </div> */}
           <a href="/about-me" type="button" class="btn btn-secondary btn-lg">
          ENTER
        </a>
    </div>
  );
}

export default HeroSection;
