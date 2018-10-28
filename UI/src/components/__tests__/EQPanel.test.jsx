import React from 'react';
import { shallow } from 'enzyme';
import EQPanel from '../EQPanel';

it('renders without crashing', () => {
  shallow(<EQPanel />);
});
