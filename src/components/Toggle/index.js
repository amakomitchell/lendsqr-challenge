import React from "react";
import PropTypes from 'prop-types';
import ToggleOff from 'react-icons/lib/fa/toggle-off';
import ToggleOn from 'react-icons/lib/fa/toggle-on';

import './toggle.css';

const Toggle = ({ status }) => {
  const ToggleComponent = status ? ToggleOn : ToggleOff;
  return (
    <div className="product-toggle-container">
      <ToggleComponent
        className={`product-toggle-${status ? 'on' : 'off'}`}
      />
      <p className="product-toggle-label">
        {status ? 'Active' : 'Disabled'}
      </p>
    </div>
  );
};

Toggle.propTypes = {
  status: PropTypes.bool,
};

Toggle.defaultProps = {
  status: false,
};

export default Toggle;
