import React from 'react';

import Product from '../components/Product';
// import side-menu icons
import dashboard from '../icons/svg/dashboard.svg';
import loans from '../icons/svg/loans.svg';
import transactions from '../icons/svg/transactions.svg';
import products from '../icons/svg/products.svg';
import reports from '../icons/svg/reports.svg';
import settings from '../icons/svg/settings.svg';
import line from '../icons/svg/line.svg';

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Dashboard</h2>
  },
  {
    path: '/loans',
    main: () => <h2>Loans</h2>
  },
  {
    path: '/transactions',
    main: () => <h2>Transactions</h2>
  },
  {
    path: '/products',
    main: () => <Product/>
  },
  {
    path: '/reports',
    main: () => <h2>Reports</h2>
  },
  {
    path: ''
  },
  {
    path: '/settings',
    main: () => <h2>Settings</h2>
  }
];

export const sideMenuItems = [
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
  },
  {
    label: 'Products',
    icon: products,
    link: '/products'
  },
  {
    label: 'Reports',
    icon: reports,
    link: '/reports'
  },
  {
    label: '',
    icon: line,
    link: ''
  },
  {
    label: 'Settings',
    icon: settings,
    link: '/settings'
  }
];

export const loanData = [{
  id: 1,
  name: 'Medical',
  amount: '₦92,000.00',
  tenor: '2 years',
  status: 1,
}, {
  id: 11,
  name: 'Student',
  amount: '₦25,000.00',
  tenor: '1 month',
  status: 0,
}, {
  id: 21,
  name: 'Emergency',
  amount: '₦250,000.00',
  tenor: '7 days',
  status: 1,
}, {
  id: 91,
  name: 'Mortgage',
  amount: '₦50,000.00',
  tenor: '12 months',
  status: 0,
}];

