import React from "react";
import "../css/connect.css";
import {
  AiFillCheckCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

let Connects = [
  {
    logo: <AiFillCheckCircle />,
    label: "Resume",
    link:
      "https://drive.google.com/file/d/1i7KC9PmBJZfNSX9W5wIEUVAF6jst6sXw/view?usp=sharing",
  },
  {
    logo: <AiFillLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bryant-omoregie-a5aab515b/",
  },
  {
    logo: <AiFillGithub />,
    label: "Github",
    link: "https://github.com/bryantomoregie",
  },
  {
    logo: <AiFillYoutube />,
    label: "YouTube",
    link:
      "https://www.youtube.com/channel/UCQNT9bbPe3ToBgrztaSU6mA/featured?view_as=subscriber",
  },
];

export default function Connect() {
  return (
    <div id="connect" className="connect-container">
      <div className="connect-row" i>
        {Connects.map((tech) => (
          <a href={tech.link} target="_blank" rel="noopener noreferrer">
            <div className="connect-card">
              <div className="connectlogo">{tech.logo}</div>
              <div className="connect-name">{tech.label}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
