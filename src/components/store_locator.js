import React from 'react';
import StoreLocatorResult from './store_locator_result';
// We've imported several kuic components for 'quick' development ;)
import { Text, Grid, GridCell, Input, Button, Spinner } from 'react-kuic';
import 'react-kuic/lib/kuic.css';
import './store_locator.css';

// We are using functional stateless components here and destructuring the props that we care about
const StoreLocator = ({ store={}, locateStore, loading, inputVal, inputValChange }) => {
  // We can add handlers and helper methods up here
  const handleInputChange = (evt) => inputValChange(evt.target.value);
  const handleClick = () => locateStore(inputVal);

  // We return the JSX
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

// PropTypes are a way to enforce your components attribute contract.
// If there are errors they will appear only in the console logs, these are not
// compile-time type checks!
const { shape, string, func, bool } = React.PropTypes;

StoreLocator.propTypes = {
  loading: bool,
  store: shape({
    brand: string,
    addressLineOne: string
  }),
  locateStore: func,
  inputVal: string,
  inputValChange: func
};

export default StoreLocator;
