import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../assets/constants/theme';
import {styles} from './styles';

const Header = ({name, handleNavigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigation}>
        <IonicIcons name="ios-chevron-back" color={colors.black} size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <IonicIcons name="ellipsis-vertical" color={colors.black} size={25} />
    </View>
  );
};

export default Header;
