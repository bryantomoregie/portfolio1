import React from "react";
import "./css/app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Principal from "./Components/Principal";

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
