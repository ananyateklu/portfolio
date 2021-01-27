import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-scroll";
import About from "./components/about.component";
import Education from "./components/education.component";
import Projects from "./components/projects.component";
import Skills from "./components/skills.component";
import Photo from "./photo.jpg";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-child green">
          <img src={Photo} alt="myphoto" />
          <div className="linkdiv">
          <Router>
            <Link activeClass="active" className="links" to="about" spy={true} smooth={true}>
              ABOUT
            </Link>
            <Link className="links" to="education" spy={true} smooth={true}>
              EDUCATION
            </Link>
            <Link className="links" to="projects" spy={true} smooth={true}>
              PROJECTS
            </Link>
            <Link className="links" to="skills" spy={true} smooth={true}>
              SKILLS
            </Link>
          </Router>

          </div>
         
        </div>

        <div className="flex-child magenta">
          <About />
          <hr/>
          <Education />
          <hr/>
          <Projects />
          <hr/>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
