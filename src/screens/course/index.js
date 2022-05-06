import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../assets/constants/theme';
import {styles} from './styles';

const Course = ({navigation}) => {
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.selectedCourse);
  const {name, image, price, type, description} = course;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: `${image}`}}
        resizeMode="cover"
        style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}>
          <IonicIcons name="ios-chevron-back" color={colors.black} size={25} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.courseInfo}>
        <Text style={styles.price}>S/.{price}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Course);
