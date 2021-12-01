import React, { Component } from 'react';

class Event extends Component {

  state = {
    isCollasped: true
  }

  eventDetails = () => {
    if (this.state.isCollasped === true) {
      this.setState({
        isCollasped: false
      });
    } else {
      this.setState({
        isCollasped: true
      });
    }
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        {this.state.isCollasped === false && (
          <p>{event.description}</p>
        )}

        {this.state.isCollasped === true && (
          <button className="show-button" onClick={this.eventDetails}>
            Show Details
          </button>
        )}

        {this.state.isCollasped === false && (
          <button className="close-button" onClick={this.eventDetails}>
            Close Details
          </button>
        )}
      </div>
    );
  }
}

export default Event;