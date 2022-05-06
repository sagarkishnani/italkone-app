import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from '../screens/category/index';

const Stack = createNativeStackNavigator();

const CategoryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
