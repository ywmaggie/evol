import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import BodyRouter from './BodyRouter';
import MainMenu from './MainMenu';
import HeaderBanner from './HeaderBanner';

const styles = {
  wrapper: {
    margin: "0 auto",
    width: 1200
  }
};

class Home extends React.Component {
  render() {
    return <Router>
      <div style={styles.wrapper}>
        <HeaderBanner/>
        <div>
          <MainMenu/>
          <BodyRouter/>
        </div>
      </div>
    </Router>;
  }
}

export default Home;
