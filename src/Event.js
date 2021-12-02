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
    const { event } = this.props;
    const { isCollasped } = this.state
    return (
      <div className="event">
        {!isCollasped &&
          <div className={`${this.state.isCollasped ? 'hide' : 'show'}`}>
            <h3>Details About Event</h3>
            <p className='event-description'></p>
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