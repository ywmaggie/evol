// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   state = {
//     users: [],
//     value: 1
//   };
//
//   componentDidMount() {
//     fetch('/users').then(res => res.json()).then(users => this.setState({users}));
//   }
//
//   render() {
//     return (<div className="App">
//       <div onClick={() => this.setState({value: 2})}>
//         {this.state.value}
//       </div>
//       <h1>Users</h1>
//       <img src={'1011.png'}/>
//       {this.state.users.map(user => <div key={user.id}>{user.username}</div>)}
//     </div>);
//   }
// }
//
// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Pic from './pic';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <Pic />
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample
