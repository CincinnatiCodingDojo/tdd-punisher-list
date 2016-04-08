import { combineReducers } from 'redux';
import locatedStore from './located_store';

const reducer = (path) => combineReducers({
  locatedStore
});

/////////// external api

// todo: might not need to nest

let REDUCER_PATH = '__unnamed__';

export const getLocalState = (state, path = REDUCER_PATH.split('.')) => {
  let [nextKey, ...restKeys] = path;

  if (restKeys.length === 0) {
    return state[nextKey];
  } else {
    return getLocalState(state[nextKey], restKeys);
  }
};

export default (key) => {
  REDUCER_PATH = key;
  return reducer(REDUCER_PATH);
}
