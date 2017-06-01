import React, { Component } from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

class ProductTable extends Component {





  render() {

      const products = this.props.products;

      const productMap = new Map();

      products.forEach((product) => {
          if(productMap.get(product.category)){
            productMap.get(product.category).products.push(<ProductRow details={product}/>)
          }else{
            productMap.set(product.category,{productCategory:(<ProductCategory category={product.category}></ProductCategory>),products:[<ProductRow details={product}/>]})
          }
      })
      const productIterator = productMap.values();

      let data =[];

      productMap.forEach((product) => {
          data.push(product.productCategory);
          data = data.concat(product.products);
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
                    {data}
                </tbody>
            </table>
          </div>
        );
  }
}

export default ProductTable;