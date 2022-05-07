import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../assets/constants/theme';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: item.image}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.courseInfo}>
            <Text style={styles.price}>S/.{item.price}</Text>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <View>
              <TouchableOpacity onPress={() => onDelete(item.id)}>
                <IonicIcons
                  name="trash-outline"
                  color={colors.blue}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
