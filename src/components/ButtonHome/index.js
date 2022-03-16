import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function ButtonHome() {
  return (
    <View style={styles.container}>
      <Icon name={'popcorn'} style={styles.icon} />
    </View>
  );
}
