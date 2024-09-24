import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import course images
import Algebra from '../../assets/images/algebra.jpg';
import Biology from '../../assets/images/biology.jpg';
import DataScience from '../../assets/images/dataScience.jpg';
import Economics from '../../assets/images/economics.jpg';
import GraphicsDesign from '../../assets/images/graphics.jpg';
import History from '../../assets/images/history.jpg';
import Marketing from '../../assets/images/marketing.jpg';
import Psychology from '../../assets/images/psychology.jpg';

const courses = [
  { title: 'Algebra', image: Algebra, description: 'Learn the fundamentals of algebra with interactive lessons and exercises.' },
  { title: 'Biology', image: Biology, description: 'Explore the principles of biology and understand the complexity of living organisms.' },
  { title: 'Data Science', image: DataScience, description: 'Master data analysis, visualization, and machine learning techniques.' },
  { title: 'Economics', image: Economics, description: 'Understand economic theories and their application to real-world problems.' },
  { title: 'Graphics Design', image: GraphicsDesign, description: 'Develop skills in visual communication and graphic design using industry-standard tools.' },
  { title: 'History', image: History, description: 'Study historical events and their impact on the modern world.' },
  { title: 'Marketing', image: Marketing, description: 'Learn effective marketing strategies and tools to grow your business.' },
  { title: 'Psychology', image: Psychology, description: 'Delve into human behavior and mental processes with scientific methods.' },
];

const PopularCourses = () => {
  const [visibleCourses, setVisibleCourses] = useState(courses.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % courses.length;
        const newVisibleCourses = [
          ...visibleCourses.slice(1),
          courses[newIndex],
        ];
        setVisibleCourses(newVisibleCourses);
        return newIndex;
      });
    }, 3000); // 3-second interval

    return () => clearInterval(intervalId);
  }, [visibleCourses]);

  return (
    <section className="popular-courses" style={{ width: '100vw', overflow: 'hidden' }}>
      <Container fluid className="p-0 m-0">
        <h2 className="text-center mb-4">Popular Courses</h2>
        <Row className="justify-content-center no-gutters">
          {visibleCourses.map((course, i) => (
            <Col key={i} xs={12} sm={6} md={3} lg={2} className="mb-3 p-0">
              <div style={{ width: '100%', padding: '0 10px' }}>
                <img
                  className="d-block w-100"
                  src={course.image}
                  alt={course.title}
                  style={{
                    borderRadius: '8px',
                    objectFit: 'cover',
                    height: '300px', // Set a specific height for the images
                    width: '100%',
                  }}
                />
                <h5 className="text-center mt-2">{course.title}</h5>
                <p className="text-center mt-1" style={{ fontSize: '0.875rem', color: '#6c757d' }}>{course.description}</p>
                <div className="text-center mt-2">
                  <a href="#" className="btn btn-primary btn-sm">Learn More</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCourses;
