import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaBook, FaCheck, FaChartBar, FaMoneyBillWave, FaFileAlt, FaBullhorn, FaEnvelope } from 'react-icons/fa';
import '../../assets/css/admin/AdminLayout.css';

const AdminSidebar = ({ isCollapsed }) => {
  return (
    <div className={`admin-sidebar bg-success ${isCollapsed ? 'admin-collapsed' : ''}`}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 pt-4 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline ms-2">Admin Dashboard</span>
          <span className="d-sm-none fs-5 ms-2">AD</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center mt-3 align-items-sm-start" id="admin-menu">
          {/* Home */}
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaHome className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </NavLink>
          </li>

          {/* Users */}
          <li className="nav-item">
            <NavLink 
              to="/admin/users" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaUsers className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Users</span>
            </NavLink>
          </li>

          {/* Courses */}
          <li className="nav-item">
            <NavLink 
              to="/admin/courses" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaBook className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Courses</span>
            </NavLink>
          </li>

          {/* Content Approval */}
          <li className="nav-item">
            <NavLink 
              to="/admin/content-approval" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaCheck className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Content Approval</span>
            </NavLink>
          </li>

          {/* Analytics Dashboard */}
          <li className="nav-item">
            <NavLink 
              to="/admin/analytics" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaChartBar className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Analytics Dashboard</span>
            </NavLink>
          </li>

          {/* Payment Management */}
          <li className="nav-item">
            <NavLink 
              to="/admin/payments" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaMoneyBillWave className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Payment Management</span>
            </NavLink>
          </li>

          {/* Reporting Tools */}
          <li className="nav-item">
            <NavLink 
              to="/admin/reports" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaFileAlt className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Reporting Tools</span>
            </NavLink>
          </li>

          {/* Communication Tools */}
          <li className="nav-item">
            <NavLink 
              to="/admin/communication" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaBullhorn className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Communication Tools</span>
            </NavLink>
          </li>

          {/* Support Ticket System */}
          <li className="nav-item">
            <NavLink 
              to="/admin/support" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaEnvelope className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Support Ticket System</span>
            </NavLink>
          </li>

          {/* Feedback Management */}
          <li className="nav-item">
            <NavLink 
              to="/admin/feedback" 
              className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} 
              end
            >
              <FaEnvelope className="fs-4" />
              <span className="ms-1 d-none d-sm-inline">Feedback Management</span>
            </NavLink>
          </li>
        </ul>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default AdminSidebar;
