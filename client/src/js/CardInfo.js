import React from 'react';
import AttributeChip from './AttributeChip';

const styles = {
  cardInfo: {
    display: "inline-block",
    position: "absolute"
  },
  image: {
    width: 400,
    height: 700,
    marginRight: 40
  },
  itemImage: {
    display: "block",
    width: 100
  },
  itemList: {
    display: "flex"
  },
  singleInfo: {
    marginBottom: 8
  }
};

class CardInfo extends React.Component {
  state = {
    cards: [],
    items: null
  };

  componentDidMount() {
    fetch('/api/cards').then(res => res.json()).then(
      cards => this.setState({cards})
    );
    fetch('/api/items').then(res => res.json()).then(
      items => this.setState({items})
    );
    console.log(this.state.items);
  }

  render() {
    const card = this.state.cards[0];
    if (!card || !this.state.items) {
      return null;
    }
    console.log(this.state.items);
    return (
      <div>
        <img alt="cardImage" style={styles.image} src={card.fullImage}/>
        <div style={styles.cardInfo}>
          <div style={styles.singleInfo}>
            卡牌名称: {card.name}
          </div>
          <div style={styles.singleInfo}>
            获取方式: {card.obtainMethods}
          </div>
          <div style={styles.singleInfo}>
            初始属性:
            <div style={styles.chipWrapper}>
              {
                card.attributes.map(
                  (val, index) => <AttributeChip key={index} index={index} value={val}/>
                )
              }
            </div>
          </div>
          <div style={styles.singleInfo}>
            隐藏台词: {card.motto}
          </div>
          <div style={styles.singleInfo}>
            关键词: {card.keywords}
          </div>
          <div style={styles.singleInfo}>
            升星材料:
            <div>
              {
                card.upgradeItems.map((items, index) => {
                  return (
                    <div>
                      <div>{index + 2}星</div>
                      {this._renderItemList(items)}
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div style={styles.singleInfo}>
            进化材料:
            <div>
              {card.evolveItems.map(items => this._renderItemList(items))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderItemList(items) {
    return (
      <div style={styles.itemList}>
        {
          items.map(item => {
            const itemInfo = this.state.items[item.id];
            return (
              <div>
                <img alt="item" src={itemInfo.image} style={styles.itemImage}/>
                <span>{itemInfo.name}</span>
                <span>{item.count}</span>
                <div>
                  {itemInfo.source}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default CardInfo;
