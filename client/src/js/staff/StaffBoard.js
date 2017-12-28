import React from 'react';
import Chip from 'material-ui/Chip';
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
    marginBottom: 20
  }
};

class StaffBoard extends React.Component {
  state = {
    staff: null,
    tags: null,
    selectedTags: []
  };

  componentDidMount() {
    fetch('/api/staff').then(res => res.json()).then(
      staff => this.setState({staff})
    );
    fetch('/api/tags').then(res => res.json()).then(tags => this.setState({tags}));
  }

  render() {
    if (!this.state.staff || !this.state.tags) {
      return null;
    }

    return (
      <div>
        <div style={styles.chipsWrapper}>
          {
            Object.keys(this.state.tags).map(tagID => {
              const tag = this.state.tags[tagID];
              const selected = this.state.selectedTags.indexOf(tagID) !== -1
                ? 1
                : 0;
              return <Chip
                key={tagID}
                backgroundColor={selected
                  ? pink200
                  : pink50}
                style={styles.chip}
                onClick={() => this._onTagToggle(tagID)}>
                {tag.name}
              </Chip>;
            })
          }
        </div>
        <div>
          {
            Object.keys(this.state.staff).map(staffID => {
              const staff = this.state.staff[staffID];
              return this._isQuailifiedStaff(staff)
                ? <img alt="staff" key={staffID} src={staff.image}/>
                : null;
            })
          }
        </div>
      </div>
    );
  }

  _onTagToggle(tagID) {
    let tags = this.state.selectedTags;
    const index = tags.indexOf(tagID);

    if (index > -1) {
      tags.splice(index, 1);
    } else {
      tags.push(tagID);
    }
    this.setState({selectedTags: tags});
  }

  _isQuailifiedStaff(staff) {
    const staffTags = staff.tags;
    const requiredTags = this.state.selectedTags;
    for (const tag of requiredTags) {
      if (staffTags.indexOf(tag) === -1) {
        return false;
      }
    }
    return true;
  }
}

export default StaffBoard;
