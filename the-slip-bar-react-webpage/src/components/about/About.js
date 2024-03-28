import React, { Component } from "react";
import { MEMBERS } from "../../data/team";
import AboutUs from "./AboutUs";
import "./About.css"; // Import the CSS file

class About extends Component {
  constructor() {
    super();

    this.state = {
      members: MEMBERS
    };
  }

  render() {
    return (
      <div>
        <img
          src='/img/slipiglogo.png'
          alt='The Slip'
          className="logo"
        />
        <AboutUs members={this.state.members} />
      </div>
    );
  }
}

export default About;
