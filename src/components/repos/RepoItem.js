import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const RepoItem = ({ repo }) => {
  const { git_url, name, description } = repo;
  return (
    <div className="card" style={{flex: "0 1 calc(33.33% - 2rem)"}}>
      <Link to={git_url} title={name}>
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

RepoItem.propType = {
  repo: PropTypes.object,
};

export default RepoItem;
