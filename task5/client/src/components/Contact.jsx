import React from 'react';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import contact from '../assets/images/contact.jpg'; // Importing the contact image

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={8}>
          <Card className="shadow-lg">
            <Row className="g-0">
              {/* Left Side - Image */}
              <Col md={6}>
                <Image 
                  src={contact} 
                  alt="Contact Us" 
                  fluid 
                  className="h-100 w-100" 
                  style={{ objectFit: 'cover' }}
                />
              </Col>

              {/* Right Side - Form */}
              <Col md={6} className="d-flex align-items-center">
                <Card.Body>
                  <h3 className="mb-4">Get in Touch</h3>
                  <Form style={{ maxWidth: '90%' }}> {/* Added maxWidth to form */}
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="my-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                    </Form.Group>

                    {/* Centered Button */}
                    <div className="d-flex justify-content-center">
                      <Button variant="primary" type="submit" className="mt-3">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
