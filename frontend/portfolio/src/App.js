import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";
import About from "./components/about.component";
import Education from "./components/education.component";
import Projects from "./components/projects.component";
import Skills from "./components/skills.component"
import Photo from "./photo.jpg"
import "./App.css"
import { Component } from "react"



export default class App extends Component {

    constructor() {
      super()

      this.state = {
        white: false
      }

    }

    changeColor() {
      this.setState({white: !this.state.white})

    }

  render() {
    const tab_class = this.setState.white ? "linksbold" : "links";

    return (
      <div className="App">
        <div className="flex-container">
          <div  className="flex-child green">
            <img src={Photo} alt="myphoto"  />
            <div className="linkdiv"  >
              <Router>
                <Link
                  activeClass="active"
                  className={tab_class}
                  to="about"
                  spy={true}
                  smooth={true}
                  onClick={() => this.changeColor()}
                  

                >
                  ABOUT
                </Link>
                <Link className={tab_class} to="education" onClick={() => this.changeColor()} spy={true} smooth={true}>
                  EDUCATION
                </Link>
                <Link className={tab_class} to="projects" onClick={() => this.changeColor()} spy={true} smooth={true}>
                  PROJECTS
                </Link>
                <Link className={tab_class} to="skills" onClick={() => this.changeColor()} spy={true} smooth={true}>
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

