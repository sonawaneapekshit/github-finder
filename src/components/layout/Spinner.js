import React from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img src={spinner} alt="spinner" title="spinner" style={{ width: '200px', display: 'block', margin: 'auto' }} />
    </React.Fragment>
  )
}

export default Spinner