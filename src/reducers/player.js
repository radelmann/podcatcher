import { CLEAR_PODCAST_EPISODE, LOAD_PODCAST_EPISODE } from '../actions';
import { createReducer } from '../utils';

const loadEpisode = (state, {payload}) => ({...state, ...payload});

const clearEpisode = (state) => {return {}};

const handlers = {
  [LOAD_PODCAST_EPISODE]: loadEpisode,
  [CLEAR_PODCAST_EPISODE]: clearEpisode
};

export default createReducer({}, handlers);