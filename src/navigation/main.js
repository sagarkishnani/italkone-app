import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../assets/constants/theme';
import CartNavigator from './cart';
import ChatNavigator from './chat';
import OrderNavigator from './order';

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
      <TabStack.Screen
        name="ChatStack"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'mic' : 'mic-outline'}
              color={focused ? colors.blue : colors.darkgray}
              size={20}
            />
          ),
          title: 'Chat',
        }}
      />
      <TabStack.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              color={focused ? colors.blue : colors.darkgray}
              size={20}
            />
          ),
          title: 'Cart',
        }}
      />
      <TabStack.Screen
        name="OrderStack"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'albums' : 'albums-outline'}
              color={focused ? colors.blue : colors.darkgray}
              size={20}
            />
          ),
          title: 'Order',
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
