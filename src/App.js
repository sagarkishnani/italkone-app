import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './navigation';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
