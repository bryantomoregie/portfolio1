import React, { useState } from "react";
import "../css/project.css";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

export default function Projects() {
  var image = require("../images/j3a6Cyh - Imgur.png");

  let obj = {
    itni: {
      image: "image",
      title: "ITNI (Social Media)",
      sentenceOne:
        "ITNI is a place to have civil discussion around often contentious topics.",
      sentenceTwo: "Follow me for updates on this project!",
      ytlink: "https://www.youtube.com/watch?v=SSnwMdVVbt8",
      ghlink: "https://github.com/bryantomoregie/ITNI-Mod-5",
    },

    shoepalace: {
      image: "image",
      title: "Shoe Palace (E-Commerce)",
      sentenceOne: "Shoe Palace is a one stop shop to buy and sell shoes.",
      sentenceTwo: "Follow me for updates on this project!",
      ytlink: "https://www.youtube.com/watch?v=SSnwMdVVbt8",
      ghlink: "https://github.com/bryantomoregie/Project-4",
    },

    portfolio: {
      image: "image",
      title: "ITNI (Social Media)",
      sentenceOne:
        "ITNI is a place to have civil discussion around often contentious topics.",
      sentenceTwo: "Follow me for updates on this project!",
      ytlink: "https://www.youtube.com/watch?v=CD5ojdO9-f0&t=25s",
      ghlink: "https://github.com/bryantomoregie",
    },
  };

  const [project, setProject] = useState(obj.itni);

  let handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <div class="container">
        <div>
          <div class="hello"></div>
          <div class="links">
            <a href={project.ghlink}>
              <AiFillGithub />
            </a>
            <a href={project.ytlink}>
              <AiFillYoutube />
            </a>
          </div>
        </div>
        <div class="goodbye">
          <h1>{project.title}</h1>
          <p id="first">{project.sentenceOne}</p>
          <p id="last">{project.sentenceTwo}</p>
        </div>
      </div>

      <div className="scroll">
        <div id="left" onClick={(e) => handleClick(e)}>
          <AiOutlineDoubleLeft />
        </div>
        <div className="preview" id="itni-pre" onClick={(e) => handleClick(e)}> ITNI</div>
        <div className="preview" id="shoe-pre"> Shoe Palace</div>
        <div className="preview" id="port-pre"> Portfolio</div>
        <div id="right">
          <AiOutlineDoubleRight />
        </div>
      </div>
    </>
  );
}

/*

create a div that will house everything, display:flex
inside will be a div that has <, a div that has >, 3 seperate divs that will hold the name of the project
onclick we will change the css, 
hover over the arrow and it will get larger
hover over the squates and they will get larger, but remain opaque
click the square and it will set off a handle click that will set off the state and change whats being rendered

*/
