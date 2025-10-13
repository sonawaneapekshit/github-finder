import PropTypes from 'prop-types';
import React from 'react';

export const Alert = ({alert}) => {
  return (
   alert !== null && <div className={`alert alert-${alert.type} flex align-center`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p className='ml-1'>{alert.msg}</p>
    </div>
  );
};

Alert.propTypes = {
  alertState: PropTypes.object,
};

export default Alert;
