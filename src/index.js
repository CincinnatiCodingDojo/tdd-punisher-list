import createComponent from './containers/store_locator';
import reducer, { REDUCER_KEY } from './reducers';

/**
 * This index MUST export createComponent, reducer, and REDUCER_KEY to work
 * with the dev harness.
 */
export {

  /**
   * A factory function that returns the React component
   * @function
   * @param {Object} React - the react object
   * @returns {Component} The component
   */
  createComponent,

  /**
   * The redux reducer
   * @function
   * @returns {reducer} The component's top level reducer
   */
  reducer,

  /**
   * The name to use when the reducer is added via combineReducers
   * @string
   */
  REDUCER_KEY
};
