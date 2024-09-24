import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best learning experience.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Contact Us</h5>
            <p>Email: info@learningplatform.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
