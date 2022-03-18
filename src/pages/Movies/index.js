import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {getCredits, getDetails} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';

export default function Movies({route, navigation}) {
  const id = route.params;
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);

  useEffect(() => {
    async function awaitGetDetails() {
      try {
        const dataDetails = await getDetails(id);
        setDetails(dataDetails);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetDetails();
  }, [id]);

  useEffect(() => {
    async function awaitGetCredits() {
      try {
        const dataCredits = await getCredits(id);
        setCast(dataCredits.cast);
        setCrew(dataCredits.crew);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.containerCast}>
        <View style={styles.containerProfileImg}>
          {item.profile_path === null ? (
            <Text style={styles.userText}>{item.name[0]}</Text>
          ) : (
            <Image
              style={styles.imageFlatList}
              source={{
                uri: `https://image.tmdb.org/t/p/w45/${item.profile_path}`,
              }}
            />
          )}
        </View>
        <View style={styles.containerProfileText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.character}>{item.character}</Text>
        </View>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
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
            <Text style={styles.titleMovie}>
              {details.title}{' '}
              <Text style={styles.yearMovie}>
                {new Date(details.release_date).getFullYear()}
              </Text>{' '}
              <Text style={styles.timeMovie}>{details.runtime} min</Text>
            </Text>
            <View>
              <Text style={styles.textAutor}>
                Direção por{' '}
                <Text style={styles.autorMovie}>
                  {crew &&
                    crew.find(profile => profile.job === 'Director').name}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.datailRatedLiked}>
          <View style={styles.detailsRated}>
            <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
          </View>

          <View style={styles.datailsLiked}>
            <View>
              <AntDesign name="heart" size={20} style={styles.heartIcon} />
            </View>
            <Text style={styles.liked}>{Math.floor(details.popularity)}K</Text>
          </View>
        </View>

        <View style={styles.detailsDescription}>
          <Text style={styles.descriptionMovie}>{details.overview}</Text>
        </View>
        <View style={styles.boxCast}>
          <Text style={styles.cast}>Elenco</Text>
          <View style={styles.line}></View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {cast ? (
        <FlatList
          style={styles.viewFLatList}
          data={cast}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
