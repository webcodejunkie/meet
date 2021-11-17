import React, { Component } from 'react';

class CitySearch extends Component {
  render() {
    return (
      <div className="CitySearch">
        <input
          className="city"
          placeholder="search city"
          type="text"
        />
        <ul className="suggestions">

        </ul>
      </div>
    );
  }
}

export default CitySearch;