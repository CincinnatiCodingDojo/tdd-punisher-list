import {
  LOCATE_OK,
  LOCATE_REQUEST,
  LOCATE_ERROR
} from '../actions/find_store';

const initialState = {
  store: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOCATE_OK:
      return {
        store: {
          ...state.store,
          ...action.payload
        },
        loading: false
      };
    case LOCATE_ERROR:
      return {
        store: {
          ...state.store
        },
        loading: false
      };
    default:
      return state;
  }
};
