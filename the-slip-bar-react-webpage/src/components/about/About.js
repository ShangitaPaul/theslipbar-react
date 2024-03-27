import React, { Component } from "react";
import { MEMBERS } from "../../data/team";
import AboutUs from "./AboutUs";

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
          style={{
            width: '50%',
            height: 'auto',
            marginTop: '20px',
      
          }}
        />
        <AboutUs members={this.state.members} />
      </div>
    );
  }
}

export default About;
