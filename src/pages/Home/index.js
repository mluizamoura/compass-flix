import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import api, {getMovie} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylePageHome from './style';

export default function Home() {
  const base = 'https://api.themoviedb.org/3/';

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  async function awaitMovie() {
    try {
      const {data} = await api.get(
        `movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`,
      );
      setMovie([...movie, ...data.results]);
      setPage(page + 1);
    } catch (error) {
      consol1e.warn(error);
    }
  }
  useEffect(() => {
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
          keyExtractor={(item, index) => index}
          onEndReached={page < 500 ? awaitMovie : ''}
          onEndReachedThreshold={0.3}
          numColumns={4}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={stylePageHome.styleApiMovie}>
                <Text>API Movies</Text>
              </View>

              <View style={stylePageHome.avaluationstyle}>
                <Icon style={stylePageHome.icon} name="star" />
                <Text style={stylePageHome.avaluationstyle}>8.3/10</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
