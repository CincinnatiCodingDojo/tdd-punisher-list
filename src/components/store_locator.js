import React from 'react';
import StoreLocatorResult from './store_locator_result';
import { Text, Grid, GridCell, Input, Button, Spinner } from 'react-kuic';
import 'react-kuic/lib/kuic.css';
import './store_locator.css';

const StoreLocator = ({ store={}, locateStore, loading, inputVal, inputValChange }) => {
  const handleInputChange = (evt) => inputValChange(evt.target.value);
  const handleClick = () => locateStore(inputVal);

  return (
    <Text className="StoreLocator" size="14">
      <h3>Store Locator</h3>

      <Grid gutters center>
        <GridCell>
          <Input className="StoreLocator-input" kind="text" value={inputVal} onChange={handleInputChange}/>
        </GridCell>
        <GridCell shrink>
          <Button className="StoreLocator-btn" type="submit" onClick={handleClick}>Hello</Button>
        </GridCell>
      </Grid>
      { loading ?
        <Spinner className="StoreLocator-loading"/> :
        <StoreLocatorResult className="StoreLocator-results" store={store}/> }
    </Text>
  );
};

const { shape, string, func, bool } = React.PropTypes;

StoreLocator.propTypes = {
  store: shape({
    brand: string,
    addressLineOne: string
  }),
  findStore: func,
  loading: bool
};

export default StoreLocator;
