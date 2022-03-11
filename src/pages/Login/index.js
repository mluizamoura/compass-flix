import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.background}>
      <TextInput style={styles.input} placeholder={'e-mail'} />
      <TextInput
        style={styles.input}
        placeholder={'senha'}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
