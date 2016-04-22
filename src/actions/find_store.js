/**
 * We decided to use redux-act and redux-act-async to reduce action and reducer boilerplate. And vitally, actions are
 * not represented as string constants which can lead to conflicts (especially across so many teams).
 *
 * See bottom of this file for the equivalent raw redux implementation.
 *
 * redux-act: https://github.com/pauldijou/redux-act
 * redux-act-async: https://github.com/FredericHeem/redux-act-async
 */
import axios from 'axios';
import { createAction } from 'redux-act';
import { createActionAsync } from 'redux-act-async';

/**
 * Here we use name-spaced action names to promote consistent action logging and readability. The pattern is
 * app/component/ACTION_NAME.
 *
 * Here we create an async action (locateStore) and a regular action (inputValChange). They both take in a string that
 * is used as the id for logging.
 *
 * The async action also takes in a promise-returning function (locateApi). The async action will automatically exec
 * `locateApi`. `locateStore.request` will be dispatched and then either `locateStore.ok` or `locateStore.error` will
 * be dispatched when the promise resolves successfully or with failure.
 */
export const locateStore = createActionAsync('seamless/storeLocator/LOCATE_STORE', locateApi);
export const inputValChange = createAction('seamless/storeLocator/LOCATE_INPUT_CHANGE');

// async api functions will receive the payload if you need it.
function locateApi(storeId) {
  const query = `{
    store(storeId:"${storeId}") {
      addressLineOne,
      brand
    }
  }`;

  // We have to unwrap the axios-specific response to a normalized payload that is reducer friendly. Basically we want
  // to get at the raw data we actually care about in the response.
  const mapToPayload = ({ data }) => data.data.store;

  // We are using axios, which works for any BFF, but if you are doing
  // GraphQL you could consider using Lokka: https://github.com/kadirahq/lokka
  return axios
    .post('http://localhost:8080/graphql', { query })
    .then(mapToPayload);
}

/**
 * The above succinct code is equivalent to boilerplate below:

 const LOCATE_STORE_REQUEST = 'seamless/storeLocator/LOCATE_STORE_REQUEST'
 const LOCATE_STORE_OK = 'seamless/storeLocator/LOCATE_STORE_OK'
 const LOCATE_STORE_ERROR = 'seamless/storeLocator/LOCATE_STORE_ERROR'
 const INPUT_VAL_CHANGE = 'seamless/storeLocator/LOCATE_INPUT_CHANGE'

 const locateStoreRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload
 })

 const locateStoreOk = (payload) => ({
  type: LOGIN_OK,
  payload
 })

 const locateStoreError = (payload) => ({
  type: LOGIN_ERROR,
  payload
 })

 function locateApi(storeId) {
    ... same as above ...
 }

 export const inputValChange = (payload) => ({
  type: INPUT_VAL_CHANGE,
  payload
 })

 export const locateStore = (payload) => {
  return (dispatch) => {
    dispatch(locateStoreRequest(payload));
    return locateApi(payload)
      .then(res => {
        dispatch(locateStoreOk(res))
      })
      .catch(err => {
        dispatch(locateStoreError(err))
        throw err;
      })
 }
 */
