import React from 'react'
import {Route} from 'react-router-dom';
import CardsGrid from './CardsGrid';
import CardInfo from './CardInfo';
import FilmTipsTable from './FilmTipsTable';
import MainlineNormal from './mainline/MainlineNormal';

const styles = {
  wrapper: {
    boxSizing: "border-box",
    display: "inline-block",
    paddingBottom: 200,
    paddingLeft: 40,
    paddingRight: 80,
    paddingTop: 20,
    position: "absolute",
    width: 960
  }
};

class BodyRouter extends React.Component {
  //TODO: add all url mapping and according components here
  render() {
    return (
      <div style={styles.wrapper}>
        <Route
          exact={true}
          path="/"
          render={() => {
            return <div>
              Render Homepage component here
            </div>;
          }}/>
        <Route
          exact={true}
          path="/limited-offers"
          render={() => {
            return <div>
              Render limited offers component here
            </div>;
          }}/>
        <Route path="/cards/ssr" component={CardsGrid}/>
        <Route path="/cards/card/:cardID" component={CardInfo}/>
        <Route path="/mainline/film/fast" component={FilmTipsTable}/>
        <Route path="/mainline/normal/fast" component={MainlineNormal}/>
      </div>
    );
  }
}

export default BodyRouter;
