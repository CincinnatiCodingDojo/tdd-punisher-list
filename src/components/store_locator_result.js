export default (React) => ({ store }) => {
  return (
    <div className="StoreLocator-results">
      <div>{store.brand}</div>
      <div>{store.addressLineOne}</div>
    </div>
  );
};
