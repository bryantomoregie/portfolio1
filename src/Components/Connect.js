import React from "react";
import "../css/connect.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSave,
  AiFillYoutube,
} from "react-icons/ai";

let Connects = [
  {
    logo: <AiOutlineSave />,
    label: "Resume",
  },
  {
    logo: <AiFillLinkedin />,
    label: "LinkedIn",
  },
  {
    logo: <AiFillGithub />,
    label: "Github",
  },
  {
    logo: <AiFillYoutube />,
    label: "YouTube",
  },
];

export default function Connect() {
  return (
    <div id="connect" className="contact-container">
      <div className="connect-row" i>
        {Connects.map((tech) => (
          <div className="connect-card">
            <div className="connectlogo">{tech.logo}</div>
            <div className="connect-name">{tech.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
