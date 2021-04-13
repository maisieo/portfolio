import React from "react";
import "../App.css";
import "./HeroSection.css";
import Button from "react-bootstrap";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Welcome!</h1>
      {/* <div className="hero-btns">
        <a href="/portfolio" type="button" class="btn btn-secondary btn-sm">
          See my projects
        </a>
        <a href="/contact" type="button" class="btn btn-secondary btn-sm">
          Get in touch
        </a>
      </div> */}
    </div>
  );
}

export default HeroSection;
