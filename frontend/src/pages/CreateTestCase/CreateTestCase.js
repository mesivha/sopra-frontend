import React from 'react';
import './CreateTestCase.css';

const CreateTestCase = () => {
  return (
    <div className="testcase-page-container">
      {/* ------------------- */}
      {/* LEFT COLUMN (FORM)  */}
      {/* ------------------- */}
      <div className="testcase-form-wrapper">
        <div className="page-title-bar">
          <button className="back-button">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>Create TestCase</h2>
        </div>
        <div className="testcase-form-card">
          <form>
            <div className="form-group">
              <label htmlFor="testcase-name">Name</label>
              <input id="testcase-name" type="text" placeholder="Enter testcase name" />
            </div>

            <div className="form-group">
              <label htmlFor="test-group">Select Test Group</label>
              <div className="select-with-button">
                <select id="test-group">
                  <option>---- Select Test Group ----</option>
                  {/* Other options here */}
                </select>
                <button type="button" className="add-button">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <button type="button" className="btn-show-existing">
              Show Existing Testcases
            </button>
            <button type="submit" className="btn-create-testcase">
              <i className="fa-solid fa-plus"></i> Create
            </button>
          </form>
        </div>
      </div>

      {/* ------------------- */}
      {/* RIGHT COLUMN (REPOS) */}
      {/* ------------------- */}
      <div className="repository-wrapper">
        <div className="repo-header">
          <h3>Repositories</h3>
          <div className="repo-tabs">
            <button className="repo-tab-btn active">Object Repository</button>
            <button className="repo-tab-btn">Function Repository</button>
            <button className="repo-tab-btn">Data Table</button>
          </div>
        </div>

        {/* ----- Top Repo Table ----- */}
        <div className="repo-table-container">
          <div className="repo-table-controls">
            <span>
              Show{' '}
              <select>
                <option>10</option>
              </select>{' '}
              entries
            </span>
            <input type="search" placeholder="Search:" />
          </div>
          <table className="repo-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Locators</th>
                <th>Locator Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-plus icon-expand"></i> ActivateCustomerPage
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-plus icon-expand"></i> AddPricbookItemPage
                </td>
                <td></td>
                <td></td>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
          <div className="repo-table-footer">
            <span>Showing 1 to 5 of 5 entries</span>
            {/* Pagination would go here */}
          </div>
        </div>

        {/* ----- Bottom Repo Table ----- */}
        <div className="repo-table-container">
          <h3>All Scenarios</h3>
          <div className="repo-table-controls">
            <span>
              Show{' '}
              <select>
                <option>10</option>
              </select>{' '}
              entries
            </span>
            <input type="search" placeholder="Search:" />
          </div>
          <table className="repo-table">
            <thead>
              <tr>
                <th>Scenario Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-plus icon-expand"></i> TestA
                </td>
              </tr>
            </tbody>
          </table>
          <div className="repo-table-footer">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="pagination">
              <button disabled>Previous</button>
              <button className="active">1</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTestCase;