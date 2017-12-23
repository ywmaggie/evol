import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MenuItem extends React.Component {
  render() {
    return (<span className="menuItem">
      <Link to={this.props.url}>
        {this.props.title}
      </Link>
    </span>);
  }
}

export default MenuItem;
