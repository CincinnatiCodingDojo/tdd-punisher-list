import {
  LOCATE_OK,
  LOCATE_REQUEST,
  LOCATE_ERROR
} from '../actions/find_store';

const initialState = {
  addressLineOne: '',
  searchOriginDistance: '',
  managementDivisionNumber: '',
  storeNumber: '',
  facilityName: '',
  brand: '',
  legalName: '',
  loyaltyDivisionNumber: '',
  phoneNumber: '',
  storeType: '',
  vanityName: '',
  city: '',
  state: '',
  zipCode: '',
  latLong: '',
  timeZone: '',
  sundayClose: '',
  sundayOpen: '',
  mondayClose: '',
  mondayOpen: '',
  tuesdayClose: '',
  tuesdayOpen: '',
  wednesdayClose: '',
  wednesdayOpen: '',
  thursdayClose: '',
  thursdayOpen: '',
  fridayClose: '',
  fridayOpen: '',
  saturdayClose: '',
  saturdayOpen: '',
  departments: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATE_REQUEST:
      return state;
    case LOCATE_OK:
      return {
        ...state,
        ...action.payload.data.store
      };
    case LOCATE_ERROR:
      return state;
    default:
      return state;
  }
};
