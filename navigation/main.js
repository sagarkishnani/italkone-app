import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/constants/theme';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingBottom: 5,
        },
      }}>
      <TabStack.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? colors.blue : colors.darkgray}
              size={20}
            />
          ),
          title: 'Home',
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
