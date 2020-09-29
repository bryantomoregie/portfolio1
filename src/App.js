import React from "react";
import "./css/app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Welcome from "./Components/Welcome.js"
import Projects from "./Components/Projects.js"
import Principal from "./Components/Principal"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Principal}/>
      </Switch>
    </Router>
  );
}

export default App;
