import {MOVE_QUEUE_ITEM, ADD_EPISODE_TO_QUEUE, REMOVE_EPISODE_FROM_QUEUE} from '../actions';
import update from 'react/lib/update';
import {createReducer} from '../utils';

const addEpisodeToQueue = (state, {payload}) =>
  [ ...state, payload]

const removeEpisodeFromQueue = (state, {payload}) => 
  state.filter(item => item.id !== payload.id)

//move queue item from one index to another index
//adjust indexes accordingly
const moveQueueItem = (state, {payload}) => {
  const dragItem = state[payload.from];
  return update(state, {
      $splice: [
        [payload.from, 1],
        [payload.to, 0, dragItem]
      ]
    }
  );
}

const handlers = {
  [ADD_EPISODE_TO_QUEUE]: addEpisodeToQueue,
  [REMOVE_EPISODE_FROM_QUEUE]: removeEpisodeFromQueue,
  [MOVE_QUEUE_ITEM]: moveQueueItem
};

export default createReducer({}, handlers);