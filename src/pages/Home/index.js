import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import api, {getMovie} from '../../service/api';

export default function Home() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function awaitMovie() {
      const response = await getMovie();
      setMovie(response);
    }
    awaitMovie();
  }, []);

  return <View></View>;
}
