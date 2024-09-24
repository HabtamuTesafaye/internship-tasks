import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBook,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaUser
} from 'react-icons/fa';
import logo from '../assets/images/logo2.jpg'; // Adjust path to your logo

const MyNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Simulate checking for logged-in user (fetch from localStorage, etc.)
  useEffect(() => {
    const user = localStorage.getItem('user'); // Simulate user from local storage
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
    navigate('/'); // Redirect to home after registration
  };

  return (
    <>
      {/* Top Navbar for larger screens */}
      <Navbar bg="light" variant="light" expand="lg" className="navbar-custom sticky-top d-none d-lg-flex">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto navbar-text">
              <Nav.Link as={NavLink} to="/home" exact className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/my-courses" className="nav-link-custom">Courses</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          <div className="d-flex ms-auto me-2">
            {loggedInUser ? (
              <NavDropdown
                title={<span><FaUser size={20} className="me-2" />{loggedInUser.firstName}</span>}
                id="basic-nav-dropdown"
                className="profile-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout} >Logout <FaSignOutAlt /></NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Button as={NavLink} to="/login" variant="outline-dark" className="me-2 navbar-button">
                  <FaSignInAlt /> Login
                </Button>
                <Button as={NavLink} to="/" variant="dark" className="navbar-button">
                  <FaUserPlus /> Register
                </Button>
              </>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Bottom Navigation Bar for mobile devices */}
      <div className="bottom-nav d-lg-none">
        <Nav className="justify-content-around">
          <Nav.Link as={NavLink} to="/my-courses" className="bottom-nav-link">
            <FaBook size={24} />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="bottom-nav-link">
            <FaInfoCircle size={24} />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/home" exact className="bottom-nav-link">
            <FaHome size={24} />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="bottom-nav-link">
            <FaEnvelope size={24} />
          </Nav.Link>
          <Nav.Link className="bottom-nav-link">
            <FaBars size={24} onClick={toggleSidebar} />
          </Nav.Link>
        </Nav>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <Nav className="flex-column">
          <Nav.Link as={NavLink} to="/home" exact onClick={toggleSidebar} className="nav-link">
            <FaHome size={15} /><span className="sidebar-text">Home</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/my-courses" onClick={toggleSidebar} className="nav-link">
            <FaBook size={15} /><span className="sidebar-text">Courses</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={toggleSidebar} className="nav-link">
            <FaInfoCircle size={15} /><span className="sidebar-text">About</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={toggleSidebar} className="nav-link">
            <FaEnvelope size={15} /><span className="sidebar-text">Contact</span>
          </Nav.Link>
          {!loggedInUser ? (
            <>
              <Nav.Link as={NavLink} to="/login" onClick={toggleSidebar} className="nav-link">
                <FaSignInAlt size={15} /><span className="sidebar-text">Login</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" onClick={toggleSidebar} className="nav-link">
                <FaUserPlus size={15} /><span className="sidebar-text">Register</span>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={handleLogout} to="/login" className="nav-link">
                <FaSignOutAlt size={15} /><span className="sidebar-text">Logout</span>
              </Nav.Link>
            </>
          )}
        </Nav>
      </div>
    </>
  );
};

export default MyNavbar;
