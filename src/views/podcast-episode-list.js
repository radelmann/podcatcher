import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';
import SearchBar from './search-bar';
import PodcastEpisodeListItem from './podcast-episode-list-item';

class PodcastEpisodeList extends Component {
  constructor(props) {
    super(props);
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
                <PodcastEpisodeListItem key={ep.id} ep={ep} />
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