import React, { useState, useRef } from "react";
import shoePhoto from '../images/shoe-palace.png'
import itniPhoto from '../images/itni.png'
import portfolioPhoto from '../images/portfolio.png'

import "../css/project.css";
import {
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

export default function Projects() {

  let obj = {
    itni: {
      image: itniPhoto,
      title: "ITNI (Social Media)",
      sentenceOne:
        "Online polarization is having detrimental effects on our society. We seem less and less capable of having civil discussions around controversial and person topics. ITNI is designed to be a space where humans with good hearts and curious minds can gather together and have quality conversations about the most important issues of our time.",
      ytlink: "https://www.youtube.com/watch?v=SSnwMdVVbt8",
      ghlink: "https://github.com/bryantomoregie/ITNI-Mod-5",
    },

    shoepalace: {
      image: shoePhoto,
      title: "Shoe Palace (E-Commerce)",
      sentenceOne: "Shoe Palace is designed to be a one stop shop for both customers and sellers. This site was built with two friends durign my time at Flatiron School. This was also my first full stack React application.",
      ytlink: "https://www.youtube.com/watch?v=CD5ojdO9-f0&t=25s",
      ghlink: "https://github.com/bryantomoregie/Project-4",
    },

    portfolio: {
      image: portfolioPhoto,
      title: "Project Portfolio",
      sentenceOne:
        "This portfolio was made with love for your viewing pleasure. This is the first website I've ever deployed, and I'm super proud. This place will be the home of all of my future projects so bookmark this site, and stay updated. ",
      ytlink: "https://www.youtube.com/channel/UCQNT9bbPe3ToBgrztaSU6mA/featured?view_as=subscriber",
      ghlink: "https://github.com/bryantomoregie/portfolio1",
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
      <h1 id="project-header">Projects</h1>
      <div class="projects-container" id="projects">
        <div>
          <div style={{ backgroundImage: `url(${project.image})`}} class="hello">

          </div>
          <div class="links">
            <a href={project.ghlink} target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href={project.ytlink} target="_blank" rel="noopener noreferrer">
              <AiFillYoutube />
            </a>
          </div>
        </div>
        <div class="goodbye">
          <h1>{project.title}</h1>
          <p id="first">{project.sentenceOne}</p>
        </div>
      </div>

      <div className="scroll">
        <div ref={itni} className="preview" id="itni" onClick={(e) => handleClick(e)}></div>
        <div ref={shoepalace} className="preview" id="shoepalace" onClick={(e) => handleClick(e)}></div>
        <div ref={portfolio} className="preview" id="portfolio" onClick={(e) => handleClick(e)}></div>     
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
