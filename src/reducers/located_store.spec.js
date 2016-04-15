import {createStore} from 'redux';
import {assignAll} from 'redux-act';
import {Map} from 'immutable';
import reducer from './located_store';
import {locateStore, inputValChange} from '../actions/find_store';
const { describe, it } = global;

const initStore = (initialState) => {
  const store = createStore(reducer, initialState);
  return store;
};

describe('Located Store Reducer', () => {
  it('sets loading to true for the specified id on locateStore.request', () => {
    const initialState = Map().mergeIn([1], {loading: false});
    const store = initStore(initialState);
    const action = locateStore.request({id: 1});

    store.dispatch(action);
    store.getState().getIn([1, 'loading']).should.be.true;
  });

  it('sets loading to false on locateStore.ok', () => {
    const initialState = Map().mergeIn([1], {loading: true});
    const store = initStore(initialState);
    const action = locateStore.ok({id: 1});

    store.dispatch(action);
    store.getState().getIn([1, 'loading']).should.be.false;
  });

  it('merges response with state on locateStore.ok', () => {
    const initialState = Map().mergeIn([1], {store: {foo: true}});
    const store = initStore(initialState);
    const action = locateStore.ok({id: 1, store: {bar: true}});

    store.dispatch(action);
    store.getState().getIn([1, 'store']).should.have.keys({
      foo: true,
      bar: true
    });
  });

  it('sets loading to false on locateStore.error', () => {
    const initialState = Map().mergeIn([1], {loading: true});
    const store = initStore(initialState);
    const action = locateStore.error({id: 1});

    store.dispatch(action);
    store.getState().getIn([1, 'loading']).should.be.false;
  });

  it('sets inputVal on inputValChange', () => {
    const initialState = Map().mergeIn([1], {inputVal: ''});
    const store = initStore(initialState);
    const action = inputValChange({id: 1, newVal: 'kittens!'});

    store.dispatch(action);
    store.getState().getIn([1, 'inputVal']).should.equal('kittens!');
  });
});
