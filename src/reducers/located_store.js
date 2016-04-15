import { locateStore, inputValChange } from '../actions/find_store';
import { createReducer } from 'redux-act';
import { Map } from 'immutable';

const initialState = Map({ loading: false, inputVal: '01400423' });

export default createReducer({
  [locateStore.request]: (state) => {
    return state.set('loading', true);
  },

  [locateStore.ok]: (state, store) => {
    return state
      .mergeIn(['store'], store)
      .set('loading', false);
  },

  [locateStore.error]: (state) => {
    return state.set('loading', false);
  },

  [inputValChange]: (state, newVal) => {
    return state.set('inputVal', newVal);
  }
}, initialState);
