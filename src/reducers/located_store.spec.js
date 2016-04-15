import {createStore} from 'redux';
import {Map} from 'immutable';
import reducer from './located_store';
import {locateStore, inputValChange} from '../actions/find_store';
const { describe, it } = global;

const initStore = (initialState) => {
  return createStore(reducer, initialState);
};

describe('Located Store Reducer', () => {
  it('sets loading to true for the specified id on locateStore.request', () => {
    const initialState = Map().merge({ loading: false });
    const store = initStore(initialState);
    const action = locateStore.request({id: 1});

    store.dispatch(action);
    store.getState().get('loading').should.be.true;
  });

  it('sets loading to false on locateStore.ok', () => {
    const initialState = Map().merge({ loading: true });
    const store = initStore(initialState);
    const action = locateStore.ok({});

    store.dispatch(action);
    store.getState().get('loading').should.be.false;
  });

  it('merges response with state on locateStore.ok', () => {
    const initialState = Map().mergeIn(['store'], { foo: true });
    const store = initStore(initialState);
    const action = locateStore.ok({ bar: true });

    store.dispatch(action);
    store.getState().get('store').should.have.keys({
      foo: true,
      bar: true
    });
  });

  it('sets loading to false on locateStore.error', () => {
    const initialState = Map().merge({ loading: true });
    const store = initStore(initialState);
    const action = locateStore.error();

    store.dispatch(action);
    store.getState().get('loading').should.be.false;
  });

  it('sets inputVal on inputValChange', () => {
    const initialState = Map().merge({ inputVal: '' });
    const store = initStore(initialState);
    const action = inputValChange('kittens!');

    store.dispatch(action);
    store.getState().get('inputVal').should.equal('kittens!');
  });
});
