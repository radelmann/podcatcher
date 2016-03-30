import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../action-creators/player';
import * as podcastActions from  '../action-creators/podcasts';
import { bindActionCreators } from 'redux';
import styles from '../styles/player';


export class Player extends Component {

  trackEnd() {
    console.log('trackend');
    var ep = this.props.queue[0];
    this.props.removeEpisodeFromQueue(ep);
  }

  render(ep) {
    ep = this.props.queue[0] || {};

    const {title, podcastTitle, src} = ep;

    const audioEl = src ? <audio src={src} onEnded={() => this.trackEnd()} controls autoPlay /> : null;
  
    return (
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          {podcastTitle} - {title}
          {audioEl}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    player : state.player, 
    queue : state.queue 
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);


