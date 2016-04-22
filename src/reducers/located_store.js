/**
 * To learn more about why we chose redux act look in actions/find_store.js comments.
 */
import { createReducer } from 'redux-act';

/**
 * We chose immutablejs to enforce immutability in our state transformations. You don't have to use it.
 * See the bottom of this file for how to manually return immutably-constructed objects.
 *
 * docs: https://facebook.github.io/immutable-js/docs/#/Map
 */
import { Map } from 'immutable';
import { locateStore, inputValChange } from '../actions/find_store';

// Set up our initial state as an immutablejs Map object
const initialState = Map({ loading: false, inputVal: '01400423' });

// Use redux-act to create a reducer. Each key is a reference to the unique action objects.\
// Each value is a function that takes the state and the payload and returns the new state.
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

/**
 * The above succinct code is equivalent to boilerplate below:

  import {
    LOCATE_STORE_REQUEST,
    LOCATE_STORE_OK,
    LOCATE_STORE_ERROR,
    INPUT_VAL_CHANGE
  } from '../actions/find_store';

  const initialState = { loading: false, inputVal: '01400423' };

  export default (state = initialState, action) => {
    switch(state) {
      case LOCATE_STORE_REQUEST:
        return {
          ...state,
          loading: true
        };
      case LOCATE_STORE_OK:
        return {
          ...state,
          loading: false,
          store: action.payload
        };
      case LOCATE_STORE_ERROR:
        return {
          ...state,
          loading: false
        };
      case INPUT_VAL_CHANGE:
        return {
          ...state,
          inputVal: action.payload
        };
      default:
    }
  }
*/
