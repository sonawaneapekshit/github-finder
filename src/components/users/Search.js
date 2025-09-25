import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = ({ searchUsers, setAlert, clearUser }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    // TODO: Note for dev
    // for out case to update state we will use this
    // this.setState({ text: e.target.value });

    // TODO: Note for dev
    // to make below resuable for all input field
    setText(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    clearUser();
    setText('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter username', 'minimal');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="field-wrapper relative">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            onChange={onChange}
            value={text}
            className="pr-2"
          />
          {text !== '' && (
            <button className="absolute" onClick={onClick}>
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          )}
        </div>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
