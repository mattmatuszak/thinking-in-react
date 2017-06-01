import React, { Component } from 'react';



class ProductRow extends Component {
  render() {
  	console.log(this.props);

  	const style = {
  		color: (this.props.details.stocked === false) ? 'red' : 'black'
  	};

    return (
      <tr>
         <td style={style}>{this.props.details.name}</td>
         <td>{this.props.details.price}</td>
      </tr>
      
    );
  }
}

export default ProductRow;
