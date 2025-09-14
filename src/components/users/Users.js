import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  
  render() {
    const { users } = this.props;
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return (
            <UserItem
              login={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
              key={user.id}
            />
          );
        })}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
