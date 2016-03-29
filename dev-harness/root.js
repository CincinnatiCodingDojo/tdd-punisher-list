import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
  reducer,
  createComponent
} from '../src';

const reducers = combineReducers({
  reducer
});

const store = createStore(
    reducers,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

const Component = createComponent(React);

const Root = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

render(<Root />, document.getElementById('root'));
