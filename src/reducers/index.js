import { combineReducers } from 'redux';
import locatedStore from './located_store';

export const REDUCER_KEY = 'storeLocator';

export default combineReducers({
  locatedStore
});
