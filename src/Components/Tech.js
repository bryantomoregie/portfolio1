import React from "react";
import "../css/tech.css";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";

import { FaCss3, FaReact } from "react-icons/fa";
import { DiRuby, DiVisualstudio, DiJavascript1 } from "react-icons/di";
import SiRails from "react-icons/si";


let TechRow1 = [
  {
    logo: <AiOutlineHtml5/>,
    label: "HTML"
  },
  {
    logo: <FaCss3/>,
    label: "CSS"
  },
  {
    logo: <DiJavascript1/>,
    label: "JavaScript"
  }

]
let TechRow2 = [
{
  logo: <FaReact/>,
  label: "React"
},
{
  logo: <DiRuby/>,
  label: "Ruby"
},
{
  logo: <AiFillGithub/>,
  label: "Github"
},
{
  logo: <DiVisualstudio/>,
  label: "VisualStudio"
}]


export default function Tech() {
  return (
    <div id="tech" className="techcontainer">
 
      <div className="row" id="top-row">
        {TechRow1.map((tech) => 
        <div className="tech-card">
        <div className="tech-logo">{tech.logo}</div>
        <div className="tech-name">{tech.label}</div>
        </div>
        )}
      </div>

      <div className="row" id="bottom-row">
        {TechRow2.map((tech) => 
        <div className="tech-card">
        <div className="tech-logo">{tech.logo}</div>
        <div className="tech-name">{tech.label}</div>
        </div>
        )}
      </div>

      <div className="tech-title">Technology</div> 
    </div>
  );
}
