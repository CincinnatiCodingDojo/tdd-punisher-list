import createComponent from './containers/store_locator.container';
import reducer from './reducers';

/**
 * This index MUST export createComponent and reducer to work
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
  reducer
};
