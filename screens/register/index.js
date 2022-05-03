import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <Input
        blurOnSubmit
        placeholder="Ingrese su correo"
        placeholderTextColor={'#000000'}
        returnKeyType="done"
      />
      <Input
        blurOnSubmit
        placeholder="Ingrese su correo"
        placeholderTextColor={'#000000'}
        returnKeyType="done"
      />
      <Input
        blurOnSubmit
        placeholder="Ingrese su correo"
        placeholderTextColor={'#000000'}
        returnKeyType="done"
      />
      <Button value={'Regístrate'} />
    </View>
  );
};

export default RegisterScreen;
