import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import api from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from './loader'
import stylePageHome from './style';


export default function Home({ navigation }) {

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  let SaveMove = []

  async function awaitMovie() {
    try {
      const { data } = await api.get(
        `movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`,
      );
      setMovie([...movie, ...data.results]);
      setPage(page + 1);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    awaitMovie();
  }, []);

  load = () => {
    return (
      
      <View style={stylePageHome.loader}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }



  return (

    <View style={stylePageHome.container}>
      <View style={stylePageHome.boxHeader}>
        <Text style={stylePageHome.greetingText}>
          Olá, <Text style={{ color: '#E9A6A6' }}>John!</Text>
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
          onEndReachedThreshold={0.5}
          numColumns={4}
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                SaveMove = item
                navigation.navigate('MoviePage', { SaveMove })
              }}
            >
              <View style={stylePageHome.styleApiMovie}>
                <Image style={stylePageHome.imgstyle} source={{
                  uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`
                }} />
              </View>

              <View style={stylePageHome.avaluationstyle}>
                <Icon style={stylePageHome.icon} name="star" />
                <Text style={stylePageHome.avaluationstyle}>{item.vote_average}/10</Text>
              </View>
            </TouchableOpacity>

          )}
          ListFooterComponent={this.load}
        />

      </View>
    </View>
  );
  

}


