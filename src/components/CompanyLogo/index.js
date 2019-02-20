import React from 'react';
import ChevronRight from 'react-icons/lib/io/chevron-right';

import './company-logo.css';

export default () => (
  <div className="company-logo-container">
    <div className="company-logo" />
    <h4 className="company-nam">
      Pay Finance Ltd.
    </h4>
    <ChevronRight className="right-icon" />
  </div>
);
