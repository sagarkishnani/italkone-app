import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/register/index';

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
