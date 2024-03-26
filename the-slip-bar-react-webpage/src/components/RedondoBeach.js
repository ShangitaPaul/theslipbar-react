import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav } from "react-bootstrap";
import redondoBeachCarouselImages from "../data/redondoBeachCarouselImages";
import redondoBeachMenu1 from "../img/redondomenupage1.png";
import redondoBeachMenu2 from "../img/redondomenupage1.jpg";
import "./RedondoBeach.css";

const RedondoBeach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(null);

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
    <div className="Redondo Beach">
      <h6>The Slip Bar</h6>
      <h4>Redondo Beach</h4>

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
      
      <div className='af-height-90 af-max-width mx-auto mt-2 position-relative'>
        <Carousel
          activeIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
          interval={2000} // Set interval to 2 seconds for faster scrolling
        >
          {redondoBeachCarouselImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={slide.link} alt={slide.title} />
              <div className="carousel-caption position-absolute">
                <div className="af-position-lg af-bg-dark-transparent py-5">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="py-7" id="contact">
        <h5>Contact</h5>
        <Row>
          <Col md={4}>
            <h2>Hours of Operation</h2>
            <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
            <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
            <p>Sunday: 10:00 AM - 9:00 PM</p>
          </Col>
          <Col md={4}>
            <h2>Address</h2>
            <p>120 N International Boardwalk</p>
            <p>Redondo Beach, CA 90277</p>
            <a href="https://www.google.com/maps/dir//120+N+International+Boardwalk+Redondo+Beach,+CA+90277" rel="noreferrer">Get Directions</a>
          </Col>
          <Col md={4}>
            <h2>Contact Information</h2>
            <p>Phone: (310) 921-8940</p>
            <p>Email: <a href="mailto:info@theslipbar.com">info@theslipbar.com</a></p>
          </Col>
        </Row>
      </Container>

      <Container id="menu">
        <h5>Menu</h5>
        <Row>
          <Col md={12} style={{ width: carouselWidth }}>
            {redondoBeachMenu1 && (
              <img
                src={redondoBeachMenu1}
                alt="Menu Page 1"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 1:", e)}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ width: carouselWidth }}>
            {redondoBeachMenu2 && (
              <img
                src={redondoBeachMenu2}
                alt="Menu Page 2"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 2:", e)}
              />
            )}
          </Col>
        </Row>
      </Container>

      <Container className="py-7" id="events">
        <h5>Events</h5>
        <div
          data-tockify-component="calendar"
          data-tockify-calendar="theslipbar"
        ></div>
      </Container>
    </div>
  );
};

export default RedondoBeach;
