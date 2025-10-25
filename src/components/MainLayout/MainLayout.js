import React from 'react';
import { Link } from 'react-router-dom'; // IMPORT Link
import './MainLayout.css';

// This is the main "shell" of your application.
// 'children' will now be provided by React Router's <Routes> in App.js
const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* ------------------- */}
      {/* 1. SIDEBAR */}
      {/* ------------------- */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <i className="fa-solid fa-robot"></i>
        </div>
        <ul className="sidebar-nav-list">
          <li className="nav-item">
            {/* USE Link and "to" prop */}
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-chart-pie"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/test-runs" className="nav-link">
              <i className="fa-solid fa-play"></i>
              <span>Test Runs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/repositories" className="nav-link">
              <i className="fa-solid fa-database"></i>
              <span>Repositories</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test-cases" className="nav-link">
              <i className="fa-solid fa-list-check"></i>
              <span>Test Cases</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            {/* This is the link we just created a page for */}
            <Link to="/users" className="nav-link">
              <i className="fa-solid fa-users"></i>
              <span>User Mgmt</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/docs" className="nav-link">
              <i className="fa-solid fa-book"></i>
              <span>Docs</span>
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

      {/* ------------------- */}
      {/* 2. MAIN CONTENT AREA */}
      {/* ------------------- */}
      <div className="main-content-wrapper">
        <header className="topbar">
          <div className="logo-text">
            <span>Smart</span>
            <b>Automation</b>
          </div>
          <div className="user-info">
            <span>Hi Akshat VOHRA!</span>
            <span className="user-role">testing</span>
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
            </div>
          </div>
        </header>

        {/* This 'children' prop is now our <Routes> block from App.js.
          It will render the correct page.
        */}
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;