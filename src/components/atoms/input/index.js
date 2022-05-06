import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

const Input = ({style, ...props}) => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;
