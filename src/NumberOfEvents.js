import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import './css/NumberOfEvents.css';


class NumberOfEvents extends Component {


  render() {

    return (
      <div>
        <h5>Filter Events</h5>
        <Form.Control
          type='number'
          value={this.props.numberOfEvents}
          className='num-of-events'
          onChange={(e) => this.props.updateNumberOfEvents(e)}
          placeholder='1-32'
        />
      </div>
    );
  }
}

export default NumberOfEvents;