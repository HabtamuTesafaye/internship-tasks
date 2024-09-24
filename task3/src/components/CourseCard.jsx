import { Card } from 'react-bootstrap';

const CourseCard = ({ title, image, description }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default CourseCard;
