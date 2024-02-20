import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import '../assets/css/AdminDash.css';

const AdminDash = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic
    navigate('/');
  };

  return (
    <div className='page1'>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="nav-title">BEC ADMIN</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* Logout Button */}
            <button className="nav-link logout-link" onClick={handleLogout}>
              <IoLogOutOutline className="nav-icon" />
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Admin Dashboard Container */}
      <div className="admin-dash-container">
        {/* First Row */}
        <div className="admin-row">
          <div className="admin-box add-course">
            {/* Link to Add Course Page */}
            <Link to="/add-course" className="admin-link">Add Course</Link>
          </div>
          <div className="admin-box view-courses">
            {/* Link to View Courses Page */}
            <Link to="/view-courses" className="admin-link">View Courses</Link>
          </div>
        </div>
        {/* Second Row */}
        <div className="admin-row">
          <div className="admin-box view-enquiries">
            {/* Link to View Enquiries Page */}
            <Link to="/view-enquiries" className="admin-link">View Enquiries</Link>
          </div>
          <div className="admin-box view-payments">
            {/* Link to View Payments Page */}
            <Link to="/view-payments" className="admin-link">View Payments</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
