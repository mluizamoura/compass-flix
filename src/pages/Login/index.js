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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login() {
  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require('../../assets/bannerLogin.png')}
        />
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')} />
        </View>
      </View>
      <View style={styles.textEntry}>
        <Text style={styles.textEntry.login}>Login</Text>
        <Text style={styles.textEntry.description}>
          Entre na sua conta para continuar.
        </Text>
      </View>
      <View style={styles.inputArea}>
        <EvilIcons style={styles.userIcon} name="user" color="#fff" size={20} />
        <TextInput
          keyboardType={'email-address'}
          autoComplete={'email'}
          style={styles.input}
          placeholder="e-mail"
          onChangeText={() => {}}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <AntDesign style={styles.lockIcon} name="lock" color="#fff" size={18} />
        <TextInput
          autoComplete={'password'}
          style={styles.input}
          placeholder="senha"
          onChangeText={() => {}}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.btnSubmit}>
        <TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1F1D36'}}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
