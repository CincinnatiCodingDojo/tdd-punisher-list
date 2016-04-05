import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import { REDUCER_KEY } from '../reducers';
import createStoreLocator from '../components/store_locator';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (state) => {
    const { store, inputVal, loading } = state[REDUCER_KEY].locatedStore;

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
