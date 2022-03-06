import React from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from './AuthProvider';
import {Routes} from './Routes.js';
import {store} from '../src/state/store';

export const NavWrapper = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}