import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export default class User extends Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const login = this.props.params?.login;
    console.log('Mounting with login:', login);

    if (login) {
      this.props.getSingleUser(login);
      this.props.getSingleUserRepos(login)
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
    getSingleUserRepos: PropTypes.func.isRequired, // Make it required
    singleUser: PropTypes.object,
    repos: PropTypes.any,
    params: PropTypes.shape({
      login: PropTypes.string,
    }),
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      twitter_username,
      followers,
      folllowing,
      public_repos,
      public_gists,
      hireable,
    } = this.props.singleUser;

    const { loader } = this.props;

    if (loader) {
      return <Spinner />;
    }

    return (
      <section
        style={{
          color: 'rgba(228, 228, 228, 0.77)',
          background: 'rgba(0,0,0,0.35)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Link to="/" className="btn btn-light" style={{ maxWidth: '150px' }}>
          Back to Search
        </Link>
        <p>
          Hireable:
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times-circle text-danger"></i>
          )}
        </p>
        <div className="card grid-2">
          <div className="all-center">
            <img
              className="round-img"
              src={avatar_url}
              alt={`${name || login} avatar`}
              style={{ width: '150px' }}
            />
            <h1 tirle={name || login}>{name || login}</h1>
            <p>
              <i class="fa-solid fa-location-dot"></i>Location:
              {location || 'N/A'}
            </p>
          </div>
          <div style={{ gap: '1rem' }}>
            {bio && (
              <Fragment>
                <h3 id="bio-user">Bio</h3>
                <p style={{}} aria-labelledby="bio-user" aria-description={bio}>
                  {bio}
                </p>
              </Fragment>
            )}
            {html_url && (
              <Fragment>
                <h3>Repo link</h3>
                <ul
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <li>
                    <a
                      href={html_url}
                      title={`${name || login} github profile`}
                    >
                      <i
                        class="fa-brands fa-github text-dark "
                        style={{ fontSize: '40px' }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      title={`${twitter_username} twiiter profile`}
                    >
                      <i
                        class="fa-brands fa-twitter text-dark "
                        style={{ fontSize: '40px' }}
                      ></i>
                    </a>
                  </li>
                </ul>

                <ul>
                  {login && (
                    <li>
                      <Fragment>
                        <strong>Username</strong>: {login}
                      </Fragment>
                    </li>
                  )}
                  {company && (
                    <li>
                      <Fragment>
                        <strong>Company</strong>: {company}
                      </Fragment>
                    </li>
                  )}
                  {blog && (
                    <li>
                      <Fragment>
                        <strong>Blog</strong>: {blog}
                      </Fragment>
                    </li>
                  )}
                </ul>
              </Fragment>
            )}
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {folllowing}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <div className="card text-center" style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <Repos repos={this.props.repos} />
        </div>
      </section>
    );
  }
}
