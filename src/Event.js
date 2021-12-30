import React, { Component } from 'react';

import './css/Event.css'
import 'animate.css';

import { Card, Button } from 'react-bootstrap';

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
      <Card className='event'>
        <Card.Header>Event</Card.Header>
        <Card.Title>{event.location}</Card.Title>
        <Card.Text>{event.summary}</Card.Text>
        {!isCollasped &&
          <div className={`${this.state.isCollasped ? 'hide animate__animated animate__fadeOut' : 'show animate__animated animate__fadeIn'}`}>
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
        <Button className={`${this.state.isCollasped ? 'show' : 'hide'}-details`} onClick={this.handleClick}>
          {isCollasped ? 'More About' : 'Close'}
        </Button>
      </Card>
    );
  }
}

export default Event;