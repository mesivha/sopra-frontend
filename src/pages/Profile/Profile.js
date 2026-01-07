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
        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* ----- User Info Row ----- */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userId">UserID</label>
              <input id="userId" type="text" value="954" readOnly disabled />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" value="Akshat VOHRA" readOnly disabled />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value="vohra.akshat@soprasteria.com"
                readOnly
                disabled
              />
            </div>
          </div>

          {/* ----- Project Details Section ----- */}
          <h3 className="form-section-header">Project Details</h3>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="project">Current Project</label>
              <input
                id="project"
                type="text"
                value="SmartAutomation"
                readOnly
                disabled
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="githubUser">
                <i className="fa-brands fa-github"></i> GitHub User Name
              </label>
              <input 
                id="githubUser" 
                type="text" 
                defaultValue="Company" 
                placeholder="Enter GitHub username" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="branchName">Branch Name</label>
              <input 
                id="branchName" 
                type="text" 
                defaultValue="akshat_ui" 
              />
            </div>
          </div>

          {/* ----- Form Actions ----- */}
          <div className="form-actions">
            <button type="submit" className="btn-save-profile">
              Save Changes
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
          <button className="contact-btn" title="Call">
            <i className="fa-solid fa-phone"></i>
          </button>
          <button className="contact-btn" title="Email">
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;