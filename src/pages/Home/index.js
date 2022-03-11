import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
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

      </View>
    </View>
  );
}

const stylePageHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  boxHeader:{
    height: "25%",

  },
  boxFlatList:{
    height:"75%"

  },

  greetingText: {
    color: '#FFFFFF',
    marginTop: '15%',
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:"open sans",
    
  },
  textDescription: {
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: '5%',
    fontFamily:"open sans",
  },

  textPopularMovies: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: '7%',
    marginLeft: '5%',
    fontFamily:"open sans",
  },
});
