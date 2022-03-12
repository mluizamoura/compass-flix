import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import api, {getMovie} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylePageHome from './style';

export default function Home() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
    }
    awaitMovie();
  }, []);

  return (
    <View style={stylePageHome.container}>
      <View style={stylePageHome.boxHeader}>
        <Text style={stylePageHome.greetingText}>
          Olá, <Text style={{color: '#E9A6A6'}}>John!</Text>
        </Text>
        <Text style={stylePageHome.textDescription}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
        <Text style={stylePageHome.textPopularMovies}>
          Filmes populares este mês
        </Text>
      </View>
      <View style={stylePageHome.boxFlatList}>
        <FlatList
          data={movie}
          keyExtractor={item => item.id.toString()}
          numColumns={4}
          renderItem={({item}) => (
            <View Style={{flexDirection: 'row'}}>
              <View style={stylePageHome.styleApiMovie}>
                <Text>API Movies</Text>
              </View>

              <View style={stylePageHome.avaluationstyle}>
                <Icon style={stylePageHome.icon} name="star" />
                <Text style={stylePageHome.avaluationstyle}>8.3/10</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}


