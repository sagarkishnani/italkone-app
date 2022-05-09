import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main';
import RegisterNavigator from './auth';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const isAuth = useSelector(state => state.auth.userId);
  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <RegisterNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
