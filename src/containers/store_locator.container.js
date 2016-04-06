import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import { getLocalState } from '../reducers';
import createStoreLocator from '../components/store_locator';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (globalState) => {
    const { store, inputVal, loading } = getLocalState(globalState).locatedStore;

    return {
      store,
      inputVal,
      loading
    };
  };

  const mapDispatchToProps = {
    locateStore,
    inputValChange
  };

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
