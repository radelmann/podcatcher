import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';


class PodcastEpisodeList extends Component {
  render() {
    const {title: [podcastTitle = ''] = [], item: episodes = [], routeParams} = this.props;

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
                onClick={() => this.props.addEpisodeToQueue(ep)}>
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


const mapStateToProps = (state, {routeParams}) => state.podcasts[routeParams.podcastId] || {};
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);
