import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CompanyLogo from './components/CompanyLogo';
import SideMenuItem from './components/SideMenuItem';
// import side-menu icons
import dashboard from './icons/svg/dashboard.svg';
import loans from './icons/svg/loans.svg';
import transactions from './icons/svg/transactions.svg';

import './App.css';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Dashboard</h2>
  },
  {
    path: "/loans",
    main: () => <h2>Loans</h2>
  },
  {
    path: "/transactions",
    main: () => <h2>Transactions</h2>
  }
];

const sideMenuItems = [
  {
    label: 'Dashboard',
    icon: dashboard,
    link: '/',
  },
  {
    label: 'Loans',
    icon: loans,
    link: '/loans',
  },
  {
    label: 'Transactions',
    icon: transactions,
    link: '/transactions',
  }
];

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
