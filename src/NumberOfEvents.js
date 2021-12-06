import React, { Component } from 'react';
import Select from 'react-select';

// the different number events that will be shown to be selected, ranging from fixed numbers
const options = [
  { value: '32', label: '32 Events' },
  { value: '16', label: '16 Events' },
  { value: '8', label: '8 Events' }
];

class NumberOfEvents extends Component {

  // set the state of the select to null by default
  state = {
    selectedOption: null,
  }
  // function to help update the state for the selected option
  chooseNumberEvents = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {

    const { selectedOption } = this.state;

    return (
      <div>
        <h3>Choose Number of Events</h3>
        <Select
          value={selectedOption}
          onChange={this.chooseNumberEvents}
          options={options}
          className='event-options' />
      </div>
    );
  }
}

export default NumberOfEvents;