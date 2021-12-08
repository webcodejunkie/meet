import React, { Component } from 'react';

class Event extends Component {

  state = {
    isCollasped: true
  }

  handleClick = () => {
    this.setState({
      isCollasped: !this.state.isCollasped
    });
  }

  render() {
    const { isCollasped } = this.state
    const { event } = this.props;
    return (
      <div className="event">
        <h3>Event</h3>
        <p>{event.location}</p>
        <p>{event.summary}</p>
        {!isCollasped &&
          <div className={`${this.state.isCollasped ? 'hide' : 'show'}`}>
            <h4>Description</h4>
            <p className='event-description'>{event.description}</p>
            <div>Created: <span>{event.created}</span></div>
          </div>
        }
        <button className={`${this.state.isCollasped ? 'show' : 'hide'}-details`} onClick={this.handleClick}>
          {isCollasped ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;