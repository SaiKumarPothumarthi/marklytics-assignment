import React from 'react';
import './index.css';

const RefreshButton = ({ onRefresh }) => {
  return (
    <button className="refresh-button" onClick={onRefresh}>
      Refresh
    </button>
  );
};

export default RefreshButton;