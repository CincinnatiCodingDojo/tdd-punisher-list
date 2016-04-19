import React from 'react';
import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import StoreLocator from '../components/store_locator';

const mapStateToProps = (state) => {
  const { store, inputVal, loading } = state.locatedStore.toJS();

  return {
    store,
    inputVal,
    loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  locateStore(storeId) {
    dispatch(locateStore(storeId));
  },
  inputValChange(newVal) {
    dispatch(inputValChange(newVal));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
