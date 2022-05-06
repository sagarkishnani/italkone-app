import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Course from '../screens/course';
import Category from '../screens/category';
import {colors, fontFamily, fontSize} from '../../assets/constants/theme';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({route}) => ({
          title: route.params.name,
          headerStyle: {backgroundColor: colors.lightblue},
          headerTitleStyle: {
            fontFamily: fontFamily.bold,
            fontSize: fontSize.title,
          },
        })}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
