import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import styles from  '../styles/app';
import Sidebar from './sidebar';
import PodcastList from './podcast-list';
import Player from './player';

class App extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.topLayout}>
          <Sidebar />
          <div className={styles.main}>
            {this.props.children}
          </div>
        </div>
        <Player />
      </div>
    );
  }
}

export default App;