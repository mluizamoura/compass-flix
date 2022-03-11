import {View, Text} from 'react-native';
import React from 'react';
import {validateTolken} from '../../service/api';

export default function Login() {
  const user = {
    username: 'Maicon',
    password: '123456',
    request_token: '61ca82e6023ba748739397bc2b3b4878b9c2668a',
  };
  validateTolken(JSON.stringify(user));

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
