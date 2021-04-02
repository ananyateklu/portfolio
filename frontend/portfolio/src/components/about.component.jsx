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
            <h3>2735 RICE STREET, ROSEVILLE, MN 55113 · (517) 505-1226 · </h3>
            <h4 className="Email">ANANYA.TEKLU@GMAIL.COM</h4>
            <h5>
              Versatile Software developer introduces interpersonal
              communication and understanding of web development considerations.
              Excellent organizational skills. Clear understanding of HTML, CSS
              and JavaScript and training in React. Skilled at designing and
              developing sites from concept to roll out. Versatile understanding
              of complex backend data functions and analytics.
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
