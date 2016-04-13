import createStoreResult from './store_locator_result';
import { Button, Input, Spinner, Text } from 'react-kuic';

export default (React) => {
  const StoreLocatorResult = createStoreResult(React);

  const Component = ({ store, locateStore, loading, inputVal, inputValChange }) => {
    const handleInputChange = (evt) => inputValChange(evt.target.value);
    const handleClick = () => locateStore(inputVal);

    return (
      <Text className="StoreLocator" size="14">
        <Text size="16">Store Locator</Text>
        <br/>
        <Input className="StoreLocator-input" kind="text" value={inputVal} onChange={handleInputChange}/>
        <Button className="StoreLocator-btn" type="submit" onClick={handleClick}>Hello</Button>
        <br/>
        { loading ?
          <Spinner className="StoreLocator-loading" /> :
          <StoreLocatorResult className="StoreLocator-results" store={store || {}} /> }
      </Text>
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
