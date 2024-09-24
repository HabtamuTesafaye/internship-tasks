import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFlask, FaPalette, FaBook, FaChalkboardTeacher, FaBusinessTime, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'; 
import { GiEarthAmerica, GiMedicalDrip, GiBookshelf, GiSoccerBall } from 'react-icons/gi'; 
import '../../assets/css/CourseCategories.css'; // Import the CSS file for styling

const allCategories = [
  { name: 'Mathematics', icon: <FaChalkboardTeacher size={60} />, description: 'Explore fundamental concepts and advanced theories in mathematics.' },
  { name: 'Science', icon: <FaFlask size={60} />, description: 'Dive into the world of scientific inquiry and research.' },
  { name: 'Humanities', icon: <FaBook size={60} />, description: 'Understand human culture, history, and philosophy.' },
  { name: 'Social Sciences', icon: <FaChalkboardTeacher size={60} />, description: 'Study the dynamics of human behavior and societies.' },
  { name: 'Technology', icon: <FaLaptopCode size={60} />, description: 'Learn about the latest advancements in technology and innovation.' },
  { name: 'Arts', icon: <FaPalette size={60} />, description: 'Express creativity through various forms of art and design.' },
  { name: 'Business', icon: <FaBusinessTime size={60} />, description: 'Acquire skills in management, marketing, and entrepreneurship.' },
  { name: 'Health Sciences', icon: <GiMedicalDrip size={60} />, description: 'Study various aspects of health and medical sciences.' },
  { name: 'Engineering', icon: <FaGraduationCap size={60} />, description: 'Learn the principles of engineering and its applications.' },
  { name: 'Environmental Studies', icon: <GiEarthAmerica size={60} />, description: 'Understand environmental issues and sustainable practices.' },
  { name: 'Information Systems', icon: <GiBookshelf size={60} />, description: 'Explore the role of information systems in modern organizations.' },
  { name: 'Communication Studies', icon: <GiBookshelf size={60} />, description: 'Study the art and science of effective communication.' },
  { name: 'Law', icon: <FaBook size={60} />, description: 'Learn about legal systems, regulations, and principles.' },
  { name: 'Education', icon: <FaGraduationCap size={60} />, description: 'Study the methods and practices of teaching and learning.' },
  { name: 'Media Studies', icon: <GiBookshelf size={60} />, description: 'Analyze media content and its impact on society.' },
  { name: 'Ethics', icon: <FaChalkboardTeacher size={60} />, description: 'Explore moral principles and their application in various contexts.' },
  { name: 'Sports Science', icon: <GiSoccerBall size={60} />, description: 'Study the science behind physical activity and sports performance.' },
  { name: 'Hospitality Management', icon: <GiBookshelf size={60} />, description: 'Learn about the hospitality industry and management practices.' },
];

const CourseCategories = () => {
  const itemsPerRow = 5; // Number of items per row
  const initialRows = 1; // Number of initial rows to show
  const minRows = 1; // Minimum number of rows to show when loading less

  // Calculate initial visible count
  const initialVisibleCount = itemsPerRow * initialRows;
  const minVisibleCount = itemsPerRow * minRows;
  
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  
  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + itemsPerRow, allCategories.length));
  };

  // Handle "Load Less" button click
  const handleLoadLess = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount - itemsPerRow;
      // Ensure at least the minimum number of rows is visible
      return newCount >= minVisibleCount ? newCount : minVisibleCount;
    });
  };

  const categoriesToShow = allCategories.slice(0, visibleCount);

  return (
    <section className="course-categories">
      <Container fluid className="h-100 d-flex flex-column">
        <h2 className="text-center mb-4">Course Categories</h2>
        <Row className="flex-grow-1">
          {categoriesToShow.map((category, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center mb-4 category-item">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3 className="mt-2">{category.name}</h3>
              <p className="description">{category.description}</p>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4 button-group">
          {visibleCount < allCategories.length && (
            <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
          )}
          {visibleCount > minVisibleCount && (
            <Button variant="dark" onClick={handleLoadLess}>Load Less</Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CourseCategories;
