import react from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/about.component";
import Education from "./components/education.component";
import Experience from "./components/experience.component";
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
            <Link className="links" to="/experience">
              EXPERIENCE
            </Link>
            <Link className="links" to="/Skills">
              SKILLS
            </Link>
          </Router>

          </div>
         
        </div>

        <div className="flex-child magenta">
          <About />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
