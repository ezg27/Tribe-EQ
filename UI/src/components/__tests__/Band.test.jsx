import React from 'react';
import { shallow } from 'enzyme';
import Band from '../Band';

const band = {
  title: 'Freq',
  band: 'low_band',
  min: 30,
  max: 450,
  default: 60,
  unit: 'Hz',
  color: 'rgb(60, 60, 60)'
};

it('renders without crashing', () => {
  shallow(<Band freqDefs={band}/>);
});