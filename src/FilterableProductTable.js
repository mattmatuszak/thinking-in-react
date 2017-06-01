import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    state = {
        onlyInStockItems: false,
        search: ''
    }

    updateInStockItems = (event) => {
        //check what value is and set to opposite
        //console.log(`event: ${event.target.checked}`)
        if(this.state.onlyInStockItems === true){
            this.setState(Object.assign(this.state,{onlyInStockItems: false}))
        }else{
            this.setState(Object.assign(this.state,{onlyInStockItems: true}))
        }   
    }
    updateSearch = (event) => {
        console.log(`event: ${event.target.value}`)
        this.setState(Object.assign(this.state,{search: event.target.value}))
    }

    render() {
        let products = this.props.products;

        if(this.state.onlyInStockItems === true){
            products = this.props.products.filter((val) => {
                return val.stocked
            });
        }

        if(this.state.search != ''){
            products = this.props.products.filter((val) => {
                return (val.name.indexOf(this.state.search) >= 0)
            }); 
        }

        return (
          <div className="App">
            <h1>hello </h1>
            <SearchBar onlyInStockItems={this.state.onlyInStockItems} updateInStockItems={this.updateInStockItems} updateSearch={this.updateSearch}></SearchBar>
            <ProductTable products={products}></ProductTable>
          </div>
        );
    }
}

export default FilterableProductTable;