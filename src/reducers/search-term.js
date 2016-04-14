import { SET_SEARCH_TERM } from '../actions';
import { createReducer } from '../utils';

const setSearchTerm = (state = '', action) => {
  return action.searchTerm;
};

const handlers = {
  [SET_SEARCH_TERM]: setSearchTerm
};

export default createReducer('', handlers);