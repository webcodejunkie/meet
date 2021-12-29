import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import './css/NumberOfEvents.css';


class NumberOfEvents extends Component {


  render() {

    return (
      <div>
        <h6>Filter Events</h6>
        <Form.Control
          type='number'
          value={this.props.numberOfEvents}
          className='num-of-events'
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;