import React, { Component } from 'react'

//Styles
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
        <nav>
            <ul className="navigation">                 
                <li><a className="navBarStyle" href="#races">Upcoming Races</a></li>
                <li><a className="navBarStyle" href="#rides">Group Rides</a></li>
                <li><a className="navBarStyle" href="#recentraces">Recent Races</a></li>
                <li><a className="navBarStyle" href="#about">About</a></li>
                {/* MODAL FIX */}
                {/* <li><a className="navBarStyle" onClick="onModalClicked()">Contact</a></li> */}
            </ul>            		
        </nav>
    )
  }
}
