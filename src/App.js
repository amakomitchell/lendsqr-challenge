import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CompanyLogo from './components/CompanyLogo';
import SideMenuItem from './components/SideMenuItem';

import {
  routes,
  sideMenuItems,
} from './lib/constants';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div className="side-menu">
            <CompanyLogo />
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {
                sideMenuItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link}>
                      <SideMenuItem
                        icon={item.icon}
                        label={item.label}
                      />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
    
          <div className="right-content">
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
