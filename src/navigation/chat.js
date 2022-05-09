import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from '../screens/chat';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
