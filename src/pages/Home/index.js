import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import api, { getMovie } from '../../service/api';

export default function Home() {

  itemSave = {}

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
    }
    awaitMovie();
  }, []);


  return (

    <View style={{ flex: 1, justifyContent: 'space-between' }}>

      <FlatList
        numColumns={4}
        keyExtractor={item => String(item.id)}
        data={movie}
        renderItem={({ item }) =>

          <TouchableOpacity
            onPress={() => {
              itemSave = item
              navigation.navigate('MoviePage', { itemSave })
            }}>
            <Image
              style={styles.imgstyle}
              source={{
                uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`
              }} />
            <Text style={{ fontSize: 30 }}> {item.vote_average}</Text>
          </TouchableOpacity>}

      />

    </View >
  )
}

const styles = StyleSheet.create({
  imgstyle: {
    width: 76.02,
    height: 95.03,
  }
});
