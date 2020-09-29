import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { SideBarData } from "./SideBarData";
import  NavButtons  from "./NavButtons.js";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [largeScreen, setLargeScreen] = useState(true);

  const handleClick = () => {
    setClick(!click);
    console.log(click)
  };

  const showSideBar = () => {
    if (window.innerWidth < 600) {
      setLargeScreen(false);
    } else if (window.innerWidth >= 600) {
      setLargeScreen(true);
    }
  };

  window.addEventListener("resize", showSideBar);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setLargeScreen(false);
    }
  });

  return (
    <div className="navigation">
      <div className="navbar-container">
        {largeScreen ? (
          <NavButtons/>
        ) : (
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        )}
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleClick}
      >
        {SideBarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a href={item.path}>
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/*
To begin using flexbox, I need a flex container. This is done by adding display:flex
to container css. ***
So I could do jsutify-content: flex-end, and change the css when the size changes. A lot of work though
Why not jut keep it at start, and move the div over to the right. 
*/
