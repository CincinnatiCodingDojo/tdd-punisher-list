export default (React) => {
  const Component = ({ store, findStore, loading }) => {
    let myTextInput = undefined;
    const handleClick = () => findStore(myTextInput.value);

    return (
      <div>
        <input type="text" defaultValue="01400301" ref={(ref) => { myTextInput = ref; }}/>
        <button type="submit" onClick={handleClick}>Find</button>
        <hr />
        { loading && <div className="loading">Loading...</div> }
        <div>{store.brand}</div>
        <div>{store.addressLineOne}</div>
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
