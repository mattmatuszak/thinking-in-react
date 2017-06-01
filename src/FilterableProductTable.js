import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    state = {
        onlyInStockItems: false,
        search: false
    }

    updateInStockItems = (event) => {
        
        this.setState(Object.assign(this.state,{onlyInStockItems: true}))
    }

    render() {
        let products = this.props.products;

        if(this.state.onlyInStockItems === true){
            products = this.props.products.filter((val) => {
                return val.stocked
            });
        }
        console.log(products);

        return (
          <div className="App">
            <h1>hello </h1>
            <SearchBar onlyInStockItems={this.state.onlyInStockItems} updateInStockItems={this.updateInStockItems}></SearchBar>
            <ProductTable products={products}></ProductTable>
          </div>
        );
    }
}

export default FilterableProductTable;
