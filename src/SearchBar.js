import React, { Component } from 'react';



class SearchBar extends Component {
  render() {
    return (
      <div>
        <input /><br />
        <input type="checkbox" /><label>Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
