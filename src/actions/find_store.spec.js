import test from 'ava';
import nock from 'nock';
import sinon from 'sinon';
import {
  LOCATE_REQUEST,
  LOCATE_OK,
  LOCATE_ERROR,
  locateStore
} from './find_store';

function respondOk() {
  nock('http://localhost:8080')
    .intercept('/graphql', 'POST')
    .reply(200, 'OK');
}

function respondFail() {
  nock('http://localhost:8080')
    .intercept('/graphql', 'POST')
    .replyWithError('oh no');
}

test('LOCATE_REQUEST returns the properly namespaced action', (assert) => {
  assert.is(
    LOCATE_REQUEST,
    'clicklist/storeLocator/LOCATE_REQUEST'
  );
});

test('LOCATE_OK returns the properly namespaced action', (assert) => {
  assert.is(
    LOCATE_OK,
    'clicklist/storeLocator/LOCATE_OK'
  );
});

test('LOCATE_ERROR returns the properly namespaced action', (assert) => {
  assert.is(
    LOCATE_ERROR,
    'clicklist/storeLocator/LOCATE_ERROR'
  );
});

test('locateStore dispatches LOCATE_REQUEST immediately', (assert) => {
  respondOk();

  const dispatch = sinon.spy();
  const locateStoreThunk = locateStore('puppies');

  locateStoreThunk(dispatch);

  assert.true(dispatch.calledWith({
    type: LOCATE_REQUEST
  }));
});

test('locateStore calls graphql with correct store id', async (assert) => {
  const graphql = nock('http://localhost:8080')
    .post('/graphql', {
      query: 'query { store(storeId:"kitties"){addressLineOne,brand} }'
    })
    .reply(200, 'OK');

  await locateStore('kitties')(sinon.spy());

  assert.true(graphql.isDone(), '/graphql called with correct storeId');
});

test('locateStore dispatches LOCATE_OK on successful request', async (assert) => {
  respondOk();

  const dispatch = sinon.spy();

  await locateStore('puppies')(dispatch);

  assert.true(dispatch.calledWith({
    type: LOCATE_OK,
    payload: 'OK'
  }));
});

test('locateStore dispatches LOCATE_ERROR on failed request', async (assert) => {
  respondFail();

  const dispatch = sinon.spy();

  await locateStore('puppies')(dispatch);

  assert.true(dispatch.calledWith({
    type: LOCATE_ERROR,
    error: true,
    payload: sinon.match.has('message', 'oh no')
  }));
});
