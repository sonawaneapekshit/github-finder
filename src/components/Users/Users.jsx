import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loader }) => {
  // state = {
  //   users: [
  //     {
  //       id: 1,
  //       login: 'mojambo',
  //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojambo',
  //     },
  //     {
  //       id: 2,
  //       login: 'defunkt',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
  //       html_url: 'https://github.com/defunkt',
  //     },
  //     {
  //       id: 3,
  //       login: 'pjhyett',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
  //       html_url: 'https://github.com/pjhyett',
  //     },
  //   ],
  // };
  if (loader) {
    return <Spinner />;
  }

  return (
    <div style={userStyles}>
      {users.map((singleUser) => {
        return <UserItem key={singleUser.id} singleUser={singleUser} />;
      })}
    </div>
  );
};

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propTypes = {
  users: PropTypes.array,
  loader: PropTypes.bool,
};

export default Users;
