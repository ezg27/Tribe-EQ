import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

const wrapper = shallow(<App />);

it('includes div with class Title-container', () => {
  expect(wrapper.find('h1').text()).toEqual('Tribe EQ');
});
