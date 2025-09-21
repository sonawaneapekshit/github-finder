import React from 'react'
import PropTypes from 'prop-types';

export const Alert = ({alert}) => {
  
   if (!alert) return null;

  return (
   <div className={`alert alert-${alert.type} flex align-center`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p className="ml-1">{alert.msg}</p>
    </div>
  )
}

Alert.prototype = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
}
