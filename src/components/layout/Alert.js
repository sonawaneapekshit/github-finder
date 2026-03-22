import React from 'react';

const Alert = ({ alert }) => {
  console.log(alert);
  if (alert === null) {
    return '';
  }
  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
