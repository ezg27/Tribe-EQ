import React from 'react';
import { shallow } from 'enzyme';
import Band from '../Band';

it('renders without crashing', () => {
  shallow(<Band freqDefs={{}}/>);
});
