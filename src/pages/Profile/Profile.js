import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page-grid">
      {/* ------------------- */}
      {/* LEFT COLUMN (FORM)  */}
      {/* ------------------- */}
      <div className="profile-form-card">
        <h2 className="profile-header">Profile</h2>
        <form>
          {/* ----- User Info Row ----- */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userId">UserID</label>
              <input id="userId" type="text" value="RS4" disabled />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" value="Akshat VOHRA" disabled />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value="vohra.akshat@soprasteria.com"
                disabled
              />
            </div>
          </div>

          {/* ----- Project Details Section ----- */}
          <h3 className="form-section-header">Project Details</h3>
          <div className="form-row">
            <div className="form-group full-width">
              <input
                id="project"
                type="text"
                value="SmartAutomation"
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="githubUser">GitHub User Name</label>
              <input id="githubUser" type="text" placeholder="Enter GitHub username" />
            </div>
            <div className="form-group">
              <label htmlFor="branchName">Branch Name</label>
              <input id="branchName" type="text" value="akshat_ui" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" />
            </div>
          </div>

          {/* ----- Form Actions ----- */}
          <div className="form-actions">
            <button type="submit" className="btn-save-profile">
              Save
            </button>
          </div>
        </form>
      </div>

      {/* ------------------- */}
      {/* RIGHT COLUMN (DISPLAY) */}
      {/* ------------------- */}
      <div className="profile-display-card">
        <div className="profile-display-bg"></div>
        <div className="profile-avatar">
          <img src="https://i.pravatar.cc/100?img=1" alt="User Avatar" />
        </div>
        <h3 className="profile-display-name">Akshat VOHRA</h3>
        <p className="profile-display-email">vohra.akshat@soprasteria.com</p>
        <div className="profile-contact-buttons">
          <button className="contact-btn">
            <i className="fa-solid fa-phone"></i>
          </button>
          <button className="contact-btn">
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;