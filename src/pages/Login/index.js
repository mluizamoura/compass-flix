import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <View>
            <Image
              style={styles.banner}
              source={require('../../assets/Banner.png')}
            />
          </View>
          <View style={styles.logo}>
            <Image source={require('../../assets/login.png')} />
          </View>
        </View>
        <View style={styles.textEntry}>
          <Text style={{fontSize: 24, color:'#fff'}}>Login</Text>
          <Text style={{fontSize:13, color:'#fff'}}>Entre na sua conta para continuar.</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            onChangeText={() => {}}
            placeholderTextColor="#fff"
          />
          <TextInput 
            style={styles.input}
            placeholder="senha"
            onChangeText={() => {}}
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnSubmit}>
          <TouchableOpacity>
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
