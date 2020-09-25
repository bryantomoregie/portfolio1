import React from 'react';
import '../css/buttons.css';
import { Link } from "react-router-dom";

export default function NavButtons(){
    return(
        <ul>
        <Link to="/">
        <button className="button">Welcome</button>
        </Link>
         <Link to="/projects">
         <button className="button">Projects</button>
        </Link>
         <Link to="/tech">
         <button className="button">Tech</button>
        </Link>
         <Link to="/connect">
         <button className="button">Connect</button>
        </Link>
        </ul>
    )
}


/*
CSS can be added to navbar css
Create 3 buttons, import this component into navbar, that way we keep the css as is
*/