import { connect } from 'react-redux';
import { locateStore } from '../actions/find_store';
import { REDUCER_KEY } from '../reducers';

export default (React) => {
  const StoreLocator = React.createClass({
    handleClick() {
      this.props.findStore(this.myTextInput.value);
    },

    render() {
      return (
        <div>
            <input type="text" defaultValue="01400301" ref={(ref) => { this.myTextInput = ref; }}/>
            <button type="submit" onClick={this.handleClick}>Find</button>
            <hr />
            <div>{this.props.store.addressLineOne}</div>
        </div>
      );
    }
  });

  const mapStateToProps = (state) => {
    return {
      store: state[REDUCER_KEY].locatedStore
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      findStore(storeId) {
        dispatch(locateStore(storeId));
      }
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(StoreLocator);
};
