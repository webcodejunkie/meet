import React, { Component } from 'react';

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
        <hr />
        {!isCollasped &&
          <div className={`${this.state.isCollasped ? 'hide' : 'show'}`}>
            <Card.Title>Description</Card.Title>
            <Card.Text className='event-description'>{event.description}</Card.Text>
            <hr />
            <Card.Text>Created: <span>{event.created}</span></Card.Text>
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