import React, { Component } from "react";

import NotificationIcon from '../NotificationIcon';
import Button from '../Button';
import ProductListItem from '../ProductListItem';

import { loanData } from '../../lib/constants';

import './products.css';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    // check localstorage for loan data
    const data = localStorage.getItem('loanData');
    if (data) {
      // set in state
      this.setState({
        products: JSON.parse(data),
      });
    } else {
      // save in localstorage
      localStorage.setItem('loanData', JSON.stringify(loanData));
      // set to state
      this.setState({
        products: loanData,
      });
    }
  }

  render() {
    const { products } = this.state;
    return(
      <div className="products-containter">
        <NotificationIcon />
        <div className="products-header-strip">
          <h3 className="products-header">
            Products
          </h3>
          <Button
            label="Add A New Product"
            onPress={() => {}}
          />
        </div>
        <div className="products-table">
          <div className="products-table-header">
            <div className="products-table-header-top">
              <p>Search</p>
              <p>Sort</p>
              <p>Filter</p>
              <p>Export</p>
            </div>
            <div className="products-table-header-bottom">
              <h5 className="products-table-header-title">Name</h5>
              <h5 className="products-table-header-title">Tenor</h5>
              <h5 className="products-table-header-title">Amount</h5>
              <div className="products-filler" />
            </div>
          </div>
          {
            products.map((product) => (
              <ProductListItem
                product={product}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

