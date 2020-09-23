import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { SideBarData } from "./SideBarData";
import { NavButtons } from "./NavButtons";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [largeScreen, setLargeScreen] = useState(true);

  const handleClick = () => {
    setClick(!click);
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
      console.log("im hit", largeScreen);
    }
  });

  return (
    <div className="navigation">
      <div className="navbar-container">
        {largeScreen ? (
          <Link to="/projects">
           <button>Hello</button>
          </Link>
       
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
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/*
When screen is shrunk, console.log false
When 
*/

//When screen is a certain size, I want the hamburger to show
//Onclick, the hamburger turns to x and a list appears showing navigatables
//The list slides from the left, and we can click
//onclick, hamburger returns, side bar returns to where it was, and we go to the location

//If window is x size, show the hamburger
//When window gets smaller, hamburger will appear
//When hamburger is clicked, it will trigger handle click, turn click true
//When click is true, the classname will change, which will change the css, and change the the hamburger to x
//when hamburger is clicked again, the css will change back because classname has changed

{
  /*  */
}
