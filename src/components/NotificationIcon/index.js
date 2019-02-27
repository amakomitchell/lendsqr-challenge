import React from 'react';
import NotifBell from 'react-icons/lib/io/ios-bell';

import './notification-icon.css'

export default () => (
  <div className="notif-flex">
    <div className="notif-wrapper">
      <NotifBell className="notif-icon" />
    </div>
  </div>
);
