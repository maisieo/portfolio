import React from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";

function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Maisie Codes</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about-me">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="technologies">Technologies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="contact">Get in touch</a>
      </li>
            
    </ul>
   
  </div>
</nav>
  );
}

export default Navbar1;
{

}
