import React from "react";
import {image} from "/home/ekta/Development/code/phase-2/react-hooks-import-export-lab/src/data/user.js";
// import About from "/home/ekta/Development/code/phase-2/react-hooks-import-export-lab/src/components/About.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
