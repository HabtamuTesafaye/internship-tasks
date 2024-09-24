import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyCoursesPage from './pages/MyCoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner'; // Import the loading spinner

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay to showcase the loader (in a real app, this can depend on data loading, etc.)
  useEffect(() => {
    // Simulate a fake loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show spinner for 2 seconds, you can adjust this

    return () => clearTimeout(timer);
  }, []);

  // If the page is still loading, display the spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

const PageLayout = ({ children }) => {
  const location = useLocation();

  // List of routes where the Navbar and Footer should not be shown
  const hideNavbarAndFooterRoutes = ['/login', '/'];

  // Check if current route is in the list to hide the Navbar and Footer
  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbarAndFooter && <MyNavbar />}
      {children}
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
