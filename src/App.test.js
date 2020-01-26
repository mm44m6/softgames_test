import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

test('Contains the game setup', () => {
  expect(wrapper.find('.GameSetup')).toHaveLength(1);
});

test('Game appears after click', () => {
  wrapper.find('input').simulate('change', { target: { value: '5' } });
  wrapper.find('button').simulate('click');

  expect(wrapper.find('Game')).toHaveLength(1);
});