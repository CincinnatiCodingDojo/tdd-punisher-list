import React from 'react';
import { connect } from 'react-redux';
import { locateStore, inputValChange } from '../actions/find_store';
import StoreLocator from '../components/store_locator';

/**
 * We want to keep all of redux related logic in one place. So we import our dumb component
 * and then "connect" it to redux via the `connect` method. Avoid putting any additional UI
 * logic in this container, it should be purely for redux connection logic.
 *
 * `connect` docs:
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */

/**
 * mapStateToProps is used to take the redux state and construct a props object that the
 * dumb component will receive. The dumb component has no idea where the props come from
 * so this is how we keep our component decoupled from our redux state.
 */

const mapStateToProps = (state) => {
  const { store, inputVal, loading } = state.locatedStore.toJS();

  return {
    store,
    inputVal,
    loading
  };
};

/**
 * mapDispatchToProps is only needed if your component will have callback props that
 * will be dispatching a redux action.
 */

const mapDispatchToProps = (dispatch) => ({
  locateStore(storeId) {
    dispatch(locateStore(storeId));
  },
  inputValChange(newVal) {
    dispatch(inputValChange(newVal));
  }
});

/**
 * If you need to trigger an action right away when a component is added to the page, use this
 * commented out pattern. In this example, it is triggering the locateStore action. Then you'd
 * pass the wrapped component, StoreLocatorWithMount, to the connect function instead.
 *

 const StoreLocatorWithMount = React.createClass({
  componentDidMount() {
    this.props.locateStore('01400301');
  },
  render() {
    return <StoreLocator {...this.props} />
  }
});
 */

// And here we finally do the actual connecting
export default connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
