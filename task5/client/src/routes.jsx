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
import LoadingSpinner from './components/LoadingSpinner';

// Admin pages and components
import AdminHomePage from './pages/admin/AdminHomePage';
import CoursesPage from './pages/admin/CoursesPage';
import UsersPage from './pages/admin/UsersPage';
import AdminLayout from './components/admin/AdminLayout';
import ContentApprovalPage from './pages/admin/ContentApprovalPage';
import AnalyticsDashboardPage from './pages/admin/AnalyticsDashboardPage';
import PaymentManagementPage from './pages/admin/PaymentManagementPage';
import ReportingToolsPage from './pages/admin/ReportingToolsPage';
import CommunicationToolsPage from './pages/admin/CommunicationToolsPage';
import SupportTicketSystemPage from './pages/admin/SupportTicketSystemPage';
import FeedbackManagementPage from './pages/admin/FeedbackManagementPage';
import SecurityAccessControlPage from './pages/admin/SecurityAccessControlPage';

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay to showcase the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <PageLayout>
        <Routes>
          {/* Non-admin routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin routes */}
          <Route path="/" element={<AdminLayout><AdminHomePage /></AdminLayout>} />
          <Route path="/admin/courses" element={<AdminLayout><CoursesPage /></AdminLayout>} />
          <Route path="/admin/users" element={<AdminLayout><UsersPage /></AdminLayout>} />
          <Route path="/admin/content-approval" element={<AdminLayout><ContentApprovalPage /></AdminLayout>} />
          <Route path="/admin/analytics" element={<AdminLayout><AnalyticsDashboardPage /></AdminLayout>} />
          <Route path="/admin/payments" element={<AdminLayout><PaymentManagementPage /></AdminLayout>} />
          <Route path="/admin/reports" element={<AdminLayout><ReportingToolsPage /></AdminLayout>} />
          <Route path="/admin/communication" element={<AdminLayout><CommunicationToolsPage /></AdminLayout>} />
          <Route path="/admin/support" element={<AdminLayout><SupportTicketSystemPage /></AdminLayout>} />
          <Route path="/admin/feedback" element={<AdminLayout><FeedbackManagementPage /></AdminLayout>} />
          <Route path="/admin/security" element={<AdminLayout><SecurityAccessControlPage /></AdminLayout>} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

const PageLayout = ({ children }) => {
  const location = useLocation();

  // List of routes where the Navbar and Footer should not be shown
  const hideNavbarAndFooterRoutes = ['/login', '/register'];
  const adminRoutes = [
    '/',
    '/admin/courses',
    '/admin/users',
    '/admin/content-approval',
    '/admin/analytics',
    '/admin/payments',
    '/admin/reports',
    '/admin/communication',
    '/admin/support',
    '/admin/feedback',
    '/admin/security'
  ];

  // Check if the current route is in the list to hide the Navbar and Footer
  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(location.pathname) || 
                                    adminRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbarAndFooter && <MyNavbar />}
      {children}
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
