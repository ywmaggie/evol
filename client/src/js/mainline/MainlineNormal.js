import React from 'react';
import Chip from 'material-ui/Chip';
import {pink50, pink200} from 'material-ui/styles/colors';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';

const styles = {
  chip: {
    margin: 4,
    minWidth: 70,
    paddingLeft: 20,
    paddingRight: 20
  },
  chipsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20
  }
};

class MainlineNormal extends React.Component {
  state = {
    chapter: 0
  };

  render() {
    return (
      <div>
        <div style={styles.chipsWrapper}>
          {
            [...Array(10).keys()].map(
              chapter => <Chip
                backgroundColor={this.state.chapter === chapter
                  ? pink200
                  : pink50}
                onClick={() => this._onClickChip(chapter)}
                style={styles.chip}>
                第{chapter + 1}章
              </Chip>
            )
          }
        </div>
        {this._renderChapter()}
      </div>
    );
  }

  _onClickChip(chapter) {
    this.setState({chapter})
  }

  _renderChapter() {
    const chapter = this.state.chapter + 1;
    switch (chapter) {
      case 1:
        return <Chapter1/>;
      case 2:
        return <Chapter2/>;
      case 3:
        return <Chapter3/>;
      case 4:
        return <Chapter4/>;
      case 5:
        return <Chapter5/>;
      case 6:
        return <Chapter6/>;
      case 7:
        return <Chapter7/>;
      case 8:
        return <Chapter8/>;
      case 9:
        return <Chapter9/>;
      case 10:
        return <Chapter10/>;
    }
  }
}

export default MainlineNormal;
