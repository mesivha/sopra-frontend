import DataTable from '../../components/DataTable/DataTable';
import React from 'react';
import StatCard from '../../components/StatCard/StatCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="stat-card-grid">
        <StatCard
          title="Total Test Runs"
          value="273"
          icon="fa-solid fa-rocket"
          iconClass="total"
        />
        <StatCard
          title="Passed Test Cases"
          value="92"
          icon="fa-solid fa-check"
          iconClass="pass"
        />
        <StatCard
          title="Failed Test Cases"
          value="110"
          icon="fa-solid fa-xmark"
          iconClass="fail"
        />
        <StatCard
          title="Retry Count"
          value="0"
          icon="fa-solid fa-rotate-right"
          iconClass="retry"
        />
      </div>

      {/* Row 2: Charts */}
      <div className="charts-grid">
        <div className="chart-container">
          <h3>Cycle - Data (Bar Chart)</h3>
          <div className="chart-placeholder">[Bar Chart Placeholder]</div>
        </div>
        <div className="chart-container">
          <h3>Release - Data (Donut Chart)</h3>
          <div className="chart-placeholder">[Donut Chart Placeholder]</div>
        </div>
      </div>

      {/* Row 3: Data Table */}
      <div className="table-container">
        <h3>Testing - Execution details</h3>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;