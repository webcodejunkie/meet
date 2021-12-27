Feature: Show/Hide an Event's Details

  Scenario: An event element is collasped by default.
    Given User hasn't clicked any buttons
    When User opens the main page
    Then the User sees the event element collasped

  Scenario: User can expand an event to see its details
    Given User sees button to click to show more details
    When User clicks button to show more
    Then the user sees details about the event

  Scenario: User can collaspe an event to hide its details
    Given User wants to hide the details of event
    When User clicks button to show less
    Then Event details then collaspe