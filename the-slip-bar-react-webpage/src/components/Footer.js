import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='af-footer mt-5' style={{ backgroundColor: "#0d4d8d", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}>
          <div className="social-media" style={{ textAlign: "center", marginTop: "10px" }}>
            <a href="https://www.facebook.com/theslipbar" target="_blank" rel="noreferrer">
              <img src="/img/icons8-facebook-50.png" alt="Facebook" style={{ width: "30px", height: "auto", margin: "3px" }} />
            </a>
            <a href="https://www.instagram.com/theslipbar" target="_blank" rel="noreferrer">
              <img
                src="/img/icons8-instagram-50.png"
                alt="Instagram"
                style={{ width: "30px", height: "auto", margin: "3px", marginRight: "0px" }}
              />
            </a>
          </div>
          <div className='text-light text-center py-0'>
            <p>© 2024 The Slip Bar & Eatery. All Rights Reserved.</p>
            <p>Website by:{' '}
              <a href='https://instagram.com/sangitasurfs' target='_blank' rel='noreferrer' style={{ color: "#fff", textDecoration: "none", transition: "text-decoration 0.3s" }}>
                <span onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                  Shangita Paul Media
                </span>
              </a>
            </p>
          </div>
        </div>
        <br />
      </div>  
    );
  }
}

export default Footer;
