import React from 'react';
import { shallow } from 'enzyme';
import MySlider from '../MySlider';
import Slider from 'rc-slider';

const props = {
  scale: {
    title: 'Gain',
    min: -150,
    max: 150,
    default: 0,
    unit: 'dB'
  },
  value: 60,
  trackColor: 'rgb(60, 60, 60)',
  band: 'low_band',
  handleGainChange: () => handleGainChange()
};

const { scale, value, trackColor, band, handleGainChange } = props;

it('renders without crashing', () => {
  shallow(<MySlider {...props} />);
});

it('renders elements with values passed on props', () => {
  let wrapper = shallow(<MySlider {...props} />);
  expect(wrapper.hasClass('Slider-container')).toEqual(true);
  expect(wrapper.find('h3').text()).toEqual(props.scale.title);
  expect(wrapper.find(Slider).prop('min')).toEqual(scale.min);
  expect(wrapper.find(Slider).prop('max')).toEqual(scale.max);
  expect(wrapper.find(Slider).prop('value')).toEqual(value);
  expect(wrapper.find(Slider).prop('trackStyle')).toEqual({
    backgroundColor: trackColor
  });
  expect(wrapper.find(Slider).prop('band')).toEqual(band);
});
