import React from "react";
import PropTypes from 'prop-types';

import TabBody from '../TabBody';

import './tab-body.css';

const TabBody = ({ product }) => (
  <div>
    <p>{product.name}</p>
  </div>
);

TabBody.propTypes = {
  product: PropTypes.object.isRequired,
};

export default TabBody;
