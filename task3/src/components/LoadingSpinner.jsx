import React from 'react';
import '../assets/css/LoadingSkeleton.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-grow text-primary" role="status">
      </div>
      <div className="spinner-grow text-secondary" role="status">
      </div>
      <div className="spinner-grow text-success" role="status">
      </div>
      <div className="spinner-grow text-danger" role="status">
      </div>
      <div className="spinner-grow text-warning" role="status">
      </div>
      <div className="spinner-grow text-info" role="status">
      </div>
      <div className="spinner-grow text-dark" role="status">
      </div>
    </div>
  );
};

export default LoadingSpinner;
