import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Search extends Component {
  state = {
    searchText: '',
  };

  // Set Search text
  handleOnChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  // old way or if don;t use arrow function
  /*handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchText)
  }*/

  // Search users
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.searchText === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      console.log(this.state.searchText);
      this.props.searchUsers(this.state.searchText);
      this.setState({ searchText: '' });
    }
  };

  // Clear users
  // handleClear = (e) => {
  //   e.preventDefault();
  //   this.props.clearUsers({ users: [] });
  // };
  render() {
    const {showClear, clearUsers} = this.props;

    return (
      /* 
      if we don't use arrow function then use below bind syntax otherwise will get error of this keyword
      <form onSubmit={this.handleSubmit.bind(this)} className="form" style={searchStyles}>
      */
      <form onSubmit={this.handleSubmit} className="form" style={searchStyles}>
        <input
          type="text"
          name="text"
          value={this.state.searchText}
          onChange={this.handleOnChange}
          placeholder="Search User ..."
        />
        <div className="submit-container">
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
          {showClear && (
            <input
              type="reset"
              className="btn btn-light btn-block"
              value="Clear"
              onClick={clearUsers}
            />
          )}
        </div>
      </form>
    );
  }
}

const searchStyles = {
  display: 'grid',
  minWidth: '100%',
  gridTemplateColumns: '1fr',
};

export default Search;
