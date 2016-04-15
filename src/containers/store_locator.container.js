import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import createStoreLocator from '../components/store_locator';
import 'react-kuic/lib/kuic.css';
import '../style/index.css';

export default (React) => {
  const StoreLocator = createStoreLocator(React);

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

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
