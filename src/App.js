import React from "react";
import "./css/app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
