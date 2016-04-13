import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';
import {PlayIcon, InfoIcon, SaveIcon} from './icons';
import SearchBar from './search-bar';

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
    const {description: [description=''], title: [podcastTitle = ''] = [] } = this.props.podcast;
    const routeParams = this.props.routeParams;
    const imgSrc  = this.props.podcast['itunes:image'][0].$.href ? this.props.podcast['itunes:image'][0].$.href : null;

    const formattedEps = this.props.episodes.map(({pubDate:[pubDate], enclosure, title: [title], guid: [guid],description: [description]}) => {
      return {
        date: new Date(pubDate).toDateString(),
        podcastTitle,
        title,
        description,
        src: enclosure[0].$.url,
        podcastId: routeParams.podcastId,
        id: title,
        imgSrc
      };
    });

    return (
      <div>
        <div className={styles.episodeListHeader}>
          <img src={imgSrc} className={styles.listHeaderImg}/>
          <h2>{podcastTitle}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.episodeListContainer}>
          <SearchBar></SearchBar>
          <table className={styles.episodeList}>
            <tbody>
            {
              formattedEps.map((ep) => (
                <tr key={ep.id} className={styles.episodeListItem} alt={ep.title}>
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
              ))
            }
            </tbody>
          </table>
        </div>  
      </div>
    );
  }
}

export default PodcastEpisodeList;