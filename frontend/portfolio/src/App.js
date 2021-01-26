import react from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about.component";
import Education from "./components/education.component";
import Experience from "./components/experience.component";
import Skills from "./components/skills.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="flex-container">
        <div class="flex-child green">
          <img alt="" src=".../public/logo192.png" />
          <h2>hey</h2>
        </div>

        <div class="flex-child magenta">
          <About/>
          <Education/>
          <Experience/>
          <Skills/>
        </div>
      </div>
    </div>
  );
}

export default App;
