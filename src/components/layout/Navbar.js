import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title= 'Github Profile',
  icon= 'fa-brands fa-square-github' }) => {

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Profile',
  icon: 'fa-brands fa-square-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
