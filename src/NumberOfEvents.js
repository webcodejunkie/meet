import react, { Component } from 'react';
import Select from 'react-select';

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
    // the different number events that will be shown to be selected, ranging from fixed numbers
    const options = [
      { numOfEvents: '32' },
      { numOfEvents: '16' },
      { numOfEvents: '8' }
    ];

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