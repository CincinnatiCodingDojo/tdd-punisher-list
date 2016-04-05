import React from 'react';
import test from 'ava';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';
import component from './store_locator';

const Component = component(React);

test('shows loading when prop is true', (assert) => {
  const wrapper = render(<Component loading={true} />);

  assert.true(wrapper.find('.StoreLocator-loading').length === 1);
});

test('hides loading when prop is false', (assert) => {
  const wrapper = render(<Component loading={false} />);

  assert.true(wrapper.find('.StoreLocator-loading').length === 0);
});

test('shows results when store is defined', (assert) => {
  const store = { brand: 'foo', addressLineOne: 'bar' };
  const wrapper = render(<Component store={store} />);

  assert.true(wrapper.find('.StoreLocator-results').length === 1);
});

test('hides results when store is undefined', (assert) => {
  const wrapper = render(<Component />);

  assert.true(wrapper.find('.StoreLocator-results').length === 0);
});

test('calls locateStore when button is clicked', (assert) => {
  const spy = sinon.spy();
  const wrapper = shallow(<Component locateStore={spy} />);

  wrapper.find('button').simulate('click');
  assert.true(spy.called);
});

test('calls locateStoreInputChange when input is changed', (assert) => {
  const spy = sinon.spy();
  const wrapper = shallow(<Component inputValChange={spy} />);
  const evt = { target: { value: 'kittens!' } };

  wrapper.find('input').simulate('change', evt);
  assert.true(spy.calledWith('kittens!'));
});
