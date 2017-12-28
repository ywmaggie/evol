import React from 'react';
import Chip from 'material-ui/Chip';
import {
  pink50,
  yellow50,
  green50,
  blue50,
  pink200,
  yellow200,
  green200,
  blue200
} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
    minWidth: 70,
    paddingLeft: 20,
    paddingRight: 20
  }
};

const colorTable = {
  "1": [
    pink50, pink200
  ],
  "2": [
    blue50, blue200
  ],
  "3": [
    green50, green200
  ],
  "4": [yellow50, yellow200]
};

class StaffTag extends React.Component {
  render() {
    return (
      <Chip
        backgroundColor={colorTable[this.props.color][this.props.selected]}
        style={styles.chip}
        onClick={() => this.props.onClick(this.props.tagID)}>
        {this.props.name}
      </Chip>
    );
  }
}

export default StaffTag;
