import nock from 'nock';
import sinon from 'sinon';
import { locateStore } from './find_store';
const { describe, it } = global;

describe('Store Locator Actions', () => {
  it('locateStoreApi calls graphql with correct store id', async() => {
    const expectedQuery = 'storeId:"kitties"';
    const graphql = nock('http://localhost:8080')
      .post('/graphql', (body) => body.query.includes(expectedQuery))
      .reply(200, {data: { store: 'kitties' } });

    await locateStore('kitties')(sinon.spy());

    graphql.isDone().should.be.true;
  });

  it('locateStoreApi maps to the correct payload', async() => {
    nock('http://localhost:8080')
      .intercept('/graphql', 'POST')
      .reply(200, {data: {store: 'OK'}});

    const dispatch = sinon.spy();

    await locateStore('kitties')(dispatch);

    const match = sinon.match({
      type: sinon.match('OK'),
      payload: 'OK'
    });

    dispatch.should.be.calledWith(match);
  });
});
