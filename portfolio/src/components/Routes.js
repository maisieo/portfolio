import { React} from "react";
import { Route, Switch, Router } from "react-router-dom";
// import HomeView from "./HomeView";
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Technologies from "./Technologies"
import Contact from "./Contact.js"
import Landing from "./Landing"

// import AuthenticatedRoute from "./AuthenticatedRoute";

function Routes() {
  return (
   
    <Switch> 
       <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/about-me" exact>
        <AboutMe />
      </Route>

      <Route exact path="/portfolio">
      <Portfolio/>
      </Route>

      <Route exact path="/technologies">
      <Technologies/>
      </Route>

      <Route exact path="/contact">
      <Contact/>
      </Route>
      </Switch>
      
    
  );
}

export default Routes;
