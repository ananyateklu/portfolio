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
        white: false
      }

    }

    expandNav() {
      this.setState({white: !this.state.white})
      console.log(this.state.white)

    }

  render() {
    const tab_class = this.state.white ? "block" : "none";
    console.log(tab_class)
    console.log(this.state.white ,"a")
    return (
      <div className="App">
        <div className="flex-container">
          <div  className="flex-child green">
            <img src={Photo} alt="myphoto"  />
            <div className="Burger" onClick={() => this.expandNav()} ><GiHamburgerMenu size="40px"/></div>
            <div className="linkdiv" style={{display : tab_class}} >
              <Router>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  onClick={() => this.expandNav()}
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

