import React from "react";
import PropTypes from 'prop-types';

import Toggle from '../Toggle';

import './product-list-item.css';

const ProductListItem = ({ product }) => (
  <div className="products-table-data-row">
    <div className="products-table-data-container">
      <p className="products-table-data">
        {product.name}
      </p>
    </div>
    <div className="products-table-data-container">
      <p className="products-table-data products-data-tenor">
        {product.tenor}
      </p>
    </div>
    <div className="products-table-data-container">
      <p className="products-table-data products-data-amount">
        {product.amount}
      </p>
    </div>
    <div className="product-list-item-right-content">
      <p className="product-action-link product-action-link-space">
        View
      </p>
      <p className="product-action-link">
        Edit
      </p>
      <Toggle status={!!product.status} />
    </div>
  </div>
);

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductListItem;
