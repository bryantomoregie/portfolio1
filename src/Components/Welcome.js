import React, { useState, useEffect } from "react";

import "../css/welcome.css";

export default function Welcome() {

 const [greeting, setGreeting] = useState(null);

 const getTime = () => {
    let today = new Date();
    let time = today.getHours();

    if (time >= 5 && time <= 11){
        setGreeting("Goodmorning")
    }
    else if (time > 11 && time < 17){
        setGreeting("Goodafternoon")
    } 
    else if (time >= 17 || time <= 4){
        setGreeting("Goodevening")
    } 
 };

 useEffect(() => {
    getTime()
 })

  return (
    <div id="welcome" className="welcome" >
      <div className="text">
        <h2> {`${greeting},`}</h2>
        <h2>friend.</h2>
        <h3>Enjoy your stay.</h3>
        <h4>- Bryant Omoregie</h4>
        <br></br>
        <a href="https://drive.google.com/file/d/1i7KC9PmBJZfNSX9W5wIEUVAF6jst6sXw/view?usp=sharing" target="_blank">
        <button className="recruiterButton">Recruiters Click Here</button>
        </a>
      </div>

      
    </div>
  );
}
