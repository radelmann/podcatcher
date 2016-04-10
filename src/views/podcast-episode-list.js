import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';
import {PlayIcon, InfoIcon, SaveIcon} from './icons';

class PodcastEpisodeList extends Component {
  itemQueue(ep) {
    if (this.props.player.src) {
      this.props.addEpisodeToQueue(ep);  
    } else {
      this.props.loadPodcastEpisode(ep);
    }
  }
  
  itemPlay(ep) {
    this.props.loadPodcastEpisode(ep);
  }

  constructor(props) {
    super(props);

    this.itemQueue = this.itemQueue.bind(this);
    this.itemPlay = this.itemPlay.bind(this);
  }

  render() {
    console.log(this.props.podcast);
    const {description: [description=''], title: [podcastTitle = ''] = [], item: episodes = [] } = this.props.podcast;
    const routeParams = this.props.routeParams;
    const imgSrc  = this.props.podcast['itunes:image'][0].$.href ? this.props.podcast['itunes:image'][0].$.href : null;

    const formattedEps = episodes.map(({enclosure, title: [title], guid: [guid],description: [description]}) => {
      return {
        podcastTitle,
        title,
        description,
        src: enclosure[0].$.url,
        podcastId: routeParams.podcastId,
        id: guid._,
        imgSrc
      };
    });

    return (
      <div>
        <div className={styles.episodeListHeader}>
          <img src={imgSrc} className={styles.listHeaderImg}/>
          <h1>{podcastTitle}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.episodeListContainer}>
          <ul className={styles.episodeList}>
            {
              formattedEps.map((ep) => (
                <li key={ep.id} className={styles.episodeListItem} alt={ep.title}>
                  <span onClick={() => this.itemPlay(ep) }>
                    <PlayIcon classNames={styles.playIcon} />
                  </span>
                  <span className={styles.episodeDescription}>{ep.title}</span>
                  <span onClick={() => this.itemQueue(ep) }>
                    <SaveIcon classNames={styles.addIcon} />
                  </span> 
                </li>
              ))
            }
          </ul>
        </div>  
      </div>
    );
  }
}


const mapStateToProps = (state , {routeParams}) => { 
  return {
    player: state.player,
    podcast: state.podcasts[routeParams.podcastId] 
  } || {};
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);
