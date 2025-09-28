import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoItem = ({ repo }) => {
  console.log(repo);
  return (
    <div className="card">
      <h3>
        <Link to={repo.html_url}>{repo.name}</Link>
      </h3>
    </div>
  );
};

RepoItem.propType = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
