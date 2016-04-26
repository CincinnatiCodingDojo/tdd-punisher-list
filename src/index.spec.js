import sinon from 'sinon';
import { render, shallow, mount } from 'enzyme';
const { describe, it } = global;
import React from 'react';
import PunisherList from './index.js'

describe('Punish List', () => {
  it('renders the input', () => {
    const wrapper = shallow(<PunisherList />);
    wrapper.find('input').should.have.length(1);
  } );

  it('renders an add to list button', () => {
    const wrapper = shallow(<PunisherList />);
    wrapper.find('.addBtn').should.have.length(1);
  });

  it('adds the punishee to the list on click', () =>{
    const wrapper = mount(<PunisherList />);

    const evt = {target: {value: 'kittens'}};
    wrapper.find('li').should.have.length(0);
    wrapper.find('input').simulate('change', evt);
    wrapper.find('.addBtn').simulate('click');
    wrapper.find('li').should.have.length(1);
  });
  it('punishee is marked as punished on click', () => {
    const wrapper = mount(<PunisherList />);

    wrapper.setState({list: ['kittens']});
    wrapper.find('li').simulate('click');
    wrapper.state.list[0].isPunished.should.be.true;

  });
  it('unpunishes a punishee on click')
  it('x removes a punishee from the list on click');
});
