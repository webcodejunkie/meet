import React, { Component } from 'react';

// Parent Class
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: '16px',
    };
  }

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// Sub Classes
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class SuccessAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#1bff00';
  }
}

export { InfoAlert };
export { ErrorAlert };
export { SuccessAlert };