import React, { Component } from "react";
import "./components.css";
import Project1 from "../project1.png";
import Project2 from "../project2.png";

export default class Experience extends Component {
  render() {
    return (
      <div id="projects" className="Projects">
        <h1>PROJECTS</h1>
        <div class="grid-container">
          <div class="grid-item"><img src={Project1} alt="p1" /></div>
          <div class="grid-item"><img src={Project2} alt="p2" /></div>
         
        </div>
      </div>
    );
  }
}
