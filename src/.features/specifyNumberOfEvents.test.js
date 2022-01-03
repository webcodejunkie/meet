import { loadFeature, defineFeature } from 'jest-cucumber';

import { mount } from 'enzyme';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/.features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('User opens the page', () => {
      AppWrapper = mount(<App />);
    });

    when('Hasn\'t changed number of events', () => {
      AppWrapper.update();
    });

    then('Shows the default number of events set', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given('The input to change number of events is present', () => {
      AppWrapper.find('.findEventButton').simulate('click');
      const NumberOfEventWrappers = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventWrappers.find('.num-of-events').at(0)).toHaveLength(1);
    });

    when('Users inputs desired amount of events to be shown', () => {
      AppWrapper.find('.num-of-events .form-control').simulate('change', { target: { value: 16 } });
      expect(AppWrapper.state('numberOfEvents')).toEqual(16);
    });

    then('The User can see desired amount', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(16);
    });
  });
});