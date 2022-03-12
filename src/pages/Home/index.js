import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import api, {getMovie} from '../../service/api';

export default function Home({navigation}) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
    }
    awaitMovie();
  }, []);

  return (
    <View>
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
