import React , { Component } from 'react'
import "./components.css"


export default class Education extends Component {
    render() {
        return (
            <div id="education" className="Education">
            <h1>EDUCATION</h1>
            <div className="work">
            <h3 >UNIVERSITY OF MINNESOTA MORRIS</h3>
            <h4> August 2017  -  December 2020</h4>
            </div>
            <h3 className="bach">BACHELOR OF ARTS</h3>
            <h5>Computer Science</h5>
            <h5> Cumulative GPA: 3.4</h5>
            <h5> Major GPA: 3.7</h5>

        </div>
        )
    }
}