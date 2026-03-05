import React, { Component } from 'react';

export class Search extends Component {
  state = {
    searchText: '',
  };
  handleOnChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  // old way or if don;t use arrow function
  /*handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchText)
  }*/
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchText);
    this.props.searchUsers(this.state.searchText)
    this.setState({ searchText: '' });
  };
  render() {
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
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
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
