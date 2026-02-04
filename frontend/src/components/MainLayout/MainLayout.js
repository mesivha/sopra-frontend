import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import SopraIcon from "../../assets/sopra-icon.svg";
import SopraLogo from "../../assets/logo-soprasteria.svg";
import './MainLayout.css';
const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  const content = document.querySelector(".page-content");
  if (!content) return;

  const onScroll = () => {
    setScrolled(content.scrollTop > 10);
  };

  content.addEventListener("scroll", onScroll);
  return () => content.removeEventListener("scroll", onScroll);
}, []);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    // In a real application, you would clear auth tokens here
    // e.g., localStorage.removeItem('token');
    navigate('/login');
  };
  const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
};
  return (
    <div className="layout-container">
          {/* --- SIDEBAR --- */}
          <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="sidebar-logo">
              <img
                src={SopraIcon}
                alt="Sopra icon"
                className="logo-icon"
              />

              <img
                src={SopraLogo}
                alt="Sopra Steria"
                className="logo-full"
              />
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
        <header className={`topbar ${scrolled ? "topbar--glass" : ""}`}>
          <button
  className="sidebar-toggle"
  onClick={() => setIsCollapsed(prev => !prev)}
  aria-label="Toggle sidebar"
>
  ☰
</button>
<button onClick={toggleTheme}>🌙</button>


          <div className="logo-text">
            <span>Smart <b>Automation</b></span>
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