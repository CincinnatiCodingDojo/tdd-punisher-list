import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { render, shallow } from 'enzyme';
import component from './store_locator';

const Component = component(React);

test('shows loading when prop is true', (assert) => {
  const wrapper = render(<Component loading={true} />);

  wrapper.should.have.descendants('.StoreLocator-loading');
});

test('hides loading when prop is false', (assert) => {
  const wrapper = render(<Component loading={false} />);

  wrapper.should.not.have.descendants('.StoreLocator-loading');
});

test('shows results when store is defined', (assert) => {
  const store = { brand: 'foo', addressLineOne: 'bar' };
  const wrapper = render(<Component store={store} />);

  wrapper.should.have.descendants('.StoreLocator-results');
});

test('hides results when store is undefined', (assert) => {
  const wrapper = render(<Component />);

  wrapper.should.not.have.descendants('.StoreLocator-results');
});

test('calls locateStore when button is clicked', (assert) => {
  const spy = sinon.spy();
  const wrapper = shallow(<Component locateStore={spy} />);

  wrapper.find('button').simulate('click');
  spy.should.be.called;
});

test('calls locateStoreInputChange when input is changed', (assert) => {
  const spy = sinon.spy();
  const wrapper = shallow(<Component inputValChange={spy} />);
  const evt = { target: { value: 'kittens!' } };

  wrapper.find('input').simulate('change', evt);
  spy.should.be.calledWith('kittens!');
});
