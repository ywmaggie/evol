import React from 'react';
import Chip from 'material-ui/Chip';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router-dom';
import {pink50, pink200} from 'material-ui/styles/colors';

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
    justifyContent: 'space-around',
    marginBottom: 20
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  gridTile: {
    height: 180,
    width: 180
  }
};

class CardsGrid extends React.Component {
  state = {
    cards: {},
    selected: 'all'
  };

  componentDidMount() {
    fetch('/api/cards').then(res => res.json()).then(
      cards => this.setState({cards})
    );
  }

  render() {
    const actionIcon = <IconButton><StarBorder color="white"/></IconButton>;
    return (
      <div>
        <div style={styles.chipsWrapper}>
          <Chip
            backgroundColor={this.state.selected === 'all'
              ? pink200
              : pink50}
            onClick={() => this._onClickChip('all')}
            style={styles.chip}>
            全部
          </Chip>
          <Chip
            backgroundColor={this.state.selected === '白起'
              ? pink200
              : pink50}
            onClick={() => this._onClickChip('白起')}
            style={styles.chip}>
            白起
          </Chip>
          <Chip
            backgroundColor={this.state.selected === '李泽言'
              ? pink200
              : pink50}
            onClick={() => this._onClickChip('李泽言')}
            style={styles.chip}>
            李泽言
          </Chip>
          <Chip
            backgroundColor={this.state.selected === '许墨'
              ? pink200
              : pink50}
            onClick={() => this._onClickChip('许墨')}
            style={styles.chip}>
            许墨
          </Chip>
          <Chip
            backgroundColor={this.state.selected === '周棋洛'
              ? pink200
              : pink50}
            onClick={() => this._onClickChip('周棋洛')}
            style={styles.chip}>
            周棋洛
          </Chip>
        </div>
        <GridList cols={4} padding={16} style={styles.girdList}>
          {
            Object.keys(this.state.cards).filter(cardID => this._filterByOnwer(cardID)).map(
              cardID => {
                const card = this.state.cards[cardID];
                return <GridTile
                  key={card.image}
                  actionIcon={actionIcon}
                  containerElement={<Link to = {
                    "/cards/card/" + cardID
                  } />}
                  title={card.name}
                  subtitle={card.owner}>
                  <img alt="cardImage" src={card.image}/>
                </GridTile>;
              }
            )
          }
        </GridList>
      </div>
    );
  }

  _onClickChip(name) {
    this.setState({selected: name})
  }

  _filterByOnwer(cardID) {
    if (this.state.selected === 'all') {
      return true;
    }
    if (this.state.cards.hasOwnProperty(cardID)) {
      if (this.state.cards[cardID].owner === this.state.selected) {
        return true;
      }
    }
    return false;
  }
}

export default CardsGrid;
