import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { InfoAlert } from './Alert';

import './css/CitySearch.css';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        showSuggestions: false,
        infoText: '',
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <h6>Search for nearby cities</h6>
        <InfoAlert text={this.state.infoText} />
        <Form.Control
          className="city"
          placeholder="search city"
          type="text"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true })
          }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              className="suggestionList"
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;