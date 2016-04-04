import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import component from './store_locator';

const Component = component(React);

test('shows loading when prop is true', (assert) => {
  const props = { loading: true, store: { brand: '', addressLineOne: '' } }
  const wrapper = shallow(<Component {...props} />);

  assert.true(wrapper.find('.loading').length === 1);
});

test('hides loading when prop is false', (assert) => {
  const props = { loading: false, store: { brand: '', addressLineOne: '' } }
  const wrapper = shallow(<Component {...props} />);

  assert.true(wrapper.find('.loading').length === 0);
});

test.skip('calls findStore when button is clicked', (assert) => {
  const findStore = sinon.spy();
  const props = {
    loading: false,
    store: {},
    findStore
  };
  const wrapper = shallow(<Component {...props} />);

  wrapper.find('button').simulate('click');
  assert.true(findStore.called);
});
