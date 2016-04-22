import React from 'react';
/**
 * We import a couple testing libs:
 * - sinon for mocking methods
 * - enzyme has several methods for testing components
 *    - render: will render a component to a HTML string: http://airbnb.io/enzyme/docs/api/render.html
 *      - render uses cheerio to make assertions against the HTML string: http://cheeriojs.github.io/cheerio/
 *    - shallow: will compile a component to it's AST: http://airbnb.io/enzyme/docs/api/shallow.html
 *    - mount: (not shown) will mount the component for real against a real (or emulated) document object.
 */
import sinon from 'sinon';
import { render, shallow } from 'enzyme';
import Component from './store_locator';
const { describe, it } = global;

describe('Store Locator Component', () => {
  it('shows loading when prop is true', () => {
    // render is perfect for making simple dom assertions, like asserting the presence of an element
    const wrapper = render(<Component loading={true}/>);

    wrapper.should.have.descendants('.StoreLocator-loading');
  });

  it('hides loading when prop is false', () => {
    const wrapper = render(<Component loading={false}/>);

    wrapper.should.not.have.descendants('.StoreLocator-loading');
  });

  it('calls locateStore when button is clicked', () => {
    // If you need to simulate a dom event (e.g. click) then you'll need to use shallow (or mount)
    const spy = sinon.spy();
    const wrapper = shallow(<Component locateStore={spy}/>);

    wrapper.find('.StoreLocator-btn').simulate('click');
    spy.should.be.called;
  });

  it('calls locateStoreInputChange when input is changed', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Component inputValChange={spy}/>);
    const evt = {target: {value: 'kittens!'}};

    wrapper.find('.StoreLocator-input').simulate('change', evt);
    spy.should.be.calledWith('kittens!');
  });
});
