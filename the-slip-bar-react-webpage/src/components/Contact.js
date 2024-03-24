import React, { useState } from "react";

const Contact = () => {
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: ""
  });

  const handleFirstNameChange = event => {
    setState({ ...state, firstName: event.target.value });
  };

  const handleLastNameChange = event => {
    setState({ ...state, lastName: event.target.value });
  };

  const handleEmailChange = event => {
    setState({ ...state, email: event.target.value });
  };

  const handlePhoneNumberChange = event => {
    setState({ ...state, phone: event.target.value });
  };

  const handleMessageChange = event => {
    setState({ ...state, message: event.target.value });
  };

  const handleSubmit = event => {
    console.log("submitted");
    event.preventDefault();
  };

  return (
    <div>
      <h3 className='text-center mt-3'>Contact us</h3>
      <h5 className='font-italic text-center'>
        *For table reservations and other questions, please fill out the
        complete form
      </h5>
      <form onSubmit={handleSubmit} className='mt-5' action=''>
        <div className='form-group w-50 mx-auto'>
          <label htmlFor='firstName'>First Name</label>
          <input
            onChange={handleFirstNameChange}
            value={state.firstName}
            type='text'
            className='form-control'
            id='firstName'
          />
        </div>
        <div className='form-group w-50 mx-auto'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            onChange={handleLastNameChange}
            value={state.lastName}
            type='text'
            className='form-control'
            id='lastName'
          />
        </div>
        <div className='form-group w-50 mx-auto'>
          <label htmlFor='email'>Email Address</label>
          <input
            onChange={handleEmailChange}
            value={state.email}
            type='email'
            className='form-control'
            id='email'
          />
        </div>
        <div className='form-group w-50 mx-auto'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            onChange={handlePhoneNumberChange}
            value={state.phone}
            type='tel'
            className='form-control'
            id='phoneNumber'
          />
        </div>
        <div className='form-group w-50 mx-auto'>
          <label htmlFor='message'>Message</label>
          <textarea
            onChange={handleMessageChange}
            value={state.message}
            type='tel'
            className='form-control'
            id='message'
            rows='7'
          ></textarea>
          <button type='submit' className='btn btn-primary mt-4 px-5'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
