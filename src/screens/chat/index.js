import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/molecules/header';
import {styles} from './styles';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Header name={'Chat'} />
      <View style={styles.botChat}>
        <View style={styles.bot}>
          <Text style={styles.botText}>Hi!</Text>
        </View>
      </View>
      <View style={styles.userChat}>
        <View style={styles.user}>
          <Text style={styles.userText}>Hello!</Text>
        </View>
      </View>
      <View style={styles.botChat}>
        <View style={styles.bot}>
          <Text style={styles.botText}>How are you?</Text>
        </View>
      </View>
      <View style={styles.userChat}>
        <View style={styles.user}>
          <Text style={styles.userText}>I'm good!</Text>
        </View>
      </View>
      <View style={styles.botChat}>
        <View style={styles.bot}>
          <Text style={styles.botText}>Ok! Great. See you!</Text>
        </View>
      </View>
      <View style={styles.userChat}>
        <View style={styles.user}>
          <Text style={styles.userText}>Ok! See you soon.</Text>
        </View>
      </View>
    </View>
  );
};

export default Chat;
