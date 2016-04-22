/**
 * We import a couple libs for testing:
 * - nock allows mocking xhr calls and responses
 * - sinon allows mocking functions (fyi, sinon also mocks xhr but it seems buggy)
 */
import nock from 'nock';
import sinon from 'sinon';
import * as actions from './find_store';
const { describe, it } = global;

describe('Store Locator Actions', () => {
  // These tests show you how redux-act actions work just like normal action creators.
  it('constructs the correct actions', () => {
    const assertAction = (actionFn, TYPE) => {
      const action = actionFn('foo');
      action.type.should.contain(`seamless/storeLocator/${TYPE}`);
      action.payload.should.equal('foo');
    };

    assertAction(actions.locateStore.request, 'LOCATE_STORE_REQUEST');
    assertAction(actions.locateStore.ok, 'LOCATE_STORE_OK');
    assertAction(actions.locateStore.error, 'LOCATE_STORE_ERROR');
    assertAction(actions.inputValChange, 'LOCATE_INPUT_CHANGE');
  });

  it('exports all the right actions', () => {
    // `have.all` will fail if there are any additional or missing keys on actions.
    actions.should.have.all.keys('locateStore', 'inputValChange');
  });

  it('calls graphql with correct store id', async() => {
    // The main thing we are testing here is that our nock'd endpoint is his and passed
    // the correct payload; a payload with `storeId:"kitties"`
    const expectedQuery = 'storeId:"kitties"';
    const graphql = nock('http://localhost:8080')
      .post('/graphql', (body) => body.query.includes(expectedQuery))
      .reply(200, {data: { store: 'kitties' } });

    // nock objects have an isDone method to see if the nock'd endpoint has been hit;
    // for now it's false
    graphql.isDone().should.be.false;

    await actions.locateStore('kitties')(sinon.spy());

    // after we call the async action, we see our endpoint is hit
    graphql.isDone().should.be.true;
  });

  it('maps to the correct payload', async() => {
    // Here we use `intercept` because we just want to mock all POST requests
    nock('http://localhost:8080')
      .intercept('/graphql', 'POST')
      .reply(200, {data: {store: 'OK'}});

    const dispatch = sinon.spy();

    dispatch.should.not.be.called;

    await actions.locateStore('kitties')(dispatch);

    const match = sinon.match({
      type: sinon.match('OK'),
      payload: 'OK'
    });

    dispatch.should.be.calledWith(match);
  });
});
