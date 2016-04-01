import { connect } from 'react-redux';
import { locateStore } from '../actions/find_store';
import { REDUCER_KEY } from '../reducers';
import createStoreLocator from '../components/store_locator';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

  const mapStateToProps = (state) => ({
    store: state[REDUCER_KEY].locatedStore
  });

  const mapDispatchToProps = (dispatch) => ({
    findStore(storeId) {
      dispatch(locateStore(storeId));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
