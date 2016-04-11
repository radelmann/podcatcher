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
    } else {
      this.props.clearPodcastEpisode();
    }
  }

  render(ep) {
    const {title, podcastTitle, src, imgSrc} = this.props.player;
    const audioEl = src ? <div className={styles.playerEl}><audio src={src} onEnded={() => this.episodeEnd()} controls autoPlay /></div> : null;
  
    return (
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          <img src={imgSrc} className={styles.playerImg} />
          <div className={styles.playerInner}>
            <div><small>{podcastTitle} - {title}</small></div>
            {audioEl}
          </div>
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


