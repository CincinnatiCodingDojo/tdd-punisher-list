export default (React) => {
  const { shape, string, func } = React.PropTypes;

  const Component = ({ store, findStore }) => {
    let myTextInput = null;
    const handleClick = () => findStore(myTextInput.value);

    return (
      <div>
        <input type="text" defaultValue="01400301" ref={(ref) => { myTextInput = ref; }}/>
        <button type="submit" onClick={handleClick}>Find</button>
        <hr />
        <div>{store.brand}</div>
        <div>{store.addressLineOne}</div>
      </div>
    );
  };

  Component.propTypes = {
    store: shape({
      brand: string,
      addressLineOne: string
    }),
    findStore: func
  };

  return Component;
};
