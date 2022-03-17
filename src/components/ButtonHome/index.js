import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ButtonHome() {
  return (
    <View style={styles.container}>
      <Image
       source={require('../../assets/popcorn.png')}
       />
    </View>
  );
}
