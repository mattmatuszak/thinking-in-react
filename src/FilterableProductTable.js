import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {




  render() {

      console.log(this.props);


    return (
      <div className="App">
        <h1>hello </h1>
        <SearchBar></SearchBar>
        <ProductTable products={this.props.products}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
