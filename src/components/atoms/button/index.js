import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const Button = ({value, ...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;
