import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getAccountDetails, getChangeMovies} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
import style from './style';

export default function Home({navigation}) {
  const [name, setName] = useState(false);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(null);
  const [icon, setIcon] = useState(null);

  async function awaitMovie() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMovie(page);
      setMovie([...movie, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    awaitMovie();
  }, []);

  useEffect(() => {
    async function awaitUser() {
      try {
        const sessionId = await AsyncStorage.getItem('@CodeApi:session');
        const account = await getAccountDetails(sessionId);
        if (account.name) {
          setName(account.name);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.name[0]
              : account.avatar.tmdb.avatar_path,
          );
        } else {
          setName(account.username);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.username[0]
              : account.avatar.tmdb.avatar_path,
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    async function awaitChange() {
      const newMovies = await getChangeMovies(new Date());
      setNotify(newMovies.results);
    }
    awaitChange();
    awaitUser();
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <Text style={styles.greetingText}>
          Olá, <Text style={styles.greetingText__username}>{name && name}</Text>
        </Text>
        <Text style={styles.textDescription}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
        <Text style={styles.textPopularMovies}>Filmes populares este mês</Text>

        <View style={style.containerNotify}>
          {notify && notify.length > 0 ? (
            <View style={style.notifyActive}></View>
          ) : (
            <View></View>
          )}
          {icon && icon.length === 1 ? (
            <Text style={style.userText}>{icon}</Text>
          ) : (
            <Image
              style={style.userImage}
              source={{
                uri: `http://image.tmdb.org/t/p/w45/${icon}`,
              }}
            />
          )}
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <Loading />;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerMovie}
        onPress={() => {
          navigation.navigate('Movies', item.id);
        }}>
        <View style={styles.styleApiMovie}>
          <Image
            style={styles.imgstyle}
            source={{
              uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`,
            }}
          />
          <View style={styles.containerAvaluation}>
            <Icon style={styles.icon} name="star" />
            <Text style={styles.avaluationstyle}>{item.vote_average}/10</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {name ? (
        <FlatList
          data={movie}
          contentContainerStyle={styles.containerFlatList}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReached={page < 500 ? awaitMovie : null}
          onEndReachedThreshold={0.3}
          numColumns={4}
          renderItem={renderItem}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
