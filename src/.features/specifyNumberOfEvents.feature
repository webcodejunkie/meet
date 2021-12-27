Feature: Specify Number Of Events

  Scenario: When user hasn't specified a number, 32 is the default number
    Given User opens the page
    When Hasn't changed number of events
    Then Shows the default number of events set

  Scenario: User can change the number of events they want to see
    Given The input to change number of events is present
    When Users inputs desired amount of events to be shown
    Then The User can see desired amount