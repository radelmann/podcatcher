import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';


class PodcastEpisodeList extends Component {
  itemClick(ep) {
    if (this.props.player.src) {
      this.props.addEpisodeToQueue(ep);  
    } else {
      this.props.loadPodcastEpisode(ep);
    }
  }
  
  constructor(props) {
    super(props);

    this.itemClick = this.itemClick.bind(this);
  }
  render() {
    const {title: [podcastTitle = ''] = [], item: episodes = [] } = this.props.podcast;

    const routeParams = this.props.routeParams;

    const formattedEps = episodes.map(({enclosure, title: [title]}) => {
      return {
        podcastTitle,
        title,
        src: enclosure[0].$.url,
        podcastId: routeParams.podcastId
      };
    });

    return (
      <div className={styles.episodeListContainer}>
        <h1>{podcastTitle}</h1>
        <ul className={styles.episodeList}>
          {
            formattedEps.map((ep) => (
              <li key={ep.title} className={styles.episodeListItem} alt={ep.title}
                onClick={() => this.itemClick(ep) }>
                <div>
                  {ep.title}
                </div>
              </li>
            ))
          }
        </ul>
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
