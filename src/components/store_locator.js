import createStoreResult from './store_locator_result';

export default (React) => {
  const StoreLocatorResult = createStoreResult(React);

  const Component = ({ store, locateStore, loading, inputVal, inputValChange }) => {
    const handleInputChange = (evt) => inputValChange(evt.target.value);
    const handleClick = () => locateStore(inputVal);

    const showStoreResult = () => Object.keys(store || {}).length &&
      <StoreLocatorResult store={store} />;

    return (
      <div className="StoreLocator">
        <input type="text" value={inputVal} onChange={handleInputChange}/>
        <button type="submit" onClick={handleClick}>Find</button>
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
