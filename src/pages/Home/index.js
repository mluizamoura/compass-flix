import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getAccountDetails, getMovie} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const count = await getAccountDetails(sessionId);
      setName(count.name);
      console.warn(count);
    }
    awaitMovie();
  }, []);

  return (
    <View>
      {name && <Text>{name}</Text>}
      <Text>home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Movies');
        }}>
        <Text>filme</Text>
      </TouchableOpacity>
    </View>
  );
}
