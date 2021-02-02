import React, { Component } from "react";
import "./components.css";
import {
  SiIntellijidea,
  SiGradle,
  SiYarn,
  SiMongodb,
  SiTravisci,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
import { FaAngular, FaJava, FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { DiSpark, DiNpm } from "react-icons/di";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { BiRadioCircleMarked } from "react-icons/bi";
import { VscCircleFilled } from "react-icons/vsc";


export default class Skills extends Component {
  render() {
    return (
      <div id="skills" className="Skills">
        <h1>SKILLS</h1>
        <h3>PROGRAMMING LANGUAGES AND TOOLS</h3>
        <div className="mainSkill">
          <div className="skillz">
            <FaAngular size="50px" />
          </div>
          <div className="skillz">
            <FaJava size="50px" />
          </div>
          <div className="skillz">
            <SiIntellijidea size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <SiGradle size="50px" />
          </div>
          <div className="skillz">
            <SiYarn size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <SiMongodb size="50px" />
          </div>
          <div className="skillz">
            <SiTravisci size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <FaReact size="50px" />
          </div>
          <div className="skillz">
            <FaNode size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <GoMarkGithub size="50px" />
          </div>
          <div className="skillz">
            <SiMysql size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <SiHtml5 size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <FaCss3Alt size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <DiSpark size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <IoLogoJavascript size="50px" />
          </div>
          <div className="skillz">
            {" "}
            <DiNpm size="50px" />
          </div>
        </div>
        <h3> WORKFLOW </h3>
        <ul>
          <li>
            <h5>Agile Development</h5>
          </li>
          <li>
            <h5>Unit Testing</h5>
          </li>
          <li>
            <h5>Responsive Design</h5>
          </li>
        </ul>

        <h2>EXPERIENCE</h2>
        <div className="experience">
          <div className="ex1">
          <div class="vl"></div>
            <BiRadioCircleMarked className="circles" size="30px" />
            <h4>AUTOMATIC MAD LIBS</h4>

            <h5>
              {" "}
              <VscCircleFilled/> Built Angular based Mad libs for a class project that
              automatically generates random stories by picking random words
              from a database. Contributed by designing the database schema and
              implementing it using MySQL
            </h5>
          </div>

          <div className="ex2">
            <BiRadioCircleMarked className="circles" size="30px" />
            <h4>RIDE SHARING APP</h4>
            <h5>
              {" "}
              <VscCircleFilled/> Worked as part of a team in Building a ride sharing app
               that is specially designed for small towns with no UBER and LYFT 
               coverage. Helped in designing and implementing the front end using 
               Angular and TypeScript
            </h5>
          </div>
          <div className="ex3">
            <BiRadioCircleMarked className="circles" size="30px" />
            <h4>TEACHING ASSISSTANT FOR CALCULUS</h4>
            <h5>
              {" "}
              <VscCircleFilled/> Partnered with teacher to plan and implement lessons following school's 
              curriculum, goals, objectives and philosophies. 
             
            </h5>
            <h5>
            <VscCircleFilled/> Assisted teachers with classroom 
              management and document coordination to maintain positive learning environment.
            </h5>
          </div>
          <div className="ex4">
            <BiRadioCircleMarked className="circles" size="30px" />
            <h4>COMPUTER SCIENCE TUTOR</h4>
            <h5>
              {" "}
              <VscCircleFilled/> Conducted tutorial services for students to provide academic support in  Fundamentals of Programming, Data Structures, and Software Design and Development
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
