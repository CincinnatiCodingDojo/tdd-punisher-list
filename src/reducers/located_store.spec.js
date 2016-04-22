/**
 * Import libs to help with testing:
 * - redux-act: to create our reducer
 * - immutablejs: to help keep our state immutable
 * - our actions we want to test.
 */
import { createStore } from 'redux';
import { Map } from 'immutable';
import reducer from './located_store';
import { locateStore, inputValChange } from '../actions/find_store';
const { describe, it } = global;

// We have to set up a way to create a store within each test so we can dispatch actions against it.
const initStore = (initialState) => {
  return createStore(reducer, initialState);
};

/**
 * Reducer tests all follow the same pattern.
 * 1. set up initial state
 * 2. init your store
 * 3. construct your action
 * 4. "before" assertion
 * 5. dispatch an action
 * 6. "after" assertion
 */

describe('Located Store Reducer', () => {
  it('sets loading to true for the specified id on locateStore.request', () => {
    // Set up your initial state. It's safest to use Map().merge because it will work well with any
    // depth of js objects that are passed to it. It converts each depth to its own immutable Map.
    const initialState = Map().merge({ loading: false });
    const store = initStore(initialState);
    const action = locateStore.request({id: 1});

    // We test the initial state, before the action
    store.getState().get('loading').should.be.false;

    store.dispatch(action);

    // Then we test the state after the action
    store.getState().get('loading').should.be.true;
  });

  it('sets loading to false on locateStore.ok', () => {
    const initialState = Map().merge({ loading: true });
    const store = initStore(initialState);
    const action = locateStore.ok({});

    store.getState().get('loading').should.be.true;

    store.dispatch(action);

    store.getState().get('loading').should.be.false;
  });

  it('merges response with state on locateStore.ok', () => {
    const initialState = Map().mergeIn(['store'], { foo: true });
    const store = initStore(initialState);
    const action = locateStore.ok({ bar: true });

    store.getState().get('store').should.have.all.keys('foo');

    store.dispatch(action);

    store.getState().get('store').should.have.all.keys('foo', 'bar');
  });

  it('sets loading to false on locateStore.error', () => {
    const initialState = Map().merge({ loading: true });
    const store = initStore(initialState);
    const action = locateStore.error();

    store.getState().get('loading').should.be.true;

    store.dispatch(action);

    store.getState().get('loading').should.be.false;
  });

  it('sets inputVal on inputValChange', () => {
    const initialState = Map().merge({ inputVal: 'puppies?' });
    const store = initStore(initialState);
    const action = inputValChange('kittens!');

    store.getState().get('inputVal').should.equal('puppies?');

    store.dispatch(action);

    store.getState().get('inputVal').should.equal('kittens!');
  });
});
