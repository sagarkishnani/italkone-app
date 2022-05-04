import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main';
import RegisterNavigator from './auth';

const AppNavigation = () => {
  const isAuth = true;
  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <RegisterNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
