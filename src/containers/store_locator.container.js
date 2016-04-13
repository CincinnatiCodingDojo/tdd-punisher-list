import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import { getLocalState } from '../reducers/index';
import createStoreLocator from '../components/store_locator';
import { Map } from 'immutable';
import 'react-kuic/dist/kuic.css';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (globalState, ownProps) => {
    const localState = getLocalState(globalState).locatedStore.get(ownProps.id || 1) || Map();
    const { store, inputVal, loading } = localState.toJS();

    return {
      store,
      inputVal,
      loading
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => ({
    locateStore(storeId) {
      dispatch(locateStore({ id: ownProps.id || 1, storeId }));
    },
    inputValChange(newVal) {
      dispatch(inputValChange({ id: ownProps.id || 1, newVal }));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
