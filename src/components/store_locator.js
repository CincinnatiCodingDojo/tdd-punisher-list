import createStoreResult from './store_locator_result';
import { Button, Input } from 'react-kuic';

export default (React) => {
  const StoreLocatorResult = createStoreResult(React);

  const Component = ({ store, locateStore, loading, inputVal, inputValChange }) => {
    const handleInputChange = (evt) => inputValChange(evt.target.value);
    const handleClick = () => locateStore(inputVal);

    const showStoreResult = () => {
      if (Object.keys(store || {}).length) {
        return <StoreLocatorResult store={store} />;
      }
    };

    return (
      <div className="StoreLocator">
        <Input type="text" value={inputVal} onChange={handleInputChange}/>
        <Button type="submit" onClick={handleClick}>Find</Button>
        <hr />
        { loading && <div className="StoreLocator-loading">Loading...</div> }
        { showStoreResult() }
      </div>
    );
  };

  const { shape, string, func, bool } = React.PropTypes;

  Component.propTypes = {
    store: shape({
      brand: string,
      addressLineOne: string
    }),
    findStore: func,
    loading: bool
  };

  return Component;
};
