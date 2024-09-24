import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/IntroSection.css'; // Import the CSS file for styling
import coverImage from '../../assets/images/cover1.jpg'; // Import the image

const IntroSection = () => {
  return (
    <section className="intro-section">
      <Container fluid className="h-100 m-0">
        <Row className="align-items-center h-100">
          <Col md={5} className="text-container">
            <h1>Welcome to Our Learning Platform</h1>
            <p>
              Unlock your potential with our curated courses designed to inspire, educate, and elevate your skills. Join a community of learners and start your journey to success today.
            </p>
          </Col>
          <Col md={7} className="image-container">
            <div className="placeholder-image">
              <img src={coverImage} alt="Cover" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;
