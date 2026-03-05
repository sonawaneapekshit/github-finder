import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

// default props in class component
Navbar.defaultProps = {
  title: 'Default title',
  icon: 'fa-brands fa-square-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
