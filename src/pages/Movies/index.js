import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationHelpersContext } from '@react-navigation/native';
import api from '../../service/api';
import styles from './styles'

export default function Movies({ route, navigation }) {
  const { item } = route.params;
  const testflatlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [details, setDetails] = useState([]);
  const [elenco, setElenco] = useState([]);
  const [id, setId] = useState(item.id);

  useEffect(() => {
    async function getDetails() {
      try {
        const { data } = await api.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR`,
        );
        setDetails(data);
      } catch (error) {
        console.warn(error);
      }
    }
    getDetails();
  }, []);
  console.warn(details.overview);
  useEffect(() => {
    async function getElenco() {
      try {
        const { data } = await api.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR`,
        );
        setElenco(data.cast);
      } catch (error) {
        console.warn(error);
      }
    }
    getElenco();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backGroundMovie}
        source={{
          uri: `http://image.tmdb.org/t/p/w780/${details.backdrop_path}`,
        }}
      />
      <TouchableOpacity
        style={styles.containerButtonBack}
        onPress={() => navigation.goBack()}>
        <AntDesign style={styles.buttonBack} name="arrowleft" size={25} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerButtonStar}>
        <Feather name="star" size={25} style={styles.buttonStar} />
      </TouchableOpacity>

      <View style={styles.detailsMovies}>

        <View>
          <Image
            style={styles.capaMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
            }}
          />
        </View>


        <View style={styles.detaisMoviesTitle}>
          <Text style={styles.titleMovie}>{details.title} <Text style={styles.yearMovie}>{new Date(details.release_date).getFullYear()}</Text> <Text style={styles.timeMovie}>{details.runtime}min</Text>
          </Text>
          <View>
            <Text style={styles.textAutor}>Direção por <Text style={styles.autorMovie}>Dirigido por......</Text>
            </Text>
          </View>
        </View>

      </View>

      <View style={styles.datailRatedLiked}>

        <View style={styles.detailsRated}>
          <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
        </View>

        <View style={styles.datailsLiked}>
          <TouchableOpacity>
            <AntDesign name="heart" size={20} style={styles.heartIcon} />
          </TouchableOpacity>
          <Text style={styles.liked}>{details.popularity}K</Text>
        </View>

      </View>
    
        <Text style={styles.descriptionMovie}>
          {details.overview}
        </Text>
        <Text style={styles.elenco}>Elenco</Text>
     


      <FlatList
        style={styles.viewFLatList}
        data={elenco}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.imageFlatList}
              source={{
                uri: `https://image.tmdb.org/t/p/w45/${item.profile_path}`,
              }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.character}>{item.character}</Text>
          </View>
        )}
      />
    </View >

  );
}

