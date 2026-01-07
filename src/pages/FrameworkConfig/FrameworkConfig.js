import React from 'react';
import './FrameworkConfig.css';

const FrameworkConfig = () => {
  return (
    <div className="framework-config-container">
      {/* 1. Page Header & Actions */}
      <div className="config-header">
        <h2>Framework Configuration</h2>
        <div className="actions-box">
          <span className="actions-title">Actions</span>
          <div className="actions-buttons">
            <button className="action-btn">
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button className="action-btn">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Config Card */}
      <div className="config-card">
        <form className="config-form-grid">
          {/* ----- Column 1 ----- */}
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="thread-count">Thread Count</label>
              <input id="thread-count" type="number" defaultValue="1" />
            </div>
            <div className="form-group">
              <label htmlFor="agent-name">Select Agent Name</label>
              <select id="agent-name">
                <option>Select Agent Name</option>
              </select>
            </div>
          </div>

          {/* ----- Column 2 ----- */}
          <div className="form-column">
            <div className="form-group">
              <label>Select Browser</label>
              <div className="browser-select-group">
                <label className="browser-option">
                  <input type="checkbox" defaultChecked />
                  <i className="fa-brands fa-chrome"></i>
                </label>
                <label className="browser-option">
                  <input type="checkbox" />
                  <i className="fa-brands fa-firefox"></i>
                </label>
                <label className="browser-option">
                  <input type="checkbox" />
                  <i className="fa-brands fa-edge"></i>
                </label>
              </div>
            </div>
          </div>

          {/* ----- Divider ----- */}
          <div className="form-divider"></div>

          {/* ----- Column 3 (Row 2, Col 1) ----- */}
          <div className="form-column">
            <div className="form-group">
              <label>DataBase</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="stepScreenshot" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="stepScreenshot" value="no" defaultChecked /> No
                </label>
              </div>
              <label className="sub-label">StepScreenshot</label>
            </div>
            <div className="form-group">
              <div className="radio-group">
                <label>
                  <input type="radio" name="storeLogs" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="storeLogs" value="no" defaultChecked /> No
                </label>
              </div>
              <label className="sub-label">StoreLogsToDb</label>
            </div>
          </div>

          {/* ----- Column 4 (Row 2, Col 2) ----- */}
          <div className="form-column">
            <div className="form-group">
              <label>Security</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="zapReport" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="zapReport" value="no" defaultChecked /> No
                </label>
              </div>
              <label className="sub-label">Security(ZAP report) :</label>
            </div>
          </div>
        </form>

        {/* ----- Bottom Search Bar ----- */}
        <div className="bottom-search-bar">
          <label htmlFor="test-case-select">Select Test case:</label>
          <select id="test-case-select">
            <option>Select test case</option>
          </select>
          <button className="btn-search">
            <i className="fa-solid fa-search"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameworkConfig;