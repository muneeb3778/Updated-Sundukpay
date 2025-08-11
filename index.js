/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './global.css'
import { AppProvider } from './Allcomponents/ContextApi';

const RootApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

AppRegistry.registerComponent('islamicbank', () => RootApp);
