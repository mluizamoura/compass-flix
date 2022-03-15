import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

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
          <Text style={{fontWeight: 'bold', fontSize: 24, color: '#fff'}}>
            Login
          </Text>
          <Text style={{fontSize: 13, color: '#fff'}}>
            Entre na sua conta para continuar.
          </Text>
        </View>

        <View style={styles.inputArea}>
          <Icon1 style={styles.userIcon} name="user" color="#fff" size={20}/> 
          <TextInput 
            style={styles.input}
            placeholder="e-mail"
            onChangeText={() => {}}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          
          
          <Icon2 style={styles.lockIcon} name="lock" color="#fff" size={18}/> 
          <TextInput 
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
    </View>
  );
}
