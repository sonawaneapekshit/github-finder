import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
class App extends Component {
  state = {
    users: [],
    loader: false,
  };

   // Search github users
   searchUsers = async (searchText) => {
    this.setState({ loader: true });
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      console.log(response.data);
      setTimeout(() => {
        this.setState({ users: response.data.items, loader: false });
      }, 1000);
    } catch (error) {
      // console.error(error);
    }
  }

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
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <div className="container" style={this.state.loader ? loaderStyles : {}}>
          <Search searchUsers={this.searchUsers}/>
          <Users loader={this.state.loader} users={this.state.users} />
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
