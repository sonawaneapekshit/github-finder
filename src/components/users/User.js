import React, { Component, Fragment } from 'react';
import { withRouter } from './WithRouter'; // adjust path as needed
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    const { login } = this.props.params;
    this.props.getUser(login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable,
    } = this.props.user;
    console.log(
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable
    );

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/">Back to search</Link>
        <div>
          <h6>Hireable</h6>
          {hireable ? (
            <i class="fa-solid fa-check text-success"></i>
          ) : (
            <i class="fa-solid fa-xmark text-danger"></i>
          )}
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt="login" style={{ width: '150px' }} />

            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1" target='_blank'>
              Visit Gitub profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers || 0}</div>
          <div className="badge badge-success">Following: {following || 0}</div>
          <div className="badge badge-light">Public Repos: {public_repos || 0}</div>
          <div className="badge badge-dark">Public Gist: {public_gist || 0}</div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(User);
