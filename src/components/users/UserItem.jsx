import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// converting this component from class to functional component as it is stateless
const UserItem = ({singleUser: {avatar_url, html_url, login }}) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 'id',
  //     login: 'mojambo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojambo',
  //   };
  // }

  // NOTE: State no longer need as we are using props
  // state = {
  //   id: 1,
  //   login: 'mojambo',
  //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //   html_url: 'https://github.com/mojambo',
  // };

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes ={
  singleUser: {
    avatar_url: PropTypes.string, 
    html_url: PropTypes.string, 
    login: PropTypes.string
  },
}

export default UserItem;
