import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './home';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <TabStack.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{title: 'Home'}}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
