import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../assets/css/admin/adminHome.css';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminHomePage = () => {
  // Dummy data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Users',
        data: [33, 53, 85, 41, 44, 65, 59],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    datasets: [
      {
        label: 'Courses Enrolled',
        data: [50, 70, 90, 40, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const pieChartData = {
    labels: ['Web Development', 'Data Science', 'Design', 'Marketing', 'Others'],
    datasets: [
      {
        data: [300, 50, 100, 80, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const recentlyAddedCourses = [
    { title: 'React for Beginners', date: '2024-09-01' },
    { title: 'Advanced Node.js', date: '2024-08-28' },
    { title: 'CSS Grid Mastery', date: '2024-08-25' },
    { title: 'JavaScript ES6+', date: '2024-08-20' },
    { title: 'Full-Stack Development Bootcamp', date: '2024-08-15' },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container-fluid py-3">
      <h3 className="mb-4">Admin Dashboard</h3>

      <Row>
        {/* Line Chart - User Growth */}
        <Col lg={6} md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>New Users Over Time</Card.Title>
              <Line data={lineChartData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Bar Chart - Course Enrollments */}
        <Col lg={6} md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Top Enrolled Courses</Card.Title>
              <Bar data={barChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Pie Chart - Course Categories */}
        <Col lg={6} md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Course Categories Breakdown</Card.Title>
              <Pie data={pieChartData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Recently Added Courses and Calendar */}
        <Col lg={6} md={12}>
          <Row>
            {/* Recently Added Courses */}
            <Col md={12}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Recently Added Courses</Card.Title>
                  <ListGroup variant="flush">
                    {recentlyAddedCourses.map((course, index) => (
                      <ListGroup.Item key={index}>
                        <strong>{course.title}</strong> - Added on {course.date}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Calendar */}
            <Col md={12}>
              <Card className="mb-4" style={{ height: '100%' }}>
                <Card.Body>
                  <Card.Title>Calendar</Card.Title>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    className="w-100"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AdminHomePage;
