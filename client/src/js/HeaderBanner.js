import React from 'react'

const styles = {
  wrapper: {
    marginBottom: 20,
    marginTop: 40
  },
  image: {
    display: "block",
    height: 226,
    margin: "0 auto"
  }
};

class HeaderBanner extends React.Component {
  render() {
    return <div style={styles.wrapper}>
      <img alt="banner" style={styles.image} src="/images/banner.png"/>
    </div>;
  }
}

export default HeaderBanner;
