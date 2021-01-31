import React, { Component } from "react";
import "./components.css";
import Project1 from "../project1.png";
import Project2 from "../project2.png";

export default class Experience extends Component {
  render() {
    return (
      <div id="projects" className="Projects">
        <h1>PROJECTS</h1>
        <div className="grid-container">
          <div className="grid-item">
            <h6>RIDE SHARING APP</h6>
            <a href= "https://github.com/ananyateklu/panic">
              <img src={Project1} alt="p1" />
              </a>

              </div>
          <div className="grid-item">
          <h6>EXPENSE TRACKER</h6>
            <a href= "https://github.com/ananyateklu/expense-tracker"><img src={Project2} alt="p2" /></a></div>
          
        </div>
      </div>
    );
  }
}
