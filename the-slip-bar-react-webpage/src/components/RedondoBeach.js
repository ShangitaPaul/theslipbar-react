import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import redondoBeachCarouselImages from "../data/redondoBeachCarouselImages"; // Ensure correct path
import { Container, Row, Col, Nav } from "react-bootstrap"; // Updated imports
import redondoBeachMenu1 from "../img/redondomenupage1.png";
import redondoBeachMenu2 from "../img/redondomenupage1.jpg"; // Change file extension

import "./RedondoBeach.css";

const RedondoBeach = () => {
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
    <div style={{ padding: "20px" }}>
      <h1>Redondo Beach</h1>
      <p>Enjoy the sights and sounds of the Redondo Beach Pier while dining at The Slip!</p>
      
      {/* Navigation Menu */}
      <Nav defaultActiveKey="#contact" className="justify-content-center custom-nav">
        <Nav.Item>
          <Nav.Link href="#contact" className="custom-link">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#menu" className="custom-link">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#events" className="custom-link">Events</Nav.Link>
        </Nav.Item>
      </Nav>

      <Carousel
        activeIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
        interval={2000} // Set interval to 2 seconds for faster scrolling
      >
        {redondoBeachCarouselImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={slide.link} alt={slide.title} />
            <div className="carousel-caption position-absolute">
              <div className="af-position-lg af-bg-dark-transparent py-7">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container id="contact">
        <Row>
          <Col md={6}>
            <h3>Hours of Operation</h3>
            <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
            <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
            <p>Sunday: 10:00 AM - 9:00 PM</p>
          </Col>
          <Col md={6}>
            <h3>Contact</h3>
            <p>Phone:</p>
            <p>(310) 123-4567</p>
            <p>Address:</p>
            <p>120 N International Boardwalk, Redondo Beach, CA 90277</p>
            <a
              href="https://www.google.com/maps/dir//120+N+International+Boardwalk,+Redondo+Beach,+CA+90277"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </Col>
        </Row>
      </Container>

      <Container id="menu">
        <h3>Menu</h3>
        <Row>
          <Col md={6}>
            <img src={redondoBeachMenu1} alt="Menu 1" className="img-fluid" />
          </Col>
          <Col md={6}>
            <img src={redondoBeachMenu2} alt="Menu 2" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container id="events">
        <h3>Events</h3>
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="theslipbar"
        ></div>
      </Container>
    </div>
  );
};

export default RedondoBeach;
