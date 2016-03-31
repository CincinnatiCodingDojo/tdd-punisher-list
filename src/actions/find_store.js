import axios from 'axios';

export const LOCATE_REQUEST = 'clicklist/storeLocator/LOCATE_REQUEST';
export const LOCATE_OK = 'clicklist/storeLocator/LOCATE_OK';
export const LOCATE_ERROR = 'clicklist/storeLocator/LOCATE_ERROR';

const locateStoreRequest = () => {
  return {
    type: LOCATE_REQUEST
  };
};

const locateStoreOk = (payload) => {
  return {
    type: LOCATE_OK,
    payload
  };
};

const locateStoreError = (payload) => {
  return {
    type: LOCATE_ERROR,
    payload,
    error: true
  };
};

export function locateStore(storeId) {
  return (dispatch) => {
    dispatch(locateStoreRequest());

    const payload = `store(storeId:"${storeId}"){addressLineOne}`;

    return axios
      .post('http://localhost:8080/graphql', {
        query: `query { ${payload} }`
      })
      .then((res) => {
        dispatch(locateStoreOk(res.data));
      })
      .catch((err) => {
        dispatch(locateStoreError(err));
      });
  };
}
