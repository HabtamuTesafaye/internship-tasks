import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { FaBars, FaUserCircle , FaHome } from "react-icons/fa";
import { Link }  from 'react-router-dom';
import '../../assets/css/admin/AdminLayout.css';
const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {sidebarOpen && <AdminSidebar />}
        <div className={`col ${sidebarOpen ? "col" : "col-md-12"} ps-3`}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-3 pe-5">
            <button
              className="btn btn-outline-secondary me-3"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
           {/* "Visit Home" Button with Home Icon */}
           <a
              href="/home" // Use the appropriate URL for your home route
              className="btn btn-success d-flex align-items-center me-3"
              style={{ textDecoration: 'none', color: 'white' }}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <FaHome className="me-1" /> {/* Home Icon */}
              Visit Home
            </a>
            <h4 className="me-auto">Admin Dashboard</h4>
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                <FaUserCircle className="fs-4" />
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`} // Change here
                aria-labelledby="dropdownUser"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
