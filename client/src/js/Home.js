import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MenuItem from './MenuItem';

import '../stylesheets/home.css';

class Home extends React.Component {
  state = {
    menu: []
  };

  componentDidMount() {
    fetch('/api/menu').then(res => res.json()).then(menu => this.setState({menu}));
  }

  render() {
    return <Router>
      <div className="wrapper">
        <div className="header">Link 恋与制作人攻略</div>
        <div className="menu">
          {this.state.menu.map(menuItem => <MenuItem url={menuItem.url} title={menuItem.title}/>)}
        </div>
      </div>
    </Router>;
  }
}

export default Home;
