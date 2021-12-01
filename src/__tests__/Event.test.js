import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('test if details of event are closed', () => {
    expect(EventWrapper.state('isCollasped')).toBe(true);
  });

  test('test if details of event are opened', () => {
    EventWrapper.find('.close-button').simulate('click', {
      target: { value: 'false' }
    })
    expect(EventWrapper.state('isCollasped')).toBe(false);
  });

});