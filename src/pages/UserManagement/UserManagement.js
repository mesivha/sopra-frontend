import React from 'react';
import './UserManagement.css';

const UserManagement = () => {
  // Static data based on your screenshot
  const users = [
    { name: 'Manish TRIVEDI', id: '780544f0-...', email: 'manish.trivedi@soprasteria.com', subProject: 'testing', role: 'admin' },
    { name: 'Akshat VOHRA', id: '2cfa915f-...', email: 'vohra.akshat@soprasteria.com', subProject: 'testing', role: 'staff' },
    { name: 'Surya', id: '3c54c51c-...', email: 'surya.surya@soprasteria.com', subProject: 'testing', role: 'staff' },
    { name: 'Mayank JOSHI', id: '2b13054b-...', email: 'mayank.joshi2@soprasteria.com', subProject: 'testing', role: 'staff' },
    { name: 'Vikas CHOUBEY', id: '520a93f7-...', email: 'vikas.choubey@soprasteria.com', subProject: 'admin', role: 'admin' },
    { name: 'Hemopriyo...', id: '39ccb22b-...', email: 'hemopriyo2@soprasteria.com', subProject: 'testing', role: 'staff' },
  ];

  return (
    <div className="user-mgmt-container">
      {/* 1. Page Header with Tabs */}
      <div className="page-header">
        <h2 className="header-title">Project Management</h2>
        <div className="header-tabs">
          <button className="tab-link">Project Management</button>
          <button className="tab-link active">User Management</button>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <div className="filter-bar">
        <select className="filter-select">
          <option>SmartAutomation</option>
        </select>
        <input type="search" placeholder="Search..." className="filter-search" />
      </div>

      {/* 3. User Table */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username(ID)</th>
              <th>Email</th>
              <th>Sub Project</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {/* Username Cell */}
                <td className="cell-username">
                  <span className="user-name">{user.name}</span>
                  <span className="user-id">({user.id})</span>
                </td>
                {/* Email Cell */}
                <td>{user.email}</td>
                {/* Sub Project Cell */}
                <td className="cell-subproject">
                  <span className="project-tag">{user.subProject}</span>
                  <select className="table-select">
                    <option>{user.subProject}</option>
                  </select>
                </td>
                {/* Role Cell */}
                <td>
                  <select className="table-select" defaultValue={user.role}>
                    <option value="admin">admin</option>
                    <option value="staff">staff</option>
                  </select>
                </td>
                {/* Action Cell */}
                <td className="cell-action">
                  <button className="btn-table btn-remove">Remove</button>
                  <button className="btn-table btn-save">Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;