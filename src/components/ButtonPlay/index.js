import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function ButtonPlay() {
  return (
    <View style={styles.container}>
      <Icon name={'television-play'} style={styles.icon} />
    </View>
  );
}
