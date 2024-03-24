import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import lomitaCarouselImages from "../data/lomitaCarouselImages"; // Ensure correct path
import { Container, Row, Col, Nav } from "react-bootstrap"; // Updated imports
import lomitaMenu1 from "../img/lomitamenupage2.jpg";
import lomitaMenu2 from "../img/lomitamenupage1.jpg"; // Change file extension
import "./Lomita.css";

const Lomita = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tockify.com/browser/embed.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-tockify-script", "embed");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <br>
      </br>

      <h1 style={{ fontFamily: 'Pacifico, cursive', fontSize: '3rem', marginBottom: '0' }}>Lomita</h1>
      <br>
      </br>
      <p>Come on down to your favorite neighborhood bar at The Slip in Lomita!</p>
      
      {/* Navigation Menu */}
  
      <Nav
        defaultActiveKey="#contact"
        className="justify-content-center custom-nav"
      >
        <Nav.Item>
          <Nav.Link href="#contact" className="custom-link">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#menu" className="custom-link">
            Menu
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#events" className="custom-link">
            Events
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='af-height-90 af-max-width mx-auto mt-2 position-relative'>
        <Carousel
          activeIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
          interval={2000} // Set interval to 2 seconds for faster scrolling
        >
          {lomitaCarouselImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={slide.link} alt={slide.title} />
              <div className="carousel-caption position-absolute">
                <div className="af-position-lg af-bg-dark-transparent py-3">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="py-6" id="contact">
        {" "}
        {/* Added id for scrolling */}
        <Row>
          <Col md={6}>
            <h3 style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem', marginBottom: '20px' }}>Hours of Operation</h3>
            <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
            <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
            <p>Sunday: 10:00 AM - 9:00 PM</p>
          </Col>
          <Col md={6}>
            <h3 style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem', marginBottom: '10px' }}>Contact</h3>
            <p>Phone:</p>
            <p> (310) 123-4567</p>
            <p>Address:</p>
            <p> 24503 Narbonne Ave, Lomita, CA 90717</p>
            <a
              href="https://www.google.com/maps/dir//24503-Narbonne-Ave,+Lomita,+CA+90717"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" id="menu">
        {" "}
        {/* Added id for scrolling */}
        <h3 style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem', marginBottom: '10px' }}>Menu</h3>
        <Row className="py-5">
          {" "}
          {/* Adjusted padding to reduce space */}
          <Col md={6}>
            <img src={lomitaMenu1} alt="Menu 1" className="img-fluid" />
          </Col>
          <Col md={6}>
            <img src={lomitaMenu2} alt="Menu 2" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container className="py-5" id="events">
         <h3 style={{ fontFamily: 'Pacifico, cursive', fontSize: '2.5rem', marginBottom: '10px' }}>Events</h3>
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="theslipbar"
        ></div>
      </Container>
    </div>
  );
};

export default Lomita;
