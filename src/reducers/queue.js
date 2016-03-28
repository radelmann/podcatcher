import {ADD_EPISODE_TO_QUEUE} from '../actions';
import {createReducer} from '../utils';

const addEpisodeToQueue = (state, {payload}) =>
  [ payload.episode, ...state]

const handlers = {
  [ADD_EPISODE_TO_QUEUE]: addEpisodeToQueue
};

export default createReducer({}, handlers);