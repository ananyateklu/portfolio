import React, { Component } from "react";
import "./components.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <div className="mycont">
          <h1 className="name"> ANANYA </h1>
          <h1 className="last">TEKLU</h1>
          <div>
            <h5>
              Bachelor's Degree in Computer Science looking to leverage my
              experience building responsive and scalable web apps to solve
              interesting problems that help end-users.
            </h5>
            <div className="Icondiv">
              <a href="https://github.com/ananyateklu">
                <GitHubIcon />
              </a>
            </div>
            <div className="Icondiv">
              <a href="https://www.linkedin.com/in/ananya-teklu-37b5b2154/">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
