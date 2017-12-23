import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class BodyRouter extends React.Component {
  //TODO: add all url mapping and according components here
  render() {
    return (<div>
      <Route exact={true} path="/" render={() => {
          return <div>
            Render Homepage component here
          </div>;
        }}/>
      <Route exact={true} path="/limited-offers" render={() => {
          return <div>
            Render limited offers component here
          </div>;
        }}/>
    </div>);
  }
}

export default BodyRouter;
