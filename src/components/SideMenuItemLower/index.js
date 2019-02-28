import React from 'react';
import PropTypes from 'prop-types';

import './side-menu-item-lower.css';

const SideMenuItemLower = ({ icon, label }) => (
  <div className="container">
    <img src={icon} className="icon" alt="logo" />
    <h4 className="label">
      {label}
    </h4>
  </div>
);

SideMenuItemLower.propTypes = {
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
};

export default SideMenuItemLower;
