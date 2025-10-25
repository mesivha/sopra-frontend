import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, iconClass }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-info">
        <span className="stat-card-title">{title}</span>
        <span className="stat-card-value">{value}</span>
      </div>
      <div className={`stat-card-icon ${iconClass}`}>
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default StatCard;