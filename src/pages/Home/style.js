import React from 'react';
import { StyleSheet } from 'react-native';

const stylePageHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  boxHeader: {
    height: '22%',
  },

  greetingText: {
    color: '#FFFFFF',
    marginTop: '15%',
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'open sans',
  },
  textPopularMovies: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: '6%',
    marginLeft: '5%',
    fontFamily: 'open sans',
  },
  textDescription: {
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: '5%',
    fontFamily: 'open sans',
  },
  boxFlatList: {
    alignItems: 'center',
  },

  styleApiMovie: {
    margin: 8,
    width: 78,
    height: 90,
    borderRadius: 10,
    marginTop: '10%',
  },

  loader: {
    marginTop: 10,
    alignItems: 'center',
  },

  imgstyle: {
    width: 76.02,
    height: 95.03,
    borderRadius: 10,
  },

  avaluationstyle: {
    flexDirection: 'row',
    fontSize: 9,
    color: '#FFFFFF',
    marginLeft: '4%',
    fontFamily: 'open sans',
  },
  icon: {
    color: '#EC2626',
    fontSize: 11,
  },
});

export default stylePageHome;
