import React, { Component } from "react"
import "./components.css";
import { SiIntellijidea, SiGradle,SiYarn, SiMongodb, SiTravisci, SiMysql, SiHtml5,  } from "react-icons/si"
import { FaAngular, FaJava, FaReact, FaNode, FaCss3Alt} from "react-icons/fa"
import { DiSpark, DiNpm } from "react-icons/di"
import { GoMarkGithub } from "react-icons/go"
import { IoLogoJavascript } from "react-icons/io"


export default class Skills extends Component {
  render() {
    return (
      <div id="skills" className="Skills">
        <h1>SKILLS</h1>
        <h3>PROGRAMMING LANGUAGES AND TOOLS</h3>
        <div className="mainSkill"> 
            <div className="skillz">< FaAngular size="50px"/></div>
            <div className="skillz"><FaJava size="50px"/></div>
            <div className="skillz"><SiIntellijidea size="50px"/></div>
            <div className="skillz"> <SiGradle size="50px"/></div>
            <div className="skillz"><SiYarn size="50px"/></div>
            <div className="skillz"> <SiMongodb size="50px"/></div>
            <div className="skillz"><SiTravisci size="50px"/></div>
            <div className="skillz"> <FaReact size="50px"/></div>
            <div className="skillz"><FaNode size="50px"/></div>
            <div className="skillz"> <GoMarkGithub size="50px"/></div>
            <div className="skillz"><SiMysql size="50px"/></div>
            <div className="skillz"> <SiHtml5 size="50px"/></div>
            <div className="skillz"> <FaCss3Alt size="50px"/></div>
            <div className="skillz"> <DiSpark size="50px"/></div>
            <div className="skillz"> <IoLogoJavascript size="50px"/></div>
            <div className="skillz"> <DiNpm size="50px"/></div>
           
        </div>
        <h3> WORKFLOW </h3>
        <ul>
          <li><h5>Agile Development</h5></li>
          <li><h5>Unit Testing</h5></li>
          <li><h5>Responsive Design</h5></li>
        </ul>
          
        
      </div>
    );
  }
}
