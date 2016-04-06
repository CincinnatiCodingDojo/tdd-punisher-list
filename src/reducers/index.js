import { combineReducers } from 'redux';
import locatedStore from './located_store';

let REDUCER_KEY = '__unnamed__';

export const getLocalState = (globalState) => globalState[REDUCER_KEY];

export default (key) => {
  REDUCER_KEY = key;
  return combineReducers({
    locatedStore
  });
}
