import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../Controls';

it('renders without crashing', () => {
  shallow(<Controls />);
});

describe('Create New Preset button', () => {
  it('renders Create New Preset button', () => {
    let wrapper = shallow(<Controls />);
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
    ).toBe('Create New Preset');
  });

  it('Create New Preset button onClick function updates state', () => {
    let onClick = jest.fn();
    let wrapper = mount(<Controls onClick={onClick} />);
    expect(wrapper.state('modalIsOpen')).toEqual(false);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(wrapper.state('modalIsOpen')).toEqual(true);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(wrapper.state('modalIsOpen')).toEqual(true);
    wrapper.unmount();
  });
});
