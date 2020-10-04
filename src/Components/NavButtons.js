import React from "react";
import "../css/buttons.css";
import { Link } from "react-scroll";

export default function NavButtons() {
  return (
    <div className="nav-buttons">
      <Link
        // activeClass="active"
        to="welcome"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
        className="nav-button"
      > Welcome</Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={0}
        className="nav-button"
      > Projects</Link>
      <Link
       activeClass="active"
       to="tech"
       spy={true}
       smooth={true}
       offset={0}
       duration={0}
       className="nav-button"
      > Tech</Link>
      <Link
       activeClass="active"
       to="connect"
       spy={true}
       smooth={true}
       offset={0}
       duration={0}
       className="nav-button"
      > Connect</Link>
    </div>
  );
}

