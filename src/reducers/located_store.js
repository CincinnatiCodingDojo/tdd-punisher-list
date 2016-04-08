import { locateStore, inputValChange } from '../actions/find_store';
import { createReducer } from 'redux-act';

const initialState = {
  store: {},
  loading: false,
  inputVal: '01400301'
};

export default createReducer({

  [locateStore.request]: (state, payload) => ({
    ...state,
    loading: true
  }),

  [locateStore.ok]: (state, payload) => ({
    ...state,
    store: {
      ...state.store,
      ...payload
    },
    loading: false
  }),

  [locateStore.error]: (state, payload) => ({
    ...state,
    loading: false
  }),

  [inputValChange]: (state, payload) => ({
    ...state,
    inputVal: payload
  })

}, initialState);
