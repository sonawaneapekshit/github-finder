import React from 'react';
import spinnerImg from './spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinnerImg}
        alt="Loading..."
        style={{
          width: '200px',
          height: '200px',
          margin: 'o auto',
          display: 'block',
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;
