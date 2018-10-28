import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

it('renders without crashing', () => {
  shallow(<Controls />);
});