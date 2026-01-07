import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate a login success and navigate to the dashboard
    navigate('/');
  };

  return (
    <div className="login-page-container">
      {/* --- LEFT COLUMN: Login Form --- */}
      <div className="login-form-section">
        <div className="login-form-content">
          <div className="brand-header">
            <div className="brand-logo">
              <i className="fa-solid fa-robot"></i>
            </div>
            <span className="brand-name">Smart<b>Automation</b></span>
          </div>
          
          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Please enter your details to access your workspace.</p>

          <form className="login-form" onSubmit={handleSignIn}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="name@soprasteria.com" 
                required
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                 <label htmlFor="password">Password</label>
                 <a href="/forgot-password" title="Coming soon" className="forgot-link">Forgot?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required
              />
            </div>

            <button type="submit" className="btn-primary full-width">
              Sign In
            </button>
          </form>

          <div className="divider-or">
            <span>OR</span>
          </div>

          <button type="button" className="btn-secondary full-width icon-btn">
            <i className="fa-brands fa-microsoft"></i>
            <span>Sign in with SSO</span>
          </button>

          <p className="signup-footer">
            New to the platform? <a href="/register">Contact Admin</a>
          </p>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Visual Hero --- */}
      <div className="login-hero-section">
        <div className="hero-content">
          <div className="hero-visual">
             <i className="fa-solid fa-gears hero-main-icon"></i>
          </div>
          <h2>Automate with Precision.</h2>
          <p>
            Experience the next generation of automation management. 
            Streamline your test cycles and monitor project health in real-time.
          </p>
          <div className="hero-status-badges">
             <span className="badge"><i className="fa-solid fa-circle-check"></i> 99.9% Uptime</span>
             <span className="badge"><i className="fa-solid fa-shield-halved"></i> Enterprise Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;