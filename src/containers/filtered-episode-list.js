import { connect } from 'react-redux';
import PodcastEpisodeList from '../views/podcast-episode-list';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';

const getFilteredList = (podcast, searchTerm) => {
  if (searchTerm === '') {
    return podcast.item;
  } else {
    return podcast.item.filter(e => e.title[0].toLowerCase().includes(searchTerm.toLowerCase()));
  }
};

const mapStateToProps = (state, { routeParams }) => {
  return {
    podcast: state.podcasts[routeParams.podcastId],
    episodes: getFilteredList(state.podcasts[routeParams.podcastId], state.searchTerm),
    player: state.player  
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

const FilteredEpisodeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);

export default FilteredEpisodeList;