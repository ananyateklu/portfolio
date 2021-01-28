import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";
import About from "./components/about.component";
import Education from "./components/education.component";
import Projects from "./components/projects.component";
import Skills from "./components/skills.component"
import { GiHamburgerMenu } from "react-icons/gi"
import Photo from "./photo.jpg"
import "./App.css"
import { Component } from "react"



export default class App extends Component {

    constructor() {
      super()

      this.state = {
        mobile: false,
      }

    }

    expandNav() {
      this.setState({mobile: !this.state.mobile})

    }

  render() {
    const tab_class = this.state.desktop ? "none" : "block";
  
    return (
      <div className="App">
        <div className="flex-container">
          <div  className="flex-child green">
            <img src={Photo} alt="myphoto"  />
            <div className="Burger" ><GiHamburgerMenu onClick={() => this.expandNav()} size="40px"/></div>
            <div className="linkdiv" style={{display : tab_class}} >
              <Router>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  className= "links"

                >
                  ABOUT
                </Link>
                <Link className="links" to="education"  spy={true} smooth={true}>
                  EDUCATION
                </Link>
                <Link className="links" to="projects"  spy={true} smooth={true}>
                  PROJECTS
                </Link>
                <Link className="links" to="skills"  spy={true} smooth={true}>
                  SKILLS
                </Link>
              </Router>
            </div>
          </div>
  
          <div className="flex-child magenta">
            <About />
            <hr />
            <Education />
            <hr />
            <Projects />
            <hr />
            <Skills />
          </div>
        </div>
      </div>
    );

  }
  
}

