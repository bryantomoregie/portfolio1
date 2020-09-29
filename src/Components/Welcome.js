import React, { useState, useEffect } from "react";

import "../css/welcome.css";

export default function Welcome() {

 const [greeting, setGreeting] = useState(null);

 const getTime = () => {
    let today = new Date();
    let time = today.getHours();

    if (time <= 11){
        setGreeting("Goodmorning")
    }
    else if (time > 11 && time < 17){
        setGreeting("Goodafternoon")
    } 
    else if (time >= 17){
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
        {/* <h4>- Bryant Omoregie</h4> */}
        <br></br>
        <button className="recruiterButton">Recruiters Click Here</button>
      </div>

      
    </div>
  );
}
