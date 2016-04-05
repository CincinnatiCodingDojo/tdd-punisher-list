export default (React) => {
  const Component = ({ store, locateStore, loading, inputVal, inputValChange }) => {
    const handleInputChange = (evt) => inputValChange(evt.target.value);
    const handleClick = () => locateStore(inputVal);

    return (
      <div className="StoreLocator">
        <input type="text" value={inputVal} onChange={handleInputChange}/>
        <button type="submit" onClick={handleClick}>Find</button>
        <hr />
        { loading && <div className="StoreLocator-loading">Loading...</div> }
        { store && (
          <div className="StoreLocator-results">
            <div>{store.brand}</div>
            <div>{store.addressLineOne}</div>
          </div>
        )}
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
