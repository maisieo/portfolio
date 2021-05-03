import React from "react";
import walkimg from "./WhenShouldIWalk.JPG"
import workwithme from "./WorkWithME.JPG"
export default function Portfolio() {
  return (
    <div classNameName="portfolio">
      <div className="card-group">
  <div className="card">
    <img className="card-img-top" src={walkimg}alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">When Should I Walk?</h5>
      <p className="card-text">For this app, built with React, external APIs, Express, MySQL and Boostrap, I developed a sophisticated algorthim to tell people when to take their one-hour walk in lockdown. Feature extension by Andrea Nowe.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={workwithme} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Work With Me</h5>
      <p className="card-text">Full-stack app that allows users to find people to co-work with in their area. They can also offer their own space as a coworking space.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://external-preview.redd.it/_PQ_zQ__0EMI4iJTWhSVI_Ocul5ZW1I2G-RLYQsRdpM.jpg?auto=webp&s=6f1659fe3a3836192e8a608843b01890e17fc327" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>
    </div>
  );
}
