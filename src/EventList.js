import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Event from './Event';

class EventList extends Component {

  state = {
    content: null,
  }

  componentDidMount() {
    const events = this.props;
    if (events) {
      this.setState({
        content: true
      });
    }
  }


  render() {
    const { events } = this.props;

    if (this.state.content === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }
    return (
      <ul className="EventList">
        {events.map((event) =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;