import React from 'react';
import { AuthProvider } from './AuthProvider';
import {Routes} from './Routes.js';

export const NavWrapper = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}