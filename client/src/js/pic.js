import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class Pic extends Component {
  state = {
    users: [],
    value: 1
  };

  componentDidMount() {
    fetch('/cards').then(res => res.json()).then(users => this.setState({users}));
  }

  render() {
    return (<div>
      <div onClick={() => this.setState({value: 2})}>
        {this.state.value}
      </div>
      <h1>Users</h1>
       {
        this.state.users.map(user => <div key={user.name}>
          {user.name}
          <img src={user.image}/>
        </div>)
      }
    </div>);
  }
}

export default Pic;
