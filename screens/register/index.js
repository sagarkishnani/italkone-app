import React from 'react';
import {View, Text} from 'react-native';
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
        placeholder="Ingrese su contraseña"
        placeholderTextColor={'#000000'}
        secureTextEntry={true}
      />
      <Input
        blurOnSubmit
        placeholder="Confirme su contraseña"
        placeholderTextColor={'#000000'}
        secureTextEntry={true}
      />
      <Button value={'Regístrate'} />
    </View>
  );
};

export default RegisterScreen;
