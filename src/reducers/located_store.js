import { locateStore, inputValChange } from '../actions/find_store';
import { createReducer } from 'redux-act';
import { Map } from 'immutable';

const initialState = Map();

export default createReducer({
  [locateStore.request]: (state, { id }) => {
    return state.setIn([id, 'loading'], true);
  },

  [locateStore.ok]: (state, { id, store }) => {
    return state
      .mergeIn([id, 'store'], store)
      .setIn([id, 'loading'], false);
  },

  [locateStore.error]: (state, { id }) => {
    return state.setIn([id, 'loading'], false);
  },

  [inputValChange]: (state, { id, newVal }) => {
    return state.setIn([id, 'inputVal'], newVal);
  }
}, initialState);
