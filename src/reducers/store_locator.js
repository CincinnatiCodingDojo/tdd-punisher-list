const initialState = {
  storeNumber: '',
  phoneNumber: '',
  storeType: '',
  brand: '',
  vanityName: '',
  address: {
    addressLineOne: '',
    city: '',
    state: '',
    zipCode: ''
  },
  latLong: {
    latitude: '',
    longitude: ''
  },
  distance: '',
  timeZone: '',
  recordId: '',
  localName: '',
  legalName: '',
  divisionNumber: '',
  loyaltyDivisionNumber: ''
};

export default (state = initialState, action) => {
  return state;
};
