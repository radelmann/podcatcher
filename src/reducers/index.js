import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import podcasts from './podcasts';
import player from './player';
import queue from './queue';

export default combineReducers({routing, podcasts, player, queue});