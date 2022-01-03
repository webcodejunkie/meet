import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';

import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('test if element is collasped by default', () => {
    EventWrapper.setState({
      isCollasped: true
    });
    expect(EventWrapper.state('isCollasped')).toBe(true);
  })

  test('test if details of event are opened', () => {
    EventWrapper.find(`${'.show-details'}`).simulate('click');
    expect(EventWrapper.state('isCollasped')).toBe(false);
  });

  test('test if details element is rendered', () => {
    EventWrapper.setState({
      isCollasped: false
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

  test('test if you click to return to default state to hide', () => {
    EventWrapper.find(`${'.eventButton'}`).simulate('click');
    EventWrapper.setState({
      isCollasped: true
    });
    expect(EventWrapper.state('isCollasped')).toBe(true);
  })

});