import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';

export default class User extends Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const login = this.props.params?.login;
    console.log('Mounting with login:', login);
    
    if (login) {
      this.props.getSingleUser(login);
    }
  }

  // ADD THIS - to handle login changes
  componentDidUpdate(prevProps) {
    const prevlogin = prevProps.params?.login;
    const currentlogin = this.props.params?.login;

    // Guard 1: login must have actually changed
    if (prevlogin === currentlogin) return;

    // Guard 2: don't re-fetch if we're already loading
    if (this.props.loader) return;

    if (currentlogin) {
      this.props.getthis.props.singleUser(currentlogin);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  static propTypes = {
    loader: PropTypes.bool,
    getSingleUser: PropTypes.func.isRequired, // Make it required
    singleUser: PropTypes.object,
    params: PropTypes.shape({
      login: PropTypes.string,
    }),
  };

  render() {
    const { loader, user } = this.props;
    console.log('User render - loader:', loader, 'has user:', !!user);

    if (loader) {
      return <div className="loading">Loading user profile...</div>;
    }

    return (
      <div className="user-profile">
        <h1>User profile</h1>``
        {this.props.singleUser && (
          <div>
            <img src={this.props.singleUser.avatar_url} alt={this.props.singleUser.name} style={{ width: 100 }} />
            <h2>{this.props.singleUser.name || this.props.singleUser.login}</h2>
            {this.props.singleUser.bio && <p>{this.props.singleUser.bio}</p>}
          </div>
        )}
      </div>
    );
  }
}
