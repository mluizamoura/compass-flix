import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function Login() {
  return (
    <KeyboardAvoidingView>
      <View style={styles.Container}>
        {/* <View style={styles.Banner}>
          <Image source={require('../../assets/Banner.png')} />
        </View>

        <View style={styles.Logo}>
          <Image source={require('../../assets/login.png')} />
        </View> */}

        <View style={styles.TextEntry}>
          <Text>Login</Text>
          <Text>Entre na sua conta para continuar.</Text>
        </View>

        <View style={styles.InputArea}>
          <TextInput
            style={styles.Input}
            placeholder="e-mail"
            onChangeText={() => {}}
            placeholderTextColor="#fff"
          />

          <TextInput
            placeholder="senha"
            onChangeText={() => {}}
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.BtnSubmit}>
          <TouchableOpacity>
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  InputArea: {
    backGroundColor: '#C4C4C459',
  },
  BtnSubmit: {
    backGroundColor: '#E9A6A6',
  },
  Container: {
    backgroundColor: '#000',
   
  },
  Banner: {
    alignItems: 'center',
    resizeMode: 'cover',
    
  },
  TextEntry: {
    backGroundColor: '#fff', //nao pegou a cor
    alignItems: 'center',
    
  },
  Logo: {
    alignItems: 'center',
    bottom: '200',
  },
  Input: {
    color: '#fff',
  },
  BackGround: {
    backgroundColor: '#000',
    flex: 1,

  },
});
