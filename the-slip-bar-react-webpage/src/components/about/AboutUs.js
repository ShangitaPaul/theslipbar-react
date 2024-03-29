import React, { Component } from "react";
import COMPANY_DESCRIPTION from "../../data/companyDescription";

class AboutUs extends Component {
  render() {
    return (
      <div className='container'>
        <div className='af-black text-center my-3'>{COMPANY_DESCRIPTION}</div>
      </div>
    );
  }
}

export default AboutUs;