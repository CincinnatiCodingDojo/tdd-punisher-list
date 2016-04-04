import { connect } from 'react-redux';
import { locateStore } from '../actions/find_store';
import { REDUCER_KEY } from '../reducers';
import createStoreLocator from '../components/store_locator';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (state) => {
    const { store, loading } = state[REDUCER_KEY].locatedStore;

    return {
      store,
      loading
    };
  };

  const mapDispatchToProps = {
    findStore: locateStore
  };

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
