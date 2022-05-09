import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigation';
import store from './store/index';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
