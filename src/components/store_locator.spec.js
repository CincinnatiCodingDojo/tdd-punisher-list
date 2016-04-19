import React from 'react';
import sinon from 'sinon';
import { render, shallow } from 'enzyme';
import Component from './store_locator';
const { describe, it } = global;

describe('Store Locator Component', () => {
  it('shows loading when prop is true', () => {
    const wrapper = render(<Component loading={true}/>);

    wrapper.should.have.descendants('.StoreLocator-loading');
  });

  it('hides loading when prop is false', () => {
    const wrapper = render(<Component loading={false}/>);

    wrapper.should.not.have.descendants('.StoreLocator-loading');
  });

  it('calls locateStore when button is clicked', () => {
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
