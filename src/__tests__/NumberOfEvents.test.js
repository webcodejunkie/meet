import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('test if the select element is rendering', () => {
    expect(NumberOfEventsWrapper.find('.num-of-events')).toHaveLength(1);
  });

});