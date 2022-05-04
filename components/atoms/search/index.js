import React from 'react';
import {TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../assets/constants/theme';
import {styles} from './styles';

const SearchInput = ({style, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} />
      <Ionicons name="search" color={colors.darkgray} size={20} />
    </View>
  );
};

export default SearchInput;
