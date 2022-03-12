import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import api, {getMovie, geet} from '../../service/api';

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
    <View>
      <FlatList
        data={movie}
        keyExtractor={(item, index) => index}
        onEndReached={page<500? awaitMovie : "" }
        onEndReachedThreshold={0.3}
        renderItem={({item}) => (
          <>
            <Text style={{backgroundColor: 'pink'}}>{item.title}</Text>
          </>
        )}
      />
    </View>
  );
}
