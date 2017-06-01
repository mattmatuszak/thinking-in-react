import React, { Component } from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

class ProductTable extends Component {





  render() {

      const products = this.props.products;
      console.log("products", products);

      const productMap = new Map();

      products.forEach((product) => {

      })


        return (
          <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategory></ProductCategory>
                    <ProductRow></ProductRow>
                    <ProductCategory></ProductCategory>
                    <ProductRow></ProductRow>
                </tbody>
            </table>
          </div>
        );
  }
}

export default ProductTable;
