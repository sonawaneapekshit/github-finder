import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    loader: false,
    alert: null,
  };

  // Search github users
  searchUsers = async (searchText) => {
    this.setState({ loader: true });
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      );
      console.log(response.data);
      setTimeout(() => {
        this.setState({ users: response.data.items, loader: false });
      }, 1000);
    } catch (error) {
      // console.error(error);
    }
  };

  // clear github users list
  clearUsers = () => {
    try {
      this.setState({ users: [] });
    } catch (error) {
      // console.error(error);
    }
  };

  // show alert message
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(()=> {
       this.setState({ alert: null });
    }, 3000)
  };

  // TODO: UnComment if you want to show inital list of users
  // async componentDidMount() {
  //   this.setState({ loader: true });
  //   try {
  //     const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //     console.log(response.data);
  //     setTimeout(() => {
  //       this.setState({ users: response.data, loader: false });
  //     }, 1000);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    const { loader, users, alert } = this.state;
    console.log(alert);
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <div
          className="container"
          style={this.state.loader ? loaderStyles : {}}
        >
          <Alert alert={alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loader={loader} users={users} />
        </div>
      </div>
    );
  }
}

const loaderStyles = {
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center',
  gridGap: '1rem',
  width: '100%',
  minHeight: '50vh',
};

export default App;
