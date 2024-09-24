import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaUsers, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../assets/css/Statistics.css'; // Custom CSS for styling

import Amazon from '../../assets/images/amzon.png';
import Google from '../../assets/images/google.png';
import micro from '../../assets/images/micro.png';
import facebook from '../../assets/images/facebook.png';

// Company logos (replace paths with actual logo paths)
const companies = [
  { name: 'Google', logo: Google },
  { name: 'Amazon', logo: Amazon},
  { name: 'Microsoft', logo: micro},
  { name: 'Facebook', logo:  facebook},
];

// Statistics for counts
const statistics = [
  { label: 'Courses Available', value: 120, suffix: '+', icon: <FaBook size={50} /> },
  { label: 'Active Users', value: 5000, suffix: '+', icon: <FaUsers size={50} /> },
  { label: 'Certified Instructors', value: 200, suffix: '+', icon: <FaChalkboardTeacher size={50} /> },
  { label: 'Certificates Issued', value: 1500, suffix: '+', icon: <FaCertificate size={50} /> },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="statistics" ref={ref}>
      <Container fluid>
        {/* Company Logos Section */}
        <h2 className="text-center text-black pb-5">Our Collaborators</h2>
        <Row className="mb-5">
          {companies.map((company, index) => (
            <Col md={3} key={index} className="text-center mb-4">
              <img src={company.logo} alt={`${company.name} logo`} style={{ maxWidth: '100px', marginBottom: '15px' }} />
              <h3 className="text-black">{company.name}</h3>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Statistics Section */}
      <h2 className="text-center text-black">Our Statistics</h2>
      <div className='stat'> 
        <Row className="text-center justify-content-center">
          {statistics.map((stat, index) => (
            <Col md={3} key={index} className="mb-4">
              <div className="icon-container mb-3" style={{ color: '#fff' }}>
                {stat.icon}
              </div>
              <h3 className="text-white">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  '0'
                )}
                {stat.suffix}
              </h3>
              <p className="text-white">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Statistics;
