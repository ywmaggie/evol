import React from 'react';
import Chip from 'material-ui/Chip';
import {blue50, green50, pink50, yellow50} from 'material-ui/styles/colors';

const styles = {
  chipWrapper: {
    display: 'inline-block',
    margin: 4,
    paddingLeft: 4,
    paddingRight: 4
  },
  chip: {
    display: 'inline-block',
    marginRight: 8
  }
};

const attributes = [
  {
    "color": blue50,
    "name": "决策力"
  }, {
    "color": yellow50,
    "name": "创造力"
  }, {
    "color": pink50,
    "name": "亲和力"
  }, {
    "color": green50,
    "name": "行动力"
  }
];

class AttributeChip extends React.Component {
  render() {
    const attribute = attributes[this.props.index];
    return (
      <div style={styles.chipWrapper}>
        <Chip backgroundColor={attribute.color} style={styles.chip}>
          {attribute.name}
        </Chip>
        {this.props.value}
      </div>
    );
  }
}

export default AttributeChip;
