import React from 'react';

export default ({ store }) => {
  return (
    <div className="StoreLocator-results">
      <div>{store.brand}</div>
      <div>{store.addressLineOne}</div>
    </div>
  );
};
