import React, { useState, useRef } from "react";
import shoePhoto from '../images/shoe-palace.png'
import itniPhoto from '../images/itni.png'
import "../css/project.css";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

export default function Projects() {

  let obj = {
    itni: {
      image: itniPhoto,
      title: "ITNI (Social Media)",
      sentenceOne:
        "ITNI is a place to have civil discussion around often contentious topics.",
      sentenceTwo: "Follow me for updates on this project!",
      ytlink: "https://www.youtube.com/watch?v=SSnwMdVVbt8",
      ghlink: "https://github.com/bryantomoregie/ITNI-Mod-5",
    },

    shoepalace: {
      image: shoePhoto,
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
  const itni = useRef();
  const shoepalace = useRef();
  const portfolio = useRef();

  let projectReferences = {
    itni: itni,
    shoepalace: shoepalace,
    portfolio: portfolio
  }

  let handleClick = (e) => {
    e.target.classList.add('clicked')
    let project = e.target.id
    setProject(obj[project])
    console.log(projectReferences[project])
    setTimeout(() => {projectReferences[project].current.classList.remove('clicked')}, 1000)
  }


  

  return (
    <div id="projects">
      <div class="container">
        <div>
          <div style={{ backgroundImage: `url(${project.image})`}} class="hello">

          </div>
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
        <div ref={itni} className="preview" id="itni" onClick={(e) => handleClick(e)}></div>
        <div ref={shoepalace} className="preview" id="shoepalace" onClick={(e) => handleClick(e)}></div>
        <div ref={portfolio} className="preview" id="portfolio" onClick={(e) => handleClick(e)}></div>
        <div id="right">
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
}

/*

onClick I want to to the cnnected object. 
That object is in an array of objects. 
Could do it the long way, so create a seperate onCLick, OR change the id and use that to determine the object 
in the array!
*/
