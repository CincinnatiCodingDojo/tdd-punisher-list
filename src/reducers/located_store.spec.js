import test from 'ava';
import reducer from './located_store';
import {
  LOCATE_OK,
  LOCATE_REQUEST,
  LOCATE_ERROR
} from '../actions/find_store';

test('returns the default state', (assert) => {
  const initialState = undefined;
  const action = {};
  const reducedState = reducer(initialState, action);
  const expectedState = { store: {}, loading: false, inputVal: '01400301' };

  assert.same(reducedState, expectedState);
});

test('sets loading to true on LOCATE_REQUEST', (assert) => {
  const initialState = undefined;
  const action = { type: LOCATE_REQUEST };
  const reducedState = reducer(initialState, action);

  assert.true(reducedState.loading);
});

test('sets loading to false on LOCATE_OK', (assert) => {
  const initialState = { store: {}, loading: true };
  const action = { type: LOCATE_OK };
  const reducedState = reducer(initialState, action);

  assert.false(reducedState.loading);
});

test('merges response with state on LOCATE_OK', (assert) => {
  const initialState = { store: { foo: true } };
  const action = { type: LOCATE_OK, payload: { bar: true } };

  const reducedState = reducer(initialState, action);
  const expectedState = {
    store: { foo: true, bar: true },
    loading: false
  };

  assert.same(reducedState, expectedState);
});

test('sets loading to false on LOCATE_ERROR', (assert) => {
  const initialState = { store: {}, loading: true };
  const action = { type: LOCATE_ERROR };
  const reducedState = reducer(initialState, action);

  assert.false(reducedState.loading);
});
