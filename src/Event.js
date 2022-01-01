import React, { Component } from 'react';

import './css/Event.css'
import 'animate.css';

import { Button } from 'react-bootstrap';

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
      <div className='event'>
        <div className='eventHeader'>Event</div>
        <div>{event.location}</div>
        <div>{event.summary}</div>
        {!isCollasped &&
          <div className={`${this.state.isCollasped ? 'hide animate__animated animate__fadeOut' : 'show animate__animated animate__fadeInUpBig'}`}>
            <div className='eventBox'>
              <div className='box1'>
                <div className='event-description'>Description</div>
                <div>{event.description}</div>
              </div>
              <div className='box2'>
                <div className='event-creator'>Creator</div>
                <div>{event.creator.email}</div>
              </div>
              <div className='box3'>
                <div>Created: <span>{event.created}</span></div>
              </div>
              <button className={`${this.state.isCollasped ? 'show' : 'eventButton hide'}-details`} onClick={this.handleClick}>
                {isCollasped ? 'More About' : '╳'}
              </button>
            </div>
          </div>
        }
        <Button variant='primary' className={`${this.state.isCollasped ? 'show' : 'hide'}-details`} onClick={this.handleClick}>
          {isCollasped ? 'More About' : 'Close'}
        </Button>
      </div>
    );
  }
}

export default Event;