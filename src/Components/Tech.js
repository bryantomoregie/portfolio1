import React from "react";
import "../css/tech.css";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";

import { FaCss3, FaReact } from "react-icons/fa";
import { DiRuby, DiVisualstudio, DiJavascript1 } from "react-icons/di";
import SiRails from "react-icons/si";


let TechRow1 = [
  {
    logo: AiOutlineHtml5,
    label: "HTML"
  },
  {
    logo: FaCss3,
    label: "CSS"
  },
  {
    logo: DiJavascript1,
    label: "JavaScript"
  }

]
let TechRow2 = [
{
  logo: FaReact,
  label: "React"
},
{
  logo: DiRuby,
  label: "Ruby"
},
{
  logo: AiFillGithub,
  label: "Github"
},
{
  logo: DiVisualstudio,
  label: "VisualStudio"
}]


export default function Tech() {
  return (
    <div id="tech" className="container">
 
      <div className="row" id="top-row">
        <div>Logo</div>
        <div>Label</div>
      </div>

      <div className="row" id="bottom-row">
        <div>Logo</div>
        <div>Label</div>
      </div>

      <div className="technology">Technology</div>
    </div>
  );
}
