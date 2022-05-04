import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../home/styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Hello, Aakash</Text>
          <Text style={styles.profileMessage}>¡Te damos la bienvenida!</Text>
        </View>
        <View>
          <Text>Hola</Text>
          <Image />
        </View>
      </View>
    </View>
  );
};

export default Home;
