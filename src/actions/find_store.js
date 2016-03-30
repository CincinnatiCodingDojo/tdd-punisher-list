import axios from 'axios';

export const LOCATE_REQUEST = 'clicklist/storeLocator/LOCATE_REQUEST';
export const LOCATE_OK = 'clicklist/storeLocator/LOCATE_OK';
export const LOCATE_ERROR = 'clicklist/storeLocator/LOCATE_ERROR';

const locateStoreRequest = () => {
  return {
    type: LOCATE_REQUEST
  };
};

const locateStoreOk = (response) => {
  return {
    type: LOCATE_OK,
    response
  };
};

const locateStoreError = (err) => {
  return {
    type: LOCATE_ERROR,
    err
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
        dispatch(locateStoreOk(res));
      })
      .catch((err) => {
        dispatch(locateStoreError(err));
        throw err;
      });
  };
}
