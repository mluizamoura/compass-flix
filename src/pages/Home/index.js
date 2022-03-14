import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getMovie} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
      const username = await AsyncStorage.getItem('@CodeApi:username');
      setName(username);
      console.warn(username);
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
