import React, { Component } from "react";
import COMPANY_DESCRIPTION from "../../data/companyDescription";

class AboutUs extends Component {
  render() {
    return (
      <div className='container'>
      <h1 className='text-center my-3' style={{ fontFamily: 'Pacifico', fontSize: '3rem' }}>Our Story</h1>
      <div className='af-black text-center my-3'>{COMPANY_DESCRIPTION}</div>
      </div>
    );
  }
}

export default AboutUs;