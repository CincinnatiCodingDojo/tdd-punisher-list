import Component from './containers/store_locator.container';
import reducer from './reducers';

/**
 * This index MUST export createComponent and reducer to work
 * with the dev harness.
 */
export {

  /**
   * A React component
   * @function
   * @returns {Component} The component
   */
  Component,

  /**
   * The redux reducer
   * @function
   * @returns {Reducer} The component's top level reducer
   */
  reducer
};
