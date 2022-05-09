import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import {signin, signup} from '../../store/actions/auth.action';
import {useDispatch} from 'react-redux';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isLogin) {
      dispatch(signin(email, password));
    } else {
      dispatch(signup(email, password));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isLogin ? 'Iniciar Sesión' : 'Regístrate'}
      </Text>
      <Input
        blurOnSubmit
        placeholder="Ingrese su correo"
        type="email"
        placeholderTextColor={'#000000'}
        returnKeyType="done"
        onChange={e => setEmail(e.target.value)}
        value={email}
        maxLength={60}
      />
      <Input
        blurOnSubmit
        placeholder="Ingrese su contraseña"
        type="password"
        placeholderTextColor={'#000000'}
        secureTextEntry={true}
        onChange={e => setPassword(e.target.value)}
        value={password}
        maxLength={20}
      />
      <Button
        value={isLogin ? 'Ingresar' : 'Registrar'}
        onPress={() => handleAuth()}
      />
    </View>
  );
};

export default RegisterScreen;
