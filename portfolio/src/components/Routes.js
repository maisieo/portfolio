import { React } from "react";
import { Route, Switch, Router } from "react-router-dom";
// import HomeView from "./HomeView";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Technologies from "./Technologies";
import Contact from "./Contact.js";
import Landing from "./Landing";
import Header from "./Header";
import Navbar from "./Navbar"

// import AuthenticatedRoute from "./AuthenticatedRoute";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
       <Landing />
      </Route>

      <Route path="/about-me" exact>
        <Header />
        <Navbar />
        <AboutMe />
      </Route>

      <Route exact path="/portfolio">
        <Header />
        <Navbar />
        <Portfolio />
      </Route>

      <Route exact path="/technologies">
        <Header />
        <Navbar />
        <Technologies />
      </Route>

      <Route exact path="/contact">
        <Header />
        <Navbar />
        <Contact />
      </Route>
    </Switch>
  );
}

export default Routes;
