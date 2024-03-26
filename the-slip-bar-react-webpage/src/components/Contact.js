import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const socialMediaStyle = { color: '#0d4d9d' }; // Custom style for social media icons and text

  return (
    <div>
      <Container>
        <h1>Get in Touch!</h1>
        <Row>
          <Col md={6}>
            <Row>
              <Col>
                <h2>The Slip Lomita</h2>
                <p>24503 Narbonne Ave.</p>
                <p>Lomita, CA 90717</p>
                <p>Phone: (424) 376-6947</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>The Slip Redondo Beach</h2>
                <p>120 N. International Boardwalk</p>
                <p>Redondo Beach, CA 90277</p>
                <p>Phone: (310) 376-8910</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <h2>Email:</h2>
                <p>info@theslipbar.com</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Social Media:</h2>
                <p>
                  <a href="https://www.facebook.com/theslipbar" target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/theslipbar" target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default Contact;
