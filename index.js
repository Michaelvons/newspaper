/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store';

const AppComponent = () => (
  <ReduxProvider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => AppComponent);
