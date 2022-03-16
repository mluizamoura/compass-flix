import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationHelpersContext} from '@react-navigation/native';
import api from '../../service/api';

export default function Movies({route, navigation}) {
  const {item} = route.params;
  const testflatlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [details, setDetails] = useState([]);
  const [elenco, setElenco] = useState([]);
  const [id, setId] = useState(item.id);

  useEffect(() => {
    async function getDetails() {
      try {
        const {data} = await api.get(
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
        const {data} = await api.get(
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

      <Image
        style={styles.capaMovie}
        source={{
          uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
        }}
      />

      <Text style={styles.titleMovie}>{details.original_title}</Text>
      <Text style={styles.yearMovie}>{new Date(details.release_date).getFullYear()}</Text>
      <Text style={styles.timeMovie}>{details.runtime}min</Text>
      <Text style={styles.autorMovie}>Direção por Matt Reeves</Text>
      <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
      <TouchableOpacity>
        <AntDesign name="heart" size={22} style={styles.heartIcon} />
      </TouchableOpacity>
      <Text style={styles.liked}>{details.popularity}K</Text>

      <Text style={styles.descriptionMovie}>
        {details.overview}
      </Text>
      <Text style={styles.elenco}>Elenco</Text>

      <FlatList
        style={styles.viewFLatList}
        data={elenco}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  backGroundMovie: {
    width: 420,
    height: 170.42,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButtonBack: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 19,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    width: 30,
    height: 30,
  },

  buttonBack: {
    color: 'black',
  },

  containerButtonStar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 19,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    width: 30,
    height: 30,
  },
  buttonStar: {
    color: 'black',
  },

  capaMovie: {
    zIndex: 999,
    position: 'relative',
    left: 20,
    top: -45,
    width: 116,
    height: 182,
    alignSelf: 'flex-start',
    borderRadius: 8,
  },

  titleMovie: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 70,
    marginTop: -160,
  },

  yearMovie: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    alignSelf: 'flex-end',
    marginTop: -17,
    marginRight: 60,
    color: '#FFFFFF',
  },

  timeMovie: {
    fontSize: 7,
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 25,
  },

  autorMovie: {
    alignSelf: 'center',
    marginLeft: 70,
    fontSize: 10,
    color: '#FFFFFF',
  },

  ratedMovie: {
    color: '#E9A6A6',
    fontSize: 30,
    marginTop: 25,
  },

  heartIcon: {
    color: 'red',
    alignSelf: 'center',
    marginLeft: 200,
    marginTop: -30,
  },

  liked: {
    marginTop: -5,
    marginLeft: 202,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },

  descriptionMovie: {
    color: '#FFFFFF',
    fontSize: 12,
    width: 332,
    height: 100,
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 20,
  },

  elenco: {
    paddingVertical: 4,
    textAlign: 'center',
    marginTop: -25,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    marginLeft: 20,
    color: 'white',
    alignSelf: 'flex-start',
    width: 40,

    backgroundColor: '#9C4A8B',
    fontSize: 10,
    marginBottom: 5,
  },

  viewFLatList: {
    flex: 1,
    backgroundColor: 'black',
    width: 400,
    flexWrap: 'wrap',
  },

  imageFlatList: {
    marginLeft: 20,
    marginTop: 10,
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  name: {
    color: 'white',
    fontSize: 15,
    marginLeft: 70,
    marginTop: -40,
  },

  character: {
    color: 'white',
    fontSize: 11,
    marginLeft: 70,
  },
});
