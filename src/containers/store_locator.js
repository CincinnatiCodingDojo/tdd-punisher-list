import { connect } from 'react-redux';

export default (React) => {
  const StoreLocator = React.createClass({
    render() {
      return (
        <div>Store Locator</div>
      );
    }
  });

  return connect()(StoreLocator);
};
