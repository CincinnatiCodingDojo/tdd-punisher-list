import axios from 'axios';
import { createAction } from 'redux-act';
import { createActionAsync } from 'redux-act-async';

export const locateStore = createActionAsync('clicklist/storeLocator/LOCATE_STORE', locateApi);
export const inputValChange = createAction('clicklist/storeLocator/LOCATE_INPUT_CHANGE');

function locateApi(storeId) {
  const query = `{
    store(storeId:"${storeId}") {
      addressLineOne,
      brand
    }
  }`;

  const mapToPayload = ({ data }) => data.data.store;

  // We are using axios, which works for any BFF, but if you are doing
  // GraphQL you should consider using Lokka: https://github.com/kadirahq/lokka
  return axios
    .post('http://localhost:8080/graphql', { query })
    .then(mapToPayload);
}
