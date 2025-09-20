import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    text: '',
  };


  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }

  onChange = (e) => {
    
    // TODO: Note for dev
    // for out case to update state we will use this
    // this.setState({ text: e.target.value });

    // TODO: Note for dev
    // to make below resuable for all input field
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.searchUsers(this.state.text);
    this.setState({});
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
