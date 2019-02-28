import React, { Component } from "react";
import PropTypes from 'prop-types';
import Search from 'react-icons/lib/fa/search';
import Sort from 'react-icons/lib/fa/sort-amount-asc';
import Filter from 'react-icons/lib/fa/align-center';

import './product-table-header-top.css';

export default class ProductTableHeaderTop extends Component {

  static propTypes = {
    iconName: PropTypes.string.isRequired,
  };

  renderIcon = () => {
    const { iconName } = this.props;
    switch(iconName) {
      case 'Search':   
        return <Search className="header-top-item-icon" />;
      case 'Sort':   
        return <Sort className="header-top-item-icon" />;
      case 'Filter': 
        return <Filter className="header-top-item-icon" />;
      default:
        return null;
    }
  };

  render() {
    const { iconName } = this.props;
    return (
      <div className="headerTop">
        {this.renderIcon()}
        <p className="header-top-item-label">
          {iconName}
        </p>
      </div>
    )
  }
}
