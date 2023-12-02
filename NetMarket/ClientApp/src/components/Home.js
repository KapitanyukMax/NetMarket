import React, { Component } from 'react';
import ProductListPage from './ProductsListPage';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <ProductListPage/>
    );
  }
}
