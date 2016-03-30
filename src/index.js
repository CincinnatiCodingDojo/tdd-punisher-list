import createComponent from './containers/store_locator';
import reducer, { REDUCER_KEY } from './reducers';

/** @module ShoppingGrid */
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
   * The redux reducer key
   * @string
   */
  REDUCER_KEY
};
