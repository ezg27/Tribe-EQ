import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Controls.css';

const Loading = () => {
  return (
    <div className="Loading-div">
      <div className='Circle-container'>
        <CircularProgress size={60} color="secondary" />
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
