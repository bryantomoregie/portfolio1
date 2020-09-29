import React from 'react';
import '../css/buttons.css';
import { Link } from "react-router-dom";

export default function NavButtons(){
    return(
        <ul>
        <a href="#welcome">
        <button className="button">Welcome</button>
        </a>
         <a href="#projects">
         <button className="button">Projects</button>
        </a>
         <a href="#tech">
         <button className="button">Tech</button>
        </a>
         <a href="#connect">
         <button className="button">Connect</button>
        </a>
        </ul>
    )
}


/*
CSS can be added to navbar css
Create 3 buttons, import this component into navbar, that way we keep the css as is
*/