import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('test if the select element is rendering', () => {
    expect(NumberOfEventsWrapper.find('num-of-events')).toHaveLength(1);
  });

  test('test by default if number of events is set to default', () => {
    expect(NumberOfEventsWrapper.state('selectedOption')).toBe(null);
  });

  test('test the change when a user selects a new option', () => {
    NumberOfEventsWrapper.setState({
      selectedOption: null
    });
    NumberOfEventsWrapper.find('.event-options').simulate('click');
    NumberOfEventsWrapper.setState({
      selectedOption: { numOfEvents: '16' }
    });
    expect(NumberOfEventsWrapper.state('selectedOption')).toEqual({ numOfEvents: '16' });
  });

});