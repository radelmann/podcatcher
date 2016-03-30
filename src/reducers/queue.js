import {ADD_EPISODE_TO_QUEUE, REMOVE_EPISODE_FROM_QUEUE} from '../actions';
import {createReducer} from '../utils';

const addEpisodeToQueue = (state, {payload}) =>
  [ ...state, payload]

const removeEpisodeFromQueue = (state, {payload}) => 
  state.filter(item => item !== payload)

const handlers = {
  [ADD_EPISODE_TO_QUEUE]: addEpisodeToQueue,
  [REMOVE_EPISODE_FROM_QUEUE]: removeEpisodeFromQueue
};

export default createReducer({}, handlers);