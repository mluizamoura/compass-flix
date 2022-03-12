import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getRequestToken, validateToken} from '../../service/api';

export default function Login() {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isSuccess, setIsSuccess] = useState(null);

  const user = {
    username: username,
    password: password,
    request_token: token,
  };

  useEffect(() => {
    async function awaitGetToken() {
      const requestTolken = await getRequestToken();
      setToken(requestTolken);
    }
    awaitGetToken();
  }, []);

  async function isSucess(userFull) {
    const isSuccessRequest = await validateToken(JSON.stringify(userFull));
    setIsSuccess(isSuccessRequest);
  }
  console.warn(isSuccess);

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={usernameInput => {
          setUsername(usernameInput);
        }}
      />
      <TextInput
        placeholder="senha"
        onChangeText={passwordInput => {
          setPassword(passwordInput);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          validateToken(JSON.stringify(user));
          isSucess(user);
        }}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      {isSuccess && alert('Você está logado!')}
    </View>
  );
}
