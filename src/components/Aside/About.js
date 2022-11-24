import React, { Component } from 'react'

import './About.css'

export default class About extends Component {
  render() {
    return (
    <section id="about">
        <img className="aboutimage" src="img/logo_transparent.png" alt="logo"/>
        <h2>About Us</h2>
        <p>Greetings, we're a cycling club dedicated to all levels of cyclists, from casual group riders to elite-level cyclists!</p>
        <p>Want to know more? <a href="#">Contact Us.</a></p>
    </section>
    )
  }
}
