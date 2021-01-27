import react from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/about.component";
import "bootstrap"
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
            <Link className="links" to="/">
              ABOUT
            </Link>
            <Link className="links" to="/education">
              EDUCATION
            </Link>
            <Link className="links" to="/projects">
              PROJECTS
            </Link>
            <Link className="links" to="/Skills">
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
