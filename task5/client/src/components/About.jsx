import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher, FaLaptopCode, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to the Learning Platform, your gateway to high-quality online courses that enhance your skills and
            knowledge. Our mission is to empower learners worldwide by offering accessible and engaging education
            in a variety of subjects. Whether you're looking to advance your career, pursue a new passion, or simply
            expand your knowledge, we've got you covered.
          </p>
        </Col>
      </Row>

      {/* Values or Key Features */}
      <Row className="my-5">
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaChalkboardTeacher size={50} className="mb-3" />
              <Card.Title>Expert Instructors</Card.Title>
              <Card.Text>
                Learn from industry professionals with years of experience in their respective fields.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaLaptopCode size={50} className="mb-3" />
              <Card.Title>Hands-on Learning</Card.Title>
              <Card.Text>
                Engage in practical, real-world projects that enhance your learning experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaAward size={50} className="mb-3" />
              <Card.Title>Certifications</Card.Title>
              <Card.Text>
                Earn industry-recognized certificates that help you advance your career and showcase your skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Features */}
      <Row className="my-5">
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaUsers size={50} className="mb-3" />
              <Card.Title>Global Community</Card.Title>
              <Card.Text>
                Join a diverse community of learners from around the world and collaborate on shared projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaLightbulb size={50} className="mb-3" />
              <Card.Title>Innovative Content</Card.Title>
              <Card.Text>
                Stay ahead with the latest trends and technologies with our up-to-date courses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <FaChalkboardTeacher size={50} className="mb-3" />
              <Card.Title>24/7 Access</Card.Title>
              <Card.Text>
                Learn at your own pace with unlimited access to all course materials, anytime, anywhere.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
