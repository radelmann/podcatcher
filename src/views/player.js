import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../action-creators/player';
import * as podcastActions from  '../action-creators/podcasts';
import { bindActionCreators } from 'redux';
import styles from '../styles/player';


export class Player extends Component {

  episodeEnd() {
    if (this.props.queue[0]) {
      var ep = this.props.queue[0];
      this.props.loadPodcastEpisode(ep);
      this.props.removeEpisodeFromQueue(ep);
    }
  }

  render(ep) {
    const {title, podcastTitle, src} = this.props.player;

    const audioEl = src ? <audio src={src} onEnded={() => this.episodeEnd()} controls autoPlay /> : null;
  
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
    queue : state.queue,
    player : state.player
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);


