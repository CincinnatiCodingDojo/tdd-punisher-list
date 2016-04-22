import { combineReducers } from 'redux';
import locatedStore from './located_store';

// Combining your reducers into one is only really necessary if you have multiple
// child reducers. Otherwise you can skip this step and just `export default locatedStore`
export default combineReducers({
  locatedStore
});
