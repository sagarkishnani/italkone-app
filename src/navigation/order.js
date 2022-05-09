import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Order from '../screens/order';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Order">
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
