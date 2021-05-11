import React, { Component } from "react";
import "./components.css";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import GitHubIcon from "@material-ui/icons/GitHub";

export default class Experience extends Component {
  render() {
    return (
      <div id="projects" className="Projects">
        <h1>PROJECTS</h1>
        <div className="grid-container">
          <div className="grid-item">
            <a href="https://github.com/ananyateklu/panic">
              <img className="firstp" src={Project1} alt="p1" />
              <img className="firstp2" src={Project4} alt="p1" />
              <h5>RIDE SHARING APP</h5>
              <h6>
                Moride is a ride sharing web application for connecting Morris,
                Minnesota community members who want carpool to a given
                destination.
              </h6>
            </a>
            <div className="Gitc">
              <a href="https://github.com/UMM-CSci-3601-S19/panic">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <a href="https://github.com/ananyateklu/expense-tracker">
              <img className="griditemimg" src={Project2} alt="p2" />
              <h5>EXPENSE TRACKER</h5>
              <h6>
                Personal expense tracker built for personal use. Features
                include showing expenses in a list view and with a chart, Adding
                expenses, and filtering expenses with date.
              </h6>
            </a>
            <div className="Gitc">
              <a href="https://github.com/ananyateklu/expense-tracker-2.0">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <a href="https://divinecaremn.org">
              <img className="thirdP" src={Project3} alt="p2" />
              <h5>DIVINECARELLC</h5>
              <h6>Website for home-care company Divine Care LLC located in Lakeville Minnesota. 
                (Click picture to go to the page)
                Link:divinecaremn.org
                </h6>
                
            </a>
            <div className="Gitc">
              <a href="https://github.com/ananyateklu/DivineCareLLC">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
