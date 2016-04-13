import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import { getLocalState } from '../reducers/index';
import createStoreLocator from '../components/store_locator';
import { Map } from 'immutable';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (globalState, ownProps) => {
    const localState = getLocalState(globalState).locatedStore.get(ownProps.id) || Map();
    const { store, inputVal, loading } = localState.toJS();

    return {
      store,
      inputVal,
      loading
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => ({
    locateStore(storeId) {
      dispatch(locateStore({ id: ownProps.id, storeId }));
    },
    inputValChange(newVal) {
      dispatch(inputValChange({ id: ownProps.id, newVal }));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
