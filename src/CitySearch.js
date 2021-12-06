import React, { Component } from 'react';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          className="city"
          placeholder="search city"
          type="text"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true })
          }}
        />
        <div className="suggestions">
          <li onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default CitySearch;