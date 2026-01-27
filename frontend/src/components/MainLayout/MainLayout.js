import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would clear auth tokens here
    // e.g., localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="layout-container">
      {/* --- SIDEBAR --- */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <i className="fa-solid fa-robot"></i>
        </div>
        <ul className="sidebar-nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-chart-pie"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test-cases" className="nav-link">
              <i className="fa-solid fa-list-check"></i>
              <span>Test Cases</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              <i className="fa-solid fa-users"></i>
              <span>User Mgmt</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/devtools" className="nav-link">
              <i className="fa-solid fa-code"></i>
              <span>DevTools</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content-wrapper">
        <header className="topbar">
          <div className="logo-text">
            <span>Smart</span>
            <b>Automation</b>
          </div>
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">Akshat VOHRA</span>
              <span className="user-role">testing</span>
            </div>
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
            </div>
            
            {/* --- LOGOUT BUTTON --- */}
            <button className="logout-btn" onClick={handleLogout} title="Sign Out">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </header>

        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;