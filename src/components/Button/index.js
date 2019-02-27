import React from 'react';
import PropTypes from 'prop-types';

import './button.css'

const Button = ({
  label,
  onPress,
}) => (
  <button
    className="button-wrapper"
    onClick={onPress}
  >
    <span className="button-label">
      {label}
    </span>
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
