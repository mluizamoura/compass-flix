import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  getAccessToken,
  getRequestToken,
  validateToken,
} from '../../service/api';

export default function Login({navigation}) {
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
    getAccessToken({request_token: token});
    if (isSuccessRequest) {
      return navigation.reset({
        index: 0,
        routes: [{name: 'HomeTabScreen'}],
      });
    }
    // await AsyncStorage.setItem(['@CodeApi:user', JSON.stringify(user)]);
  }

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
          Keyboard.dismiss();
          isSucess(user);
        }}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
