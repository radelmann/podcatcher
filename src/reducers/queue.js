import {MOVE_QUEUE_ITEM, ADD_EPISODE_TO_QUEUE, REMOVE_EPISODE_FROM_QUEUE} from '../actions';
import {createReducer} from '../utils';

const addEpisodeToQueue = (state, {payload}) =>
  [ ...state, payload]

const removeEpisodeFromQueue = (state, {payload}) => 
  state.filter(item => item !== payload)

//move queue item from one index to another index
//adjust indexes accordingly
const moveQueueItem = (state, {payload}) => {
  console.log(payload);
  var newState = state.slice();
  if (payload.to >= newState.length) {
      var k = payload.to - newState.length;
      while ((k--) + 1) {
          newState.push(undefined);
      }
  }
  newState.splice(payload.to, 0, newState.splice(payload.from, 1)[0]);
  return newState;
}
  

const handlers = {
  [ADD_EPISODE_TO_QUEUE]: addEpisodeToQueue,
  [REMOVE_EPISODE_FROM_QUEUE]: removeEpisodeFromQueue,
  [MOVE_QUEUE_ITEM]: moveQueueItem
};

export default createReducer({}, handlers);