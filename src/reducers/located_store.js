import {
  LOCATE_OK,
  LOCATE_REQUEST,
  LOCATE_ERROR,
  LOCATE_INPUT_CHANGE
} from '../actions/find_store';

const initialState = {
  store: {},
  loading: false,
  inputVal: '01400301'
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
        ...state,
        store: {
          ...state.store,
          ...action.payload
        },
        loading: false
      };
    case LOCATE_ERROR:
      return {
        ...state,
        loading: false
      };
    case LOCATE_INPUT_CHANGE:
      return {
        ...state,
        inputVal: action.payload
      };
    default:
      return state;
  }
};
