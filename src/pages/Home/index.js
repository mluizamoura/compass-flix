import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import api, {getMovie, getAccountDetails} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
  const [name, setName] = useState(null);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  async function awaitMovie() {
    try {
      const results = await getMovie(page);
      setMovie([...movie, ...results]);
      setPage(page + 1);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    awaitMovie();
  }, []);

  useEffect(() => {
    async function awaitUser() {
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const count = await getAccountDetails(sessionId);
      setName(count.name);
      // console.warn(count);
    }
    awaitUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.greetingText}>
          Olá, <Text style={styles.greetingText.name}>{name && name}</Text>
        </Text>
        <Text style={styles.textDescription}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
        <Text style={styles.textPopularMovies}>Filmes populares este mês</Text>
      </View>
      <View style={styles.boxFlatList}>
        <FlatList
          data={movie}
          keyExtractor={(item, index) => index}
          onEndReached={page < 500 ? awaitMovie : ''}
          onEndReachedThreshold={0.3}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Movies');
              }}>
              <View style={styles.styleApiMovie}>
                <Image
                  style={styles.imgstyle}
                  source={{
                    uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`,
                  }}
                />
              </View>

              <View style={styles.avaluationstyle}>
                <Icon style={styles.icon} name="star" />
                <Text style={styles.avaluationstyle}>
                  {item.vote_average}/10
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
