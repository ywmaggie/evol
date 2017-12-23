import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Radium from 'radium';
// import styles from './menuItem.css';

class MenuItem extends React.Component {
  render() {
    return (<span className="menuItem">
      <Link to={this.props.url}>
        {this.props.title}
      </Link>
    </span>);
  }
}

// export default Radium(MenuItem);
export default MenuItem;
