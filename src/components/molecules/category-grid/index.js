import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const CategoryGrid = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View style={styles.course}>
          <Image style={styles.image} source={{uri: `${item.image}`}} />
          <View style={styles.courseInfo}>
            <Text style={styles.subtitle}>{item.type}</Text>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryGrid;
