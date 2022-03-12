import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
import api, {getMovie, geet} from '../../service/api';

export default function Home() {
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   async function awaitMovie() {
  //     const response = await getMovie();
  //     setMovie(response);
  //   }
  //   awaitMovie();
  // }, []);

  const perPage = 20;
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function geet() {
    try {
      if (loading) return;
      const {data} = await api.get(
        `movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`,
      );
      setDados([...dados, ...data.results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      consol1e.warn(error);
    }
  }
  useEffect(() => {
    geet();
  }, []);

  console.warn(dados);

  const size= 'w92'
 const poster_path = '/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
  function getImage(tamanho, caminho) {
    const image = `http://image.tmdb.org/t/p/${tamanho}/${caminho}`;
    return image;
  }
  
 

  return (
    <View>
      <FlatList
        data={dados}
        keyExtractor={item => item.id.toString()}
        onEndReached={geet}
        onEndReachedThreshold={0.3}
        renderItem={({item}) => (
            <>
            <Text>
              {item.title}
            </Text>
            <Image style={{marginTop: 100}} source={{ uri: getImage(size,item.poster_path)}} />
            </>
            
                       
        )}
      />
    </View>
  );
}
