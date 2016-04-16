import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';
import {PlayIcon, SaveIcon} from './icons';

class PodcastEpisodeListItem extends Component {
  constructor(props) {
    super(props);

    this.itemPlay = this.itemPlay.bind(this);
    this.itemQueue = this.itemQueue.bind(this);
  }

  itemPlay(ep) {
    this.props.loadPodcastEpisode(ep);
  }

  itemQueue(ep) {
    if (this.props.player.src) {
      this.props.addEpisodeToQueue(ep);
    } else {
      this.props.loadPodcastEpisode(ep);
    }
  }

  render() {
    const {ep} = this.props;
    return (
      <tr className={styles.episodeListItem} alt={ep.title}>
        <td onClick={() => this.itemPlay(ep) }>
          <PlayIcon classNames={styles.playIcon} />
        </td>
        <td className={styles.episodeDescription}>
          {ep.title}<br/>
          <small>{ep.date}</small> 
        </td>
        <td onClick={() => this.itemQueue(ep) }>
          <SaveIcon classNames={styles.addIcon} />
        </td> 
      </tr>  
    )
  }
}

const mapStateToProps = ({player}) => ({player});
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeListItem);
