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
        mobile: true,
        about: true,
        education: false,
        projects: false,
        skills: false
      }

    }
    componentDidMount() {
      window.addEventListener('scroll', this.scrollAbout)
      window.addEventListener('scroll', this.scrollEducation)
      window.addEventListener('scroll', this.scrollProjects)
      window.addEventListener('scroll', this.scrollSkills)
    }

    scrollAbout = () => {
      if(window.scrollY <= 600) {
        this.setState({about:true})
      }
      else {
        this.setState({about:false})
      }
    }
    scrollEducation = () => {
      if(window.scrollY > 600 && window.scrollY <= 1100) {
        this.setState({education:true})
      }
      else {
        this.setState({education:false})
      }
    }
    scrollProjects = () => {
      if(window.scrollY > 1100 && window.scrollY <= 1900) {
        this.setState({projects:true})
      }
      else {
        this.setState({projects:false})
      }
    }
    scrollSkills = () => {
      if(window.scrollY > 1900 && window.scrollY <= 3800) {
        this.setState({skills:true})
      }
      else {
        this.setState({skills:false})
      }
    }
    
    expandNav() {
      this.setState({mobile: !this.state.mobile})

    }

  render() {
    const tab_class = this.state.mobile ? "none" : "block";
    const about_class = this.state.about ? "linksWhite" : "links";
    const education_class = this.state.education ? "linksWhite" : "links";
    const projects_class = this.state.projects ? "linksWhite" : "links";
    const skills_class = this.state.skills ? "linksWhite" : "links";
  
    return (
      <div className="App">
        <div className="flex-container">
          <div  className="flex-child green">
            <img src={Photo} alt="myphoto"  />
            <div className="Burger" ><GiHamburgerMenu onClick={() => this.expandNav()} size="40px"/></div>
            <div className="linkdiv" >
              <Router>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  className= {about_class}

                >
                  ABOUT
                </Link>
                <Link className= {education_class} to="education"  spy={true} smooth={true}>
                  EDUCATION
                </Link>
                <Link className={projects_class} to="projects"  spy={true} smooth={true}>
                  PROJECTS
                </Link>
                <Link className={skills_class} to="skills"  spy={true} smooth={true}>
                  SKILLS
                </Link>
              </Router>
            </div>
            <div className="linkdivtwo" style={{display : tab_class}} >
              <Router className="router">
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
         
            <Education />
        
            <Projects />

            <Skills />
          </div>
        </div>
      </div>
    );

  }
  
}

