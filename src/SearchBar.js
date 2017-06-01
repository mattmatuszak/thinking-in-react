import React, { Component } from 'react';



class SearchBar extends Component {
  


  render() {
    return (
      <div>
        <input onChange={this.props.updateSearch} /><br />
        <input type="checkbox" onChange={this.props.updateInStockItems}/><label>Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;