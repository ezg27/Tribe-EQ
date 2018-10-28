import React from 'react';
import { shallow } from 'enzyme';
import Interface from '../Interface';

it('renders without crashing', () => {
  shallow(<Interface />);
});
