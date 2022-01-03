import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mockData } from '../mock-data';

import App from '../App';
import Event from '../Event';

import { mount, shallow } from 'enzyme';

const feature = loadFeature('./src/.features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collasped by default.', ({ given, when, then }) => {

    given('User hasn\'t clicked any buttons', () => {

    });
    let AppWrapper;
    when('User opens the main page', () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });

    then('the User sees the event element collasped', () => {
      expect(AppWrapper.find('.event-description')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    let event = mockData;
    EventWrapper = shallow(<Event event={event[0]} />);
    given('User sees button to click to show more details', () => {
      expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });

    when('User clicks button to show more', () => {
      EventWrapper.find('.show-details').simulate('click');
    });

    then('the user sees details about the event', () => {
      EventWrapper.setState({
        isCollasped: false
      });
      expect(EventWrapper.find('.event-description')).toHaveLength(1);
    });
  });


  test('User can collaspe an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    let event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);

    given('User wants to hide the details of event', () => {
      EventWrapper.setState({
        isCollasped: false
      });
      expect(EventWrapper.find('.eventButton')).toHaveLength(1);
    });

    when('User clicks button to show less', () => {
      EventWrapper.find('.eventButton').simulate('click');
    });

    then('Event details then collaspe', () => {
      EventWrapper.setState({
        isCollasped: true
      })
      expect(EventWrapper.state('isCollasped')).toBe(true);
    });
  });
});