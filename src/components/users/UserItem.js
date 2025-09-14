import React, { Component } from 'react'

class UserItem extends Component {
  state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
  }
  
  render() {
    console.log(this)
    const { avatar_url,login, html_url  } = this.props
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt={login} className='round-img' style={{ width: '60px' }} />
        <h2>{login}</h2>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    )
  }
}

export default UserItem