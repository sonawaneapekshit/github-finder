import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  if (repos === undefined || repos === null || repos.length === 0) {
    return <div className='card text-center'><strong>No public repository(s) availble for this user</strong></div>;
  }

  return (
    <Fragment>
      {repos?.map((repo) => {
        return <RepoItem key={repo.id} repo={repo} />;
      })}
    </Fragment>
  );
};

Repos.propTypes = {
  repos: PropTypes.array,
};

export default Repos;
